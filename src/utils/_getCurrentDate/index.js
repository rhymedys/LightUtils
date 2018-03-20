/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 15:40:58
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-20 14:41:21
 */

import _injectDateFormatToDateAndCallback from '../_injectDateFormatToDateAndCallback/index.js'
import {defaultDateFormatType} from '../../constants/index.js'

/**
 * @description 获取当前时间
 * @param {string} [formatType='yyyy-MM-dd hh:mm:ss'] 返回类型
 * @returns
 */
export default function _getCurrentDate(formatType) {
  return _injectDateFormatToDateAndCallback(() => new Date().format(formatType || defaultDateFormatType))
}
