/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 15:40:58
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 20:24:48
 */

import injectDateFormatToDateAndCallback from './InjectDateFormatToDateAndCallback'
import {defaultDateFormatType} from '../Constant/DefaultDateFormatType'

/**
 * @description 获取当前时间
 * @param {string} [formatType='yyyy-MM-dd hh:mm:ss'] 返回类型
 * @returns
 */
export default function _getCurrentDate(formatType) {
  return injectDateFormatToDateAndCallback(() => new Date().format(formatType || defaultDateFormatType))
}
