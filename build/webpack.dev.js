const path = require('path');
const webpackConf = require('./webpack.conf.js')
const merge = require('webpack-merge')

module.exports = merge(webpackConf, {
  //...
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    host: 'localhost',
    compress: false,
    port: 9000
  }
});
