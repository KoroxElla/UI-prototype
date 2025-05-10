export {};

declare global {
  interface Window {
    RPM: {
      init: (options: any) => void;
      displayIframe: (show: boolean) => void;
      // Add more methods if needed
    };
  }
}
