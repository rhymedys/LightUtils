/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 16:10:16
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-16 14:20:10
 */

 /**
  * 获取url协议
  * @param {*} strUrl 
  * @param {*} typeCallback 
  */
export default function  _getURLProtocol (strUrl, typeCallback) {
  if (strUrl) {
    let protocol = strUrl.match('://') && strUrl.split(':')
    return protocol && protocol[0] || null
  }
}