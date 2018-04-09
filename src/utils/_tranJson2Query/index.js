/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2018-03-16 14:22:28 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-04-09 22:58:09
 */
import _checkObjType from '../_checkObjType/index.js'

/**
 * 将json对象转化为Query字符窜
 *
 * @param {any} param 要转化的对象
 * @param {any} key 跟对象（可选）
 */
export default function _tranJson2Query(param, key, encode) {
  if (param == null) {
    return ''
  }
  let paramStr = ''
  const t = typeof (param)
  if (t === 'string' || t === 'number' || t === 'boolean') {
    paramStr += `&${key}=${(encode == null || encode) ?
        encodeURIComponent(param) :
        param}`
  } else {
    for (const i in param) {
      const k = key == null ?
        i :
        key + (_checkObjType(param,type=>type.Array) ?
          `[${i}]` :
          `.${i}`)
      paramStr += _tranJson2Query(param[i], k, encode)
    }
  }
  return paramStr
}