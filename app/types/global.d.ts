
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

// Added temporarily as react-hot-loader 4 typings are no there yet
declare module 'react-hot-loader';

declare module '*.css' {
  const classes: {[className: string]: string};
  export = classes;
}

