import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'vue-cap-test',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    hostname: 'localhost:8080',
    iosScheme: 'capacitor',
    androidScheme: 'http',
  },
};

export default config;
