/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-21 19:32:07 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-21 19:49:38
 */
/**
 * @description 检查是不是身份证号码
 * @export
 * @param {any} identityNum 
 * @returns 
 */
export default function _isIdentity(identityNum) {
  return identityNum && identityNum.trim() && (identityNum.trim().length === 18 || identityNum.trim().length === 15) && !!(identityNum.match('^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$') || identityNum.match('^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)$'))
}