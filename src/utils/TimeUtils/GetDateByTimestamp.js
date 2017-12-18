/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:42:20 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 10:05:18
 */
import injectDateFormatToDateAndCallback from './InjectDateFormatToDateAndCallback'
// import {defaultDateFormatType} from '../Constant/DefaultDateFormatType'

 /**
 * @description 将时间戳转换成标准日期
 * @param {any} numTimestamp 时间戳
 * @param {string} [formatType='yyyy-MM-dd hh:mm:ss'] 返回类型
 * @returns 
 */
export default function  _getDateByTimestamp (numTimestamp, formatType) {
  return injectDateFormatToDateAndCallback(()=>new Date(numTimestamp).format(formatType || 'yyyy-MM-dd hh:mm:ss'))
}