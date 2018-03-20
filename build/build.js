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

function writeFile(dest, code) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(dest, code, function (err) {
      if (err) return reject(err);
      console.log(blue(path.relative(process.cwd(), dest)) + ' ' + getSize(code));
      resolve();
    });
  });
}

/**
 * 删除文件夹
 * @param {*} path 
 */
function deleteAll(path) {  
  let files = [];  
  if(fs.existsSync(path)) {  
      files = fs.readdirSync(path);  
      files.forEach(function(file, index) {  
          let curPath = path + "/" + file;  
          if(fs.statSync(curPath).isDirectory()) { // recurse  
            deleteAll(curPath);  
          } else { // delete file  
              fs.unlinkSync(curPath);  
          }  
      });  
      fs.rmdirSync(path);  
  }  
};  

/**
 * 复制文件
 * @param {*} source 
 * @param {*} dest 
 */
function copyFile(source, dest) {
  if (source && dest) {
    let code=fs.readFileSync(source,'utf-8');

      writeFile(dest,code)
    
  }
}


function build() {
  // 清空旧资源
  deleteAll(config.output.libPath)
  deleteAll(path.join(__dirname,'../dist'))

    
  if(!fs.existsSync(config.output.libPath)) fs.mkdirSync(config.output.libPath)

  if(!fs.existsSync(path.join(__dirname,'../dist'))) fs.mkdirSync(path.join(__dirname,'../dist'))

  rollup.rollup(config).then(bundle => {
    let manifest = {}
    bundle.modules.forEach((val) => {
      let filterAst = val.id.match(new RegExp(/\\utils\\(.*?).js/g))
      if (filterAst) {
        let originKey = filterAst[0].substring( filterAst[0].indexOf('utils\\')+6,filterAst[0].lastIndexOf('\\'))
        // // 生成lib
        if(!fs.existsSync(`${config.output.libPath}/${originKey}`)) fs.mkdirSync(`${config.output.libPath}/${originKey}`)
        copyFile(`.\\src\\${filterAst}`,`${config.output.libPath}/${originKey}/index.js`)
        // // 生成清单
        manifest[originKey] = filterAst[0].substring(filterAst[0].indexOf('\\') + 1, filterAst[0].length)


      }
    })

    writeFile(config.output.manifestFile, JSON.stringify(manifest));
    return bundle.generate(config.output)
  }).then(({
    code
  }) => {
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
    writeFile(config.output.file, code);
    return writeFile(config.output.file.replace(/\.js$/, '.min.js'), minified);
  });
}

build();