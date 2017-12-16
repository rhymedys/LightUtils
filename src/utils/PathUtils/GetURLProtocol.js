/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 16:10:16
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-16 16:21:38
 */
import _checkObjType from '../TypeUtils/CheckObjType'

export default function (strUrl, typeCallback) {
  if (strUrl) {
    let protocol = strUrl.match('://') && strUrl.split(':')
    return protocol && protocol[0] || null
  }
}