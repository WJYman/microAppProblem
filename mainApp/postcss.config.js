module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        'Last 2 versions',
        'defaults',
        'not ie < 11',
        'Android >= 4.0',
        'iOS >= 8',
        'Firefox >= 20'
      ]
    }
    /*   'postcss-pxtorem': {
        rootValue: 37.5,
        propList: ['*']
      } */
  }
}
