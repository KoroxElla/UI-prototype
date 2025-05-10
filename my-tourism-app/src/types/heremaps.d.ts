declare namespace H {
  namespace service {
    interface Platform {
      createDefaultLayers(): any;
    }
  }
  
  namespace Map {
    interface Options {
      tilt?: number;
      heading?: number;
    }
  }
  
  namespace mapevents {
    class MapEvents {
      constructor(map: H.Map); // Explicitly declare it takes 1 argument
    }
    class Behavior {
      constructor(mapEvents: MapEvents); // Explicitly declare it takes 1 argument
    }
  }
  
  namespace ui {
    class UI {
      static createDefault(map: any, layers: any): any;
    }
  }
}