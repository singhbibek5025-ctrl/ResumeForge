import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bibeksingh.resumeforge',
  appName: 'ResumeForge',
  webDir: 'web',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https'
  }
};

export default config;
