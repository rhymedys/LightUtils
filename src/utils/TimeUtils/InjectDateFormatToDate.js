/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 15:37:02
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-16 15:37:27
 */

/**
 * @description 对Date对象注入Format方法
 */
export default function () {
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
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1)
          ? (o[k])
          : ((`00${o[k]}`).substr((`${o[k]}`).length)))
      }
    }
    return fmt
  }
}