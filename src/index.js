/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-15 15:14:06 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-15 16:46:30
 */

import {
  _injectDateFormatToDate,
  _getWeekDayByDate,
  _getDayByDate,
  _getDateByTimestamp,
  _getCurrentDate
} from './utils/TimeUtils'
import {
  _checkObjectType,
  _getObjectType
} from './utils/TypeUtils'
import {
  _replaceUrlProtocal2CurrentProtocal,
  _getUrlPathByGrade,
  _isUrl
} from './utils/PathUtils'

export default {
  // TimeUtils
  _injectDateFormatToDate,
  _getWeekDayByDate,
  _getDayByDate,
  _getDateByTimestamp,
  _getCurrentDate,

  // TypeUtils
  _checkObjectType,
  _getObjectType,
  
  // PathUtils
  _replaceUrlProtocal2CurrentProtocal,
  _getUrlPathByGrade,
  _isUrl
}