/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-21 19:27:12 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-21 19:34:10
 */
/**
 * @description 检验是否是手机号码
 * @export
 * @param {any} phoneNum 被检验对象
 * @returns 
 */
export default function _isPhone(phoneNum) {
  return phoneNum && phoneNum.trim() && phoneNum.trim().length === 11 && !!(/^1[34578]\d{9}$/.test(phoneNum))
}