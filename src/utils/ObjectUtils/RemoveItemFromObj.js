/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 16:24:03
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-16 17:08:12
 */
import _checkObjType from '../TypeUtils/CheckObjType'

export default function (obj, arrKeysOrStrKey) {
  console.log(obj,arrKeysOrStrKey)
  if (obj && _checkObjType(obj, type => type.Object) && arrKeysOrStrKey) {
    let res = {}
    if (_checkObjType(arrKeysOrStrKey, t => t.Array)) {
      for (let [k , v] of Object.entries(obj)) {
        !arrKeysOrStrKey.includes(k) && (res[k] = v)
      }
    } else if (_checkObjType(arrKeysOrStrKey, t => t.String)) {
      for (let [k , v] of Object.entries(obj)) {
        arrKeysOrStrKey !== k && (res[k] = v)
      }
    } else {
      res = obj
    }
    return res
  }
  return obj
}