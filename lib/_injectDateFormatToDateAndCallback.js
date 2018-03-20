/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 15:39:40
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-19 21:15:19
 */
import _injectDateFormatToDate from './InjectDateFormatToDate'

/**
 * @private
 * @description 检查是否Date对象已经注入format，且进行回调
 * @param {function} cb 回调函数
 * @returns
 */
export default function injectDateFormatToDateAndCallback(cb) {
  if (!Date.prototype.format) {
    _injectDateFormatToDate()
  }
  return cb && cb()
}