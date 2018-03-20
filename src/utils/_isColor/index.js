/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-21 19:22:27 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-20 14:41:50
 */

/**
 * @description 判断是否是颜色类型
 * @export
 * @param {any} value 16进制颜色值
 * @returns 
 */
export default function _isColor(value) {
  // hexColors rgbColors
  return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value) || `/^[rR][gG][Bb][Aa]?[\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[${
 '0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?[\s]*(0\.\d{1,2}|1|0)?[\)]{1}$/g'.test(value)}`
}