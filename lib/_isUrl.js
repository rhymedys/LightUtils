/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:27:24 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-19 15:25:30
 */

/**
 * @description 判断是否是Url
 * @param {any} str 
 **/
export default function _isUrl(str) {
  return /^(http(s)?|\/\/)/.test(str)
}
