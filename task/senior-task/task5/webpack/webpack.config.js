var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry: './js/init.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.merge.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
  ]
};