const path = require('path');
const buble = require('rollup-plugin-buble');
const version = process.env.VERSION || require('../package.json').version;
const libName=require('../package.json').name
const moduleName=libName.substring(0,libName.lastIndexOf('.')) 

const banner =
  `/*
 * ${libName.toUpperCase()} v${version}
 * (c) 2016-${new Date().getFullYear()} Rhymedys<Rhymedys@gmail.com>
 * Released under the MIT license.
 */`;

const configs = {
  'dev': {
    input: path.resolve(__dirname, '../src/index.js'),
    output: {
      file: path.resolve(__dirname, `../lib/${libName}-${version}.js`),
      format:'umd',
      banner,
      name: 'CcUtils'
    },
    plugins: [
      buble()
    ]
  },
  'production': {
    input: path.resolve(__dirname, '../src/index.js'),
    output: {
      file: path.resolve(__dirname, `../lib/${libName}-${version}.js`),
      format:'umd',
      banner,
      name: 'CcUtils',
      env: 'production'
    },  
    plugins: [
      buble()
    ]
  }
};

if (process.env.TARGET) {
  module.exports = configs[process.env.TARGET];
} else {
  module.exports =configs['production'];
}