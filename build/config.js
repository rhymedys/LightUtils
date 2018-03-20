const path = require('path');
const resolve=require('resolve')
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
      file: path.resolve(__dirname, `../dist/${libName}-${version}.js`),
      format:'umd',
      banner,
      name: 'LightUtils',
      manifestFile: path.resolve(__dirname, '../dist/manifest.json')  ,
      libPath:path.resolve(__dirname,'../lib')    
    },
    plugins: [
      buble()
    ]
  },
  'production': {
    input: path.resolve(__dirname, '../src/index.js'),
    output: {
      file: path.resolve(__dirname, `../dist/${libName}-${version}.js`),
      format:'umd',
      banner,
      name: 'LightUtils',
      env: 'production',
      manifestFile: path.resolve(__dirname, '../dist/manifest.json'),
      libPath:path.resolve(__dirname,'../lib')
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