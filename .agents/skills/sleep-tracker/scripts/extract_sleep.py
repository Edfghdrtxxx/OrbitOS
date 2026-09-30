#!/usr/bin/env python3
"""
sleep-tracker: Automated sleep extraction & analytics for Huawei Health on iOS.
Runs via phone-harness:
  phone-harness < .agents/skills/sleep-tracker/scripts/extract_sleep.py -- [args]
Or with python when phone_harness is on PATH:
  python3 .agents/skills/sleep-tracker/scripts/extract_sleep.py --days 30
"""
import argparse
import calendar
import datetime
import json
import os
import re
import sys
import time

# Ensure phone_harness helpers are available
try:
    # If run via phone-harness CLI, helpers are in globals
    _ = screen_info
except NameError:
    # Fallback import if run with standard python
    sys.path.insert(0, "/Users/leyi/.phone-harness/src")
    try:
        from phone_harness.helpers import *
    except ImportError:
        pass

DUR_RE = re.compile(r'^(?:(\d+)\s*h)?\s*(?:(\d+)\s*min)?$')
STAGE_LABELS = {"deep sleep": "deep", "light sleep": "light", "rem sleep": "rem"}

def fmt_dur(mins):
    h, m = divmod(mins, 60)
    if not h:
        return f"{m} min"
    return f"{h} h {m:02d} min"

def normalize_time_str(s):
    if not s:
        return None
    s = s.strip()
    m1 = re.match(r'^(\d{1,2})(\d{2})\s*([AP]M)$', s)
    if m1:
        return f"{m1.group(1)}:{m1.group(2)} {m1.group(3)}"
    m2 = re.match(r'^(\d{1,2})[:.-](\d{2})\s*([AP]M)$', s)
    if m2:
        return f"{m2.group(1)}:{m2.group(2)} {m2.group(3)}"
    return s

def time_to_min(t_str):
    if not t_str: return None
    dt = datetime.datetime.strptime(t_str, "%I:%M %p")
    m = dt.hour * 60 + dt.minute
    if m >= 20 * 60: return m - 24 * 60
    return m

def min_to_time(m_val):
    if m_val is None: return "N/A"
    if m_val < 0: m_val += 24 * 60
    h = int(m_val) // 60
    m = int(round(m_val)) % 60
    period = "AM" if h < 12 or h == 24 else "PM"
    h_12 = h % 12
    if h_12 == 0: h_12 = 12
    return f"{h_12}:{m:02d} {period}"

class SleepExtractor:
    def __init__(self):
        info = screen_info()
        self.win = info['window']
        self.cal_x = self.win['x'] + 284
        self.cal_y = self.win['y'] + 105
        self.cols_x = [85, 116, 146, 177, 208, 238, 269]
        self.rows_y = [382, 408, 435, 461, 487, 513]
        self.dow_map = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

    def refresh_window(self):
        self.win = screen_info()['window']
        self.cal_x = self.win['x'] + 284
        self.cal_y = self.win['y'] + 105

    def open_calendar(self):
        self.refresh_window()
        tap(self.cal_x, self.cal_y)
        time.sleep(0.35)

    def switch_calendar_month(self, direction='prev'):
        words = ocr()
        header = [w for w in words if '202' in w['text'] and w['y'] > self.win['y'] + 200]
        y = header[0]['y'] if header else self.win['y'] + 335
        x = self.win['x'] + (86 if direction == 'prev' else 268)
        tap(x, y)
        time.sleep(0.4)

    def displayed_date(self):
        """Date in the Day page header, e.g. 'Jul 20, 2026'."""
        for w in sorted(ocr(), key=lambda w: w['y']):
            m = re.search(r'([A-Z][a-z]{2})\s+(\d{1,2}),\s*(\d{4})', w['text'])
            if m and m.group(1) in calendar.month_abbr:
                return datetime.date(int(m.group(3)), list(calendar.month_abbr).index(m.group(1)), int(m.group(2)))
        return None

    def goto_date(self, target, attempts=3):
        """Navigate and confirm the header shows target; False if it never does."""
        for _ in range(attempts):
            shown = self.displayed_date()
            if shown == target:
                return True
            self.scroll_to_top()
            self.open_calendar()
            # The popup opens on the month of the date currently shown.
            if shown:
                delta = (target.year - shown.year) * 12 + target.month - shown.month
                for _ in range(abs(delta)):
                    self.switch_calendar_month('next' if delta > 0 else 'prev')
            self.select_day_in_calendar(target.year, target.month, target.day)
        return self.displayed_date() == target

    def scroll_to_top(self, max_scrolls=6):
        for _ in range(max_scrolls):
            if not scroll_screen(direction='down', amount=0.8, settle=0.8)['moved']:
                break

    def parse_stages(self, words):
        """Pair each stage row label with the duration on the same row.

        Never assign by vertical order: the Sleep report carousel ("Sleep duration
        (7/14-7/20) 7h 25 min") sits just above the stage rows and injects stray
        durations. The chart legend repeats the labels but has no duration beside it.
        """
        x_split = self.win['x'] + 250
        durs = []
        for w in words:
            m = DUR_RE.match(w['text'].replace('p ', '').strip())
            if m and (m.group(1) or m.group(2)) and w['x'] > x_split:
                durs.append((int(m.group(1) or 0) * 60 + int(m.group(2) or 0), w['y']))
        stages = {}
        for w in words:
            key = STAGE_LABELS.get(w['text'].lstrip('•· ').strip().lower())
            if not key or w['x'] > x_split:
                continue
            row = [v for v, y in durs if abs(y - w['y']) <= 8]
            if row:
                stages[key] = row[0]
        return stages

    def parse_disruption(self, words):
        """'Times woke up' -> '1 time Normal'; 'Deep sleep continuity' -> '83 points Normal' (value box just below)."""
        out = {}
        # OCR reads a zero count as the letter O ("O times Normal").
        for label, key, pat in (("Times woke up", "times_woke", r'([\dOo]+)\s*time'),
                                ("Deep sleep continuity", "continuity", r'(\d+)\s*points')):
            for w in words:
                if w['text'].strip() != label:
                    continue
                below = sorted((v for v in words if 0 < v['y'] - w['y'] <= 25 and abs(v['x'] - w['x']) < 60),
                               key=lambda v: v['y'])
                for v in below:
                    m = re.search(pat, v['text'])
                    if m:
                        out[key] = int(re.sub('[Oo]', '0', m.group(1)))
                        break
        return out

    def parse_header_night(self, words):
        """Header 'Night sleep' value (e.g. '6.34 min' = 6 h 34 min); ground truth for the stage sum."""
        top = self.win['y'] + 320
        heads = [w for w in words if w['text'].strip() == 'Night sleep' and w['y'] < top]
        if not heads:
            return None
        h = heads[0]
        below = sorted((w for w in words if 0 < w['y'] - h['y'] < 50), key=lambda w: w['y'])
        for w in below:
            m = re.search(r'(\d+)\s*[:.]\s*(\d{1,2})\s*min', w['text'])
            if m:
                return int(m.group(1)) * 60 + int(m.group(2))
            m = re.search(r'^(\d+)\s*h\b', w['text'].strip())
            if m:
                return int(m.group(1)) * 60
        return None

    def select_day_in_calendar(self, year: int, month: int, day: int):
        """Select a date using dynamic OCR detection with fallback to calibrated grid math."""
        words = ocr()
        # Look for day number inside calendar card bounds
        y_min = self.win['y'] + 320
        y_max = self.win['y'] + 560
        candidates = [w for w in words if w['text'] == str(day) and y_min <= w['y'] <= y_max]
        
        if candidates:
            # Pick candidate closest to expected column
            first_weekday = calendar.weekday(year, month, 1)
            offset = (first_weekday + 1) % 7
            expected_col = (day + offset - 1) % 7
            target_x = self.win['x'] + self.cols_x[expected_col]
            best = min(candidates, key=lambda c: abs(c['x'] - target_x))
            tap(best['x'], best['y'])
        else:
            # Fallback to calibrated grid coordinates
            first_weekday = calendar.weekday(year, month, 1)
            offset = (first_weekday + 1) % 7
            col = (day + offset - 1) % 7
            row = (day + offset - 1) // 7
            tap(self.win['x'] + self.cols_x[col], self.win['y'] + self.rows_y[row])
        time.sleep(0.65)

    def capture_and_parse_day(self, target_date: datetime.date):
        month_name = calendar.month_abbr[target_date.month]
        d = target_date.day
        year = target_date.year
        dow = self.dow_map[target_date.weekday()]

        # The Day page keeps its scroll offset across date switches; read from the top.
        self.scroll_to_top()
        words = ocr()
        raw_texts = [w['text'] for w in sorted(words, key=lambda x: (x['y'], x['x']))]
        full_text = "\n".join(raw_texts)

        # Verification with 1 retry
        if not re.search(rf'{month_name}\s+{d},\s*{year}', full_text):
            time.sleep(0.4)
            words = ocr()
            raw_texts = [w['text'] for w in sorted(words, key=lambda x: (x['y'], x['x']))]
            full_text = "\n".join(raw_texts)

        rec = {
            "day": d,
            "date": target_date.strftime("%Y-%m-%d"),
            "day_of_week": dow,
            "type": "Night sleep",
            "score": None,
            "bed_time": None,
            "wake_up": None,
            "night_sleep_str": None,
            "night_sleep_min": 0,
            "naps_str": "0 min",
            "naps_min": 0,
            "total_sleep_str": None,
            "total_sleep_min": 0,
            "deep_sleep_str": None,
            "deep_sleep_min": 0,
            "light_sleep_str": None,
            "light_sleep_min": 0,
            "rem_sleep_str": None,
            "rem_sleep_min": 0,
            "percentile_val": "-",
            "percentile": "N/A",
            "times_woke": None,
            "continuity": None,
            "notes": ""
        }

        if "No sleep data" in full_text:
            rec["type"] = "No data"
            rec["notes"] = "No sleep data recorded"
            return rec

        pct_m = re.search(r'Better than\s+(\d+%)\s+of', full_text)
        if pct_m:
            rec["percentile"] = f"Better than {pct_m.group(1)}"
            rec["percentile_val"] = pct_m.group(1)

        # TruSleep <3h nap rule
        if "Anything less than that counts as a nap" in full_text or ("Naps" in full_text and "Night sleep" not in full_text):
            rec["type"] = "Nap only"
            rec["score"] = "N/A"
            nap_time = re.search(r'(\d+)\s*h\s*(\d+)\s*min\s+(\d{1,2}[:.]?\d{2}\s*[AP]M|\d{3,4}\s*[AP]M)-(\d{1,2}[:.]?\d{2}\s*[AP]M|\d{3,4}\s*[AP]M)', full_text)
            if nap_time:
                h, m, start, end = nap_time.groups()
                rec["naps_min"] = int(h) * 60 + int(m)
                rec["naps_str"] = fmt_dur(rec["naps_min"])
                rec["total_sleep_str"] = rec["naps_str"]
                rec["total_sleep_min"] = rec["naps_min"]
                rec["bed_time"] = normalize_time_str(start)
                rec["wake_up"] = normalize_time_str(end)
                rec["notes"] = f"Nap only ({rec['bed_time']} - {rec['wake_up']}), < 3h (no TruSleep score)"
            return rec

        score_m = re.search(r'(\d{2})\s*(?:\n[^\n]+)?\n?\s*points', full_text)
        if score_m:
            rec["score"] = int(score_m.group(1))

        bed_m = re.search(r'(?:[BD]ed\s*time)\s*(\d{1,2}[:.-]?\d{2}\s*[AP]M|\d{3,4}\s*[AP]M)', full_text)
        if bed_m:
            rec["bed_time"] = normalize_time_str(bed_m.group(1))

        wake_m = re.search(r'(?:Woke|Wake)\s*up\s*(\d{1,2}[:.-]?\d{2}\s*[AP]M|\d{3,4}\s*[AP]M)', full_text)
        if wake_m:
            rec["wake_up"] = normalize_time_str(wake_m.group(1))

        naps_m = re.search(r'Total sleep\s+([^|]+)\|\s*Naps\s+([^\n]+)', full_text)
        if naps_m:
            rec["total_sleep_str"] = naps_m.group(1).strip()
            rec["naps_str"] = naps_m.group(2).strip()
            nm = re.search(r'(\d+)\s*min', rec["naps_str"])
            if nm:
                rec["naps_min"] = int(nm.group(1))
            nm_h = re.search(r'(\d+)\s*h\s*(\d+)\s*min', rec["naps_str"])
            if nm_h:
                rec["naps_min"] = int(nm_h.group(1)) * 60 + int(nm_h.group(2))

        header_night = self.parse_header_night(words)
        stages = self.parse_stages(words)
        for _ in range(2):  # stage rows can sit below the fold
            if len(stages) == 3:
                break
            scroll_screen(direction='up', amount=0.3, settle=0.8)
            stages.update(self.parse_stages(ocr()))

        # Night-disruption metrics sit further down the page (Times woke up / Deep sleep continuity).
        extra = {}
        for _ in range(4):
            extra.update({k: v for k, v in self.parse_disruption(ocr()).items() if k not in extra})
            if len(extra) == 2:
                break
            scroll_screen(direction='up', amount=0.4, settle=0.8)
        rec["times_woke"] = extra.get("times_woke")
        rec["continuity"] = extra.get("continuity")

        if header_night:
            rec["night_sleep_min"] = header_night
            rec["night_sleep_str"] = fmt_dur(header_night)
        for key in ("deep", "light", "rem"):
            if key in stages:
                rec[f"{key}_sleep_min"] = stages[key]
                rec[f"{key}_sleep_str"] = fmt_dur(stages[key])

        stage_sum = sum(stages.values())
        if len(stages) < 3:
            rec["notes"] = f"CHECK: stages missing {sorted({'deep', 'light', 'rem'} - set(stages))}"
        elif header_night and abs(stage_sum - header_night) > 1:
            rec["notes"] = f"CHECK: stage sum {fmt_dur(stage_sum)} != header {fmt_dur(header_night)}"
        elif not header_night:
            rec["night_sleep_min"] = stage_sum
            rec["night_sleep_str"] = fmt_dur(stage_sum)
        if rec["night_sleep_min"] and rec["rem_sleep_min"] / rec["night_sleep_min"] > 0.40:
            rec["notes"] = (rec["notes"] + "; " if rec["notes"] else "") + "CHECK: REM > 40% of night sleep"

        if not rec["total_sleep_str"]:
            rec["total_sleep_min"] = rec["night_sleep_min"] + rec["naps_min"]
            h = rec["total_sleep_min"] // 60
            m = rec["total_sleep_min"] % 60
            rec["total_sleep_str"] = f"{h} h {m:02d} min" if m else f"{h} h"
        else:
            tm = re.search(r'(\d+)\s*h\s*(\d+)\s*min', rec["total_sleep_str"])
            if tm:
                rec["total_sleep_min"] = int(tm.group(1)) * 60 + int(tm.group(2))
            rec["total_sleep_str"] = fmt_dur(rec["total_sleep_min"])
            if rec["naps_min"]:
                rec["naps_str"] = fmt_dur(rec["naps_min"])
            if abs(rec["total_sleep_min"] - rec["night_sleep_min"] - rec["naps_min"]) > 1:
                rec["notes"] = (rec["notes"] + "; " if rec["notes"] else "") + "CHECK: total != night + naps"

        return rec

    def extract_range(self, dates: list):
        results = []
        for i, dt in enumerate(dates):
            t0 = time.time()
            if self.goto_date(dt):
                rec = self.capture_and_parse_day(dt)
            else:
                rec = {"date": dt.strftime("%Y-%m-%d"), "day_of_week": self.dow_map[dt.weekday()], "type": "No data",
                       "score": None, "night_sleep_str": None, "total_sleep_str": None, "night_sleep_min": 0,
                       "total_sleep_min": 0, "naps_min": 0, "naps_str": "0 min", "bed_time": None, "wake_up": None,
                       "deep_sleep_str": None, "light_sleep_str": None, "rem_sleep_str": None, "deep_sleep_min": 0,
                       "light_sleep_min": 0, "rem_sleep_min": 0, "percentile_val": "-", "percentile": "N/A",
                       "times_woke": None, "continuity": None, "notes": "CHECK: could not navigate to this date"}
            score_txt = str(rec['score']) if rec['score'] is not None else "N/A"
            dur_txt = rec['night_sleep_str'] or rec['total_sleep_str'] or "None"
            print(f"[{i+1:02d}/{len(dates):02d}] {rec['date']} ({rec['day_of_week']}): score={score_txt:<4} sleep={dur_txt:<11} ({time.time()-t0:.2f}s)")
            results.append(rec)
        return results

def generate_markdown_report(records: list, title: str, out_path: str):
    scores = [r["score"] for r in records if isinstance(r["score"], int)]
    night_mins = [r["night_sleep_min"] for r in records if r["night_sleep_min"] > 0]
    total_mins = [r["total_sleep_min"] for r in records if r["night_sleep_min"] > 0]  # same nights as avg_night
    deep_mins = [r["deep_sleep_min"] for r in records if r["deep_sleep_min"] > 0]
    light_mins = [r["light_sleep_min"] for r in records if r["light_sleep_min"] > 0]
    rem_mins = [r["rem_sleep_min"] for r in records if r["rem_sleep_min"] > 0]
    nap_days = [r for r in records if r["naps_min"] > 0]
    woke = [r["times_woke"] for r in records if r.get("times_woke") is not None]

    bed_mins = [time_to_min(r["bed_time"]) for r in records if r["bed_time"] and r["type"] == "Night sleep"]
    wake_mins = [time_to_min(r["wake_up"]) for r in records if r["wake_up"] and r["type"] == "Night sleep"]

    avg_score = sum(scores) / len(scores) if scores else 0
    avg_night = sum(night_mins) / len(night_mins) if night_mins else 0
    avg_total = sum(total_mins) / len(total_mins) if total_mins else 0
    avg_deep = sum(deep_mins) / len(deep_mins) if deep_mins else 0
    avg_light = sum(light_mins) / len(light_mins) if light_mins else 0
    avg_rem = sum(rem_mins) / len(rem_mins) if rem_mins else 0
    avg_bed = sum(bed_mins) / len(bed_mins) if bed_mins else None
    avg_wake = sum(wake_mins) / len(wake_mins) if wake_mins else None

    deep_pct = (avg_deep / avg_night * 100) if avg_night else 0
    rem_pct = (avg_rem / avg_night * 100) if avg_night else 0
    light_pct = (avg_light / avg_night * 100) if avg_night else 0

    doc = [
        "---",
        "type: inbox",
        f"created: {datetime.date.today().strftime('%Y-%m-%d')}",
        f"topic: {title}",
        "priority: normal",
        "status: pending",
        "source: Huawei Health App via iPhone Mirroring",
        "tags:",
        "  - inbox",
        "  - health",
        "  - sleep",
        "  - logs",
        "---",
        "",
        f"# {title}",
        "",
        "**Source:** Huawei Health App (HUAWEI TruSleep™) via iPhone Mirroring  ",
        f"**Tracking Window:** {records[0]['date']} to {records[-1]['date']} ({len(records)} days)  ",
        f"**Captured Date:** {datetime.date.today().strftime('%Y-%m-%d')}  ",
        "",
        "---",
        "",
        "## 1. Summary Statistics",
        "",
        "| Metric | Value | Notes |",
        "| :--- | :--- | :--- |",
        f"| **Overall Sleep Score** | **{avg_score:.1f} / 100** | Monthly average |",
        f"| **Average Night Sleep** | **{int(avg_night)//60} h {int(round(avg_night))%60:02d} min** ({avg_night:.1f} min) | Night sleep only |",
        f"| **Average Total Sleep** | **{int(avg_total)//60} h {int(round(avg_total))%60:02d} min** ({avg_total:.1f} min) | Night sleep + naps |",
        f"| **Times Woke Up** | **{(sum(woke) / len(woke)) if woke else 0:.1f} / night** | {sum(w >= 2 for w in woke)} nights with ≥ 2 (Huawei reference: 0–1) |",
        f"| **Flagged Rows** | **{sum(1 for r in records if 'CHECK:' in r['notes'])}** | Re-read dates marked CHECK before analysis |",
        f"| **Average Bedtime** | **{min_to_time(avg_bed)}** | Mean sleep onset |",
        f"| **Average Wake-up Time** | **{min_to_time(avg_wake)}** | Mean wake time |",
        f"| **Deep Sleep** | **{int(avg_deep)//60} h {int(round(avg_deep))%60:02d} min** ({deep_pct:.1f}%) | Stage average |",
        f"| **Light Sleep** | **{int(avg_light)//60} h {int(round(avg_light))%60:02d} min** ({light_pct:.1f}%) | Stage average |",
        f"| **REM Sleep** | **{int(avg_rem)//60} h {int(round(avg_rem))%60:02d} min** ({rem_pct:.1f}%) | Stage average |",
        f"| **Daytime Naps** | **{len(nap_days)} days** (Total: {sum(r['naps_min'] for r in nap_days)//60} h {sum(r['naps_min'] for r in nap_days)%60:02d} min) | Recorded nap count |",
        "",
        "---",
        "",
        "## 2. Master Sleep Log (Day-by-Day)",
        "",
        "| Date | Day | Score | Bed Time | Wake Up | Night Sleep | Total Sleep | Naps | Deep Sleep | Light Sleep | REM Sleep | Woke | Continuity | Better than |",
        "| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |"
    ]

    for r in records:
        sc = f"**{r['score']}**" if isinstance(r['score'], int) else (r['score'] or "-")
        bed = r['bed_time'] or "-"
        wake = r['wake_up'] or "-"
        ns = r['night_sleep_str'] or "-"
        ts = r['total_sleep_str'] or "-"
        naps = r['naps_str'] if r['naps_str'] != "0 min" else "-"
        ds = r['deep_sleep_str'] or "-"
        ls = r['light_sleep_str'] or "-"
        rem = r['rem_sleep_str'] or "-"
        pct = r.get('percentile_val', '-')
        woke = r.get('times_woke')
        cont = r.get('continuity')
        woke = "-" if woke is None else woke
        cont = "-" if cont is None else cont
        doc.append(f"| {r['date']} | {r['day_of_week']} | {sc} | {bed} | {wake} | {ns} | {ts} | {naps} | {ds} | {ls} | {rem} | {woke} | {cont} | {pct} |")

    doc.extend([
        "",
        "---",
        "",
        "## 3. Detailed Daily Sleep Records",
        ""
    ])

    for r in records:
        doc.append(f"### {r['date']} ({r['day_of_week']})")
        doc.append(f"- **Sleep Score:** {r['score']} points ({r.get('percentile', 'N/A')})")
        doc.append(f"- **Schedule:** Bedtime: `{r['bed_time']}` | Wake-up: `{r['wake_up']}`")
        doc.append(f"- **Night Sleep:** {r['night_sleep_str']} (Total Sleep: {r['total_sleep_str']})")
        if r['naps_str'] != "0 min":
            doc.append(f"- **Naps:** {r['naps_str']}")
        if r['deep_sleep_str']:
            doc.append(f"- **Stages:** Deep: {r['deep_sleep_str']} | Light: {r['light_sleep_str']} | REM: {r['rem_sleep_str']}")
        if r.get('times_woke') is not None:
            doc.append(f"- **Disruption:** Woke up {r['times_woke']} time(s) | Deep sleep continuity: {r['continuity']} points")
        if r.get('notes'):
            doc.append(f"- **Notes:** {r['notes']}")
        doc.append("")

    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(doc))
    print(f"Wrote report to {out_path} ({len(records)} days).")

def main():
    parser = argparse.ArgumentParser(description="Extract sleep data via phone-harness")
    parser.add_argument("--month", type=str, help="Target month in YYYY-MM format")
    parser.add_argument("--days", type=int, help="Extract rolling last N days")
    parser.add_argument("--out", type=str, help="Output markdown path")
    args = parser.parse_args()

    extractor = SleepExtractor()

    if args.month:
        y, m = map(int, args.month.split("-"))
        num_days = calendar.monthrange(y, m)[1]
        dates = [datetime.date(y, m, d) for d in range(1, num_days + 1)]
        title = f"{calendar.month_name[m]} {y} Sleep Status Log"
        out_path = args.out or f"00_Inbox/sleep status log/Sleep_Status_Log_{y}-{m:02d}.md"
    elif args.days:
        end = datetime.date.today()
        dates = [end - datetime.timedelta(days=i) for i in reversed(range(args.days))]
        title = f"{args.days}-Day Rolling Sleep Status Log"
        out_path = args.out or f"00_Inbox/sleep status log/Sleep_Status_Log_{dates[0]}_to_{dates[-1]}.md"
    else:
        # Default to current month
        today = datetime.date.today()
        num_days = calendar.monthrange(today.year, today.month)[1]
        dates = [datetime.date(today.year, today.month, d) for d in range(1, num_days + 1)]
        title = f"{calendar.month_name[today.month]} {today.year} Sleep Status Log"
        out_path = args.out or f"00_Inbox/sleep status log/Sleep_Status_Log_{today.year}-{today.month:02d}.md"

    records = extractor.extract_range(dates)
    generate_markdown_report(records, title, out_path)

if __name__ == "__main__":
    main()
