/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-15 15:57:15 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-15 22:14:17
 */

function generateType(type) {
  return `[object ${type}]`
}

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
 * @description 获取当前对象类型
 * @param {any} obj 
 * @returns 
 */
function _getObjectType(obj) {
  return obj && Object.prototype.toString.call(obj) || null
}

/**
 * @description 校验对象类型
 * @param {any} obj 要校验的对象
 * @param {any} typeCallback 匹配类型  
 * @returns 
 */
function _checkObjectType(obj, typeCallback) {
  if (_getObjectType(typeCallback) === type.Function) {
    return _getObjectType(obj) === typeCallback(type)
  }
}

export default{
  _checkObjectType,
  _getObjectType
}