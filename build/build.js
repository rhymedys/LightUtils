const rollup = require('rollup');
const fs = require('fs');
const path = require('path');
const uglify = require('uglify-js');
const config = require('./config');
const version = require('../package.json').version;

function getSize(str) {
  return (str.length / 1024).toFixed(2) + 'kb';
}

function blue(str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m';
}

function write(dest, code) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(dest, code, function(err) {
      if (err) return reject(err);
      console.log(blue(path.relative(process.cwd(), dest)) + ' ' + getSize(code));
      resolve();
    });
  });
}

function build() {
  rollup.rollup(config).then(bundle =>  bundle.generate(config.output)).then(({code})=>{
    const minified = (config.output.banner ? `${config.output.banner}\n` : '') + uglify.minify(code, {
      fromString: true,
      output: {
        screw_ie8: true,
        ascii_only: true
      }
    }).code;
    const libPath = path.resolve(__dirname, '../lib');
    if (!fs.existsSync(libPath)) {
      fs.mkdirSync(libPath);
    }
    write(config.output.file, code);
    return write(config.output.file.replace(/\.js$/, '.min.js'), minified);
  });
}

build();

