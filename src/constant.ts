interface appConfig {
  backendHost: string;
}

declare global {
  interface Window {
    appConfig: appConfig;
  }
}

const config = window.appConfig;

export const rootUrl: string = "https://" + config.backendHost;
