const getPaths = require('./paths');

const paths = getPaths(process.env.NODE_ENV);
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const tslintLoaderConfig = () => {
  return {
    test: /\.(ts|tsx)$/,
    loader: require.resolve('tslint-loader'),
    options: {
      typeCheck: true
    },
    enforce: 'pre',
    include: paths.appSrc,
    exclude: paths.tslintExclude
  };
};

const tsLoaderConfig = processWithBabel => {
  var babelOptions = {
    plugins: ['syntax-dynamic-import'],
    presets: [
      [
        'es2015',
        {
          modules: false
        }
      ]
    ]
  };
  const loaders = processWithBabel ? [{
    loader: 'babel-loader',
    options: babelOptions
  }, {
    loader: 'ts-loader',
    options: {
      configFile: 'tsconfig.webpack.json',
      transpileOnly: true ,
    }
  }] : [ {
    loader: 'ts-loader',
    options: {
      configFile: 'tsconfig.webpack.json',
      transpileOnly: true ,
    }
  }];

  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: loaders
  };
};

const jsLoaderConfig = () => {
  return {
    test: /\.js$/,
    include: [/node_modules/]
  };
};

const sourceMapsLoaderConfig = () => {
  return {
    test: /\.js$/,
    loader: require.resolve('source-map-loader'),
    enforce: 'pre'
  };
};

const postCSSLoaderConfig = {
  loader: require.resolve('postcss-loader'),
  options: {
    config: {
      path: paths.postcssConfig
    }
  }
};

const cssStorybookLoaderConfig = () => {
  return {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'typings-for-css-modules-loader',
        options: {
          modules: true,
          namedExport: true,
          localIdentName: "[name]__[local]___[hash:base64:5]"
        }
      },
      postCSSLoaderConfig
    ]
  };
};

const cssLoaderConfig = (isLocal, shouldExtract, exclude) => {
  let loaderConfig = {
    loader: 'typings-for-css-modules-loader'
  };

  if (isLocal) {
    loaderConfig = {
      loader: 'css-loader/locals'
    };
  }

  const use = [
    {
      ...loaderConfig,
    options: {
    importLoaders: 1,
      modules: true,
      namedExport: true,
      localIdentName: "[name]__[local]___[hash:base64:5]"
  }
},
  postCSSLoaderConfig
];

  return {
    test: /\.css$/,
    exclude,
    use: shouldExtract
      ? ExtractCssChunks.extract({
        use: use
      })
      : use
  };
};

const fontLoader = () => {
  return {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file-loader',
    options:{
      name: "./fonts/[name].[ext]",
    }
  };
};

module.exports = {
  tslintLoaderConfig,
  tsLoaderConfig,
  sourceMapsLoaderConfig,
  jsLoaderConfig,
  cssStorybookLoaderConfig,
  cssLoaderConfig,
  fontLoader
};
