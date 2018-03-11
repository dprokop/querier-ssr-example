
declare interface Window {
  __PRELOADED_DATA__: {},
  __PRELOADED_STATE__: {
  };
  __APP__: {
    store?: {},
  };
  Querier: {};
}

declare module 'babel-plugin-universal-import/importCss.js';
declare module 'babel-plugin-universal-import/universalImport.js';
declare module 'react-image-magnify';

declare module '*.css' {
  const classes: {[className: string]: string};
  export = classes;
}

// declare const buildQueryKey: Function;
