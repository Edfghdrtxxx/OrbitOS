# 06 — Exotic Nuclide Warnings

## Objective
Add informational warning flags to DLL calculation results when exotic nuclides (far from the valley of stability) are used, since the DLL relies on mass model extrapolations for these cases and certain charge-state functions are non-functional in standalone mode.

## Changes

### `lisepp/constants.py` — `check_nuclide_stability(z, a)`
Added a new function that checks whether a nuclide is far from the beta-stability valley using Green's approximation (N_stable ~ Z + 0.4 * A^(2/3) for heavy nuclei, N ~ Z for light nuclei). Returns a warning string if the nuclide deviates beyond a generous tolerance, or `None` if it is near stability. Also catches invalid (Z, A) combinations (Z < 1, A < 1, A < Z).

### `server.py` — Warning injection in 9 tools

| Tool | Warning type |
|------|-------------|
| `calc_energy_loss` | Stability check on (z, a) |
| `calc_range` | Stability check on (z, a) |
| `calc_straggling` | Stability check on (z, a) |
| `calc_stopping` | Stability check on (z, a) |
| `calc_mass` | Stability check on (z, a) |
| `calc_brho_tool` | Stability check on (z, a) |
| `calc_tof_tool` | Stability check on (z, a) |
| `calc_de_tof_tool` | Stability check on (z, a) |
| `calc_charge_state` | **Always-on** warning about `charge_double()` / `chargeSchiwietzGas()` being non-functional in standalone DLL mode |

All warnings are added as a `"warning"` key in the result dict **after** `format_result()` is called, so they do not get sig-fig formatted. The warning is purely informational and never blocks the calculation.

### Tools NOT modified (no ion Z/A input)
- `get_material_info` — takes only target_z, no projectile nuclide
- `lpp_parse`, `lpp_summary`, `lpp_get`, `lpp_set`, `lpp_create` — file tools, no physics
- `gui_open_file`, `gui_run_calculation`, `gui_read_results` — GUI automation

## Design notes
- The stability check uses a simple semi-empirical formula with generous tolerances; it is not meant to be a precise nuclear physics boundary, just a "heads-up" for clearly exotic species.
- For `calc_charge_state`, the warning is unconditional because the `charge_double()` and `chargeSchiwietzGas()` limitations apply regardless of nuclide exoticity.
