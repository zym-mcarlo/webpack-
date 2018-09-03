const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../src/index/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  }
}