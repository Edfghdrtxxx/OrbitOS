// Tauri 2 mobile-ready entry point. `main.rs` is a thin wrapper that calls
// `run()` so the same app can be reused across desktop and mobile targets.
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|_app| Ok(()))
        .run(tauri::generate_context!())
        .expect("error while running Zombie Roguelike");
}
