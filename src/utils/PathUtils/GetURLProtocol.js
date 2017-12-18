/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 16:10:16
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 10:07:11
 */
export default function  _getURLProtocol (strUrl, typeCallback) {
  if (strUrl) {
    let protocol = strUrl.match('://') && strUrl.split(':')
    return protocol && protocol[0] || null
  }
}