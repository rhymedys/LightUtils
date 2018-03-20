/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:30:15 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-15 12:50:40
 */

 /**
 * @description url的协议转换成当前访问的协议
 * @param {any} strUrl 
 * @param {any} needProtocal 
 * @returns 
 */
export default function _replaceUrlProtocal2CurrentProtocal (strUrl, needProtocal) {
  if (strUrl) {
    let toReplacePart = strUrl.substring(0, strUrl.indexOf('://')+3)
    return strUrl.replace(toReplacePart, needProtocal ? `${window.location.protocol}//` : '')
  }
}
