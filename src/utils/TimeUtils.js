/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-15 15:14:01 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-15 22:14:04
 */

const defaultDateFormatType = 'yyyy-MM-dd hh:mm:ss'


/**
 * @description 检查是否Date对象已经注入format，且进行回调
 * @param {function} cb 回调函数
 * @returns 
 */
function injectDateFormatToDateAndCallback(cb) {
  if (!Date.prototype.format) {
    _injectDateFormatToDate()
  }
  return cb && cb()
}

/**
 * @description 对Date对象注入Format方法
 */
 function _injectDateFormatToDate() {
  Date.prototype.format = function (fmt) {
    const o = {
      'M+': this.getMonth() + 1,
      'd+': this.getDate(),
      'h+': this.getHours(),
      'm+': this.getMinutes(),
      's+': this.getSeconds(),
      'q+': Math.floor((this.getMonth() + 3) / 3),
      S: this.getMilliseconds()
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (`${this.getFullYear()}`).substr(4 - RegExp.$1.length))
    }
    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ?
          (o[k]) :
          ((`00${o[k]}`).substr((`${o[k]}`).length)))
      }
    }
    return fmt
  }
}

/**
 * @description 通过日期获取周几
 * @param {any} strDate 
 */
 function _getWeekDayByDate(strDate) {
  const day = ['日', '一', '二', '三', '四', '五', '六']
  return `周${day[new Date(Date.parse(strDate.replace(/-/g, '/'))).getDay()]}`
}

/**
 * @description 通过日期获取星期几
 * @param {any} strDate 
 * @returns 
 */
 function _getDayByDate(strDate) {
  const day = ['天', '一', '二', '三', '四', '五', '六']
  return `星期${day[new Date(Date.parse(strDate.replace(/-/g, '/'))).getDay()]}`
}

/**
 * @description 将时间戳转换成标准日期
 * @param {any} numTimestamp 时间戳
 * @param {string} [formatType='yyyy-MM-dd hh:mm:ss'] 返回类型
 * @returns 
 */
 function _getDateByTimestamp(numTimestamp, formatType) {
  return injectDateFormatToDateAndCallback(()=>new Date(numTimestamp).format(formatType || defaultDateFormatType))
}

/**
 * @description 获取当前时间
 * @param {string} [formatType='yyyy-MM-dd hh:mm:ss'] 返回类型
 * @returns 
 */
 function _getCurrentDate(formatType) {
  return injectDateFormatToDateAndCallback(()=>new Date().format(formatType || defaultDateFormatType))
}


 export default{
  _injectDateFormatToDate,
  _getWeekDayByDate,
  _getDayByDate,
  _getDateByTimestamp,
  _getCurrentDate,
}