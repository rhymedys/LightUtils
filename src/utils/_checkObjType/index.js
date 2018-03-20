/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:33:08 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-20 14:41:07
 */
import _getObjectType from '../_getObjectType/index.js'


const type = {
  String: generateType('String'),
  Array: generateType('Array'),
  Object: generateType('Object'),
  Function: generateType('Function'),
  Number: generateType('Number'),
  Date: generateType('Date'),
  Boolean: generateType('Boolean')
}

/**
 * @private
 * @description 
 * @param {any} type 
 * @returns 
 */
function generateType(type) {
  return `[object ${type}]`
}


/**
 * @description 校验对象类型
 * @param {any} obj 要校验的对象
 * @param {any} typeCallback 匹配类型  
 * @returns 
 */
 export default function _checkObjType (obj, typeCallback) {
  if (_getObjectType(typeCallback) === type.Function) {
    return _getObjectType(obj) === typeCallback(type)
  }
}