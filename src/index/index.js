const path = require('path');
// console.log(__dirname)
// console.log(path.resolve(__dirname, '..'))

function getPath (cd) {
  console.log(path.resolve(__dirname, cd))
}

getPath('ffasdhgjashgas')
