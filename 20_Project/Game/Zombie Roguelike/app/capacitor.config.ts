import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.orbitos.zombieroguelike',
  appName: 'Zombie Roguelike',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    // Allow loading bundled assets from the file system; no remote URL.
    androidScheme: 'https',
    iosScheme: 'capacitor',
  },
  android: {
    // Lock to landscape at the platform level via AndroidManifest after
    // `cap add android` — this config only controls web-layer defaults.
    allowMixedContent: false,
    backgroundColor: '#0b0d10',
  },
  ios: {
    contentInset: 'never',
    backgroundColor: '#0b0d10',
    // Landscape lock is enforced via Info.plist after `cap add ios`
    // (UISupportedInterfaceOrientations = landscape only).
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 300,
      launchAutoHide: true,
      backgroundColor: '#0b0d10',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
    StatusBar: {
      // Hidden at runtime; see src/main.ts bootstrap for runtime calls
      // (StatusBar.hide(), ScreenOrientation.lock({ orientation: 'landscape' })).
      style: 'DARK',
      backgroundColor: '#0b0d10',
      overlaysWebView: true,
    },
    ScreenOrientation: {
      // Runtime-locked to landscape via @capacitor/screen-orientation in app bootstrap.
      lockOrientation: 'landscape',
    },
  },
};

export default config;
