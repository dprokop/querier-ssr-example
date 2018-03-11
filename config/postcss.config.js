module.exports = () => ({
  plugins: [
    require('postcss-mixins')(),
    require('postcss-cssnext')(
      {
        features: {
          autoprefixer: {
            browsers: [
              '>1%',
              'last 2 versions',
              'Firefox ESR',
            ],
            flexbox: 'no-2009',
          },
          applyRule: false,
          customProperties: false
        }
      }
    ),
    require('postcss-flexbugs-fixes')(),
    require('postcss-nested')()
  ]
})
