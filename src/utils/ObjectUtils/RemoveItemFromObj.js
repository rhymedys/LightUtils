/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 16:24:03
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 13:46:37
 */
import _checkObjType from '../TypeUtils/CheckObjType'

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