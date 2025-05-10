// src/hooks/useHereMaps.ts
import { useEffect, useState } from 'react';

// Minimal type declarations for HERE Maps
declare global {
  interface Window {
    H: {
      service: {
        Platform: new (options: { apikey: string }) => {
          createDefaultLayers(): {
            vector: {
              normal: {
                map: unknown;
              };
            };
          };
        };
      };
      Map: new (
        container: HTMLElement,
        baseLayer: unknown,
        options: {
          center: { lat: number; lng: number };
          zoom: number;
          tilt?: number;
          heading?: number;
          pixelRatio?: number;
        }
      ) => {
        dispose(): void;
        getViewModel(): {
          setLookAtData(data: { tilt: number; heading: number }, animate: boolean): void;
        };
      };
      mapevents: {
        MapEvents: new (map: unknown) => unknown;
        Behavior: new (mapEvents: unknown) => unknown;
      };
      ui: {
        UI: {
          createDefault(map: unknown, layers: unknown): unknown;
        };
      };
    };
  }
}

const useHereMaps = () => {
  const [mapsLoaded, setMapsLoaded] = useState(false);

  useEffect(() => {
    if (window.H) {
      setMapsLoaded(true);
      return;
    }

    const scriptUrls = [
      'https://js.api.here.com/v3/3.1/mapsjs-core.js',
      'https://js.api.here.com/v3/3.1/mapsjs-service.js',
      'https://js.api.here.com/v3/3.1/mapsjs-mapevents.js',
      'https://js.api.here.com/v3/3.1/mapsjs-ui.js'
    ];

    const scripts: HTMLScriptElement[] = [];
    let loadedCount = 0;

    const handleScriptLoad = () => {
      loadedCount++;
      if (loadedCount === scriptUrls.length && window.H) {
        setMapsLoaded(true);
      }
    };

    scriptUrls.forEach((url) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.onload = handleScriptLoad;
      document.body.appendChild(script);
      scripts.push(script);
    });

    return () => {
      scripts.forEach(script => {
        document.body.removeChild(script);
      });
    };
  }, []);

  return mapsLoaded;
};

export default useHereMaps;