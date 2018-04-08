/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 16:24:03
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-04-08 20:46:06
 */

import _checkObjType from '../_checkObjType/index.js'

/**
 * @description 移除对象的指定属性
 * @export
 * @param {any} obj 被移除属性的对象
 * @param {any} arrKeysOrStrKey 移除的属性key或key值数组
 * @returns 
 */
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