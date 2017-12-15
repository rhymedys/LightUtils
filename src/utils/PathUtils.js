/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-15 15:52:08 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-15 16:46:00
 */

/**
 * @description 获取自定义级数的路径
 * @param {any} strUrl 
 */
function _getUrlPathByGrade(strUrl, grade) {
  if (_isUrl(strUrl) && grade > 0) {
    let arrUrl = strUrl.split('//')
    let res = `${arrUrl[0]}/`
    if (arrUrl[1]) {
      let splitUrl = arrUrl[1].split('/')
      for (const i of grade) {
        res += `/${splitUrl[i]}`
      }
    } else {
      res += '/'
    }
    return res
  }
}

/**
 * @description url的协议转换成当前访问的协议
 * @param {any} strUrl 
 * @param {any} needProtocal 
 * @returns 
 */
function _replaceUrlProtocal2CurrentProtocal(strUrl, needProtocal) {
  if (strUrl) {
    let toReplacePart = strUrl.substring(0, strUrl.indexOf('://'))
    return strUrl.replace(toReplacePart, needProtocal ? window.location.protocol : '')
  }
}

/**
 * @description 判断是否是Url
 * @param {any} str 
 */
function _isUrl(str) {
  return /^(http?s|\/\/)/.test(str)
}

export {
  _replaceUrlProtocal2CurrentProtocal,
  _isUrl,
  _getUrlPathByGrade
}