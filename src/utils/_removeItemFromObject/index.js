/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 16:24:03
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-20 14:42:01
 */
import _checkObjType from '../_checkObjType/index.js'

export default function _removeItemFromObject(obj, arrKeysOrStrKey) {
  if (obj && _checkObjType(obj, type => type.Object) && arrKeysOrStrKey) {
    let res = {}
    if (_checkObjType(arrKeysOrStrKey, t => t.Array)) {
      Object.entries(obj).forEach(([k, v]) => {
        !arrKeysOrStrKey.includes(k) && (res[k] = v)
      })
    } else if (_checkObjType(arrKeysOrStrKey, t => t.String)) {
      Object.entries(obj).forEach(([k, v]) => {
        arrKeysOrStrKey !== k && (res[k] = v)
      })
    } else {
      res = obj
    }
    return res
  }
  return obj
}