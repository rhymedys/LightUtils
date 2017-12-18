/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-15 15:14:06
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 13:42:09
 */

//  PathUtils
import _replaceUrlProtocal2CurrentProtocal from './utils/PathUtils/ReplaceUrlProtocal2CurrentProtocal'
 import _isUrl from './utils/PathUtils/IsUrl'
 import _getUrlPathByGrade from './utils/PathUtils/GetUrlPathByGrade'
 import _getURLProtocol from './utils/PathUtils/GetURLProtocol'
 import _getUrlQuery from './utils/PathUtils/GetUrlQuery'
 import _query2Json from './utils/PathUtils/Query2Json'


// TimeUtils
 import _injectDateFormatToDate from './utils/TimeUtils/InjectDateFormatToDate'
 import _getWeekDayByDate from './utils/TimeUtils/GetWeekDayByDate'
 import _getDayByDate from './utils/TimeUtils/GetDayByDate'
 import _getDateByTimestamp from './utils/TimeUtils/GetDateByTimestamp'
 import _getCurrentDate from './utils/TimeUtils/GetCurrentDate'

//  TypeUtils
 import _checkObjType from './utils/TypeUtils/CheckObjType'
 import _getObjectType from './utils/TypeUtils/GetObjectType'

// ObjectUtils
 import _removeItemFromObject from './utils/ObjectUtils/RemoveItemFromObj'

// SysUtils
 import _getUserAgent from './utils/SysUtils/GetUserAgent'

export default {
  // PathUtils
  _replaceUrlProtocal2CurrentProtocal,
  _isUrl,
  _getUrlPathByGrade,
  _getURLProtocol,
  _getUrlQuery,
  _query2Json,

  // TimeUtils
  _injectDateFormatToDate,
  _getWeekDayByDate,
  _getDayByDate,
  _getDateByTimestamp,
  _getCurrentDate,

  // TypeUtils
  _checkObjType,
  _getObjectType,

  // ObjectUtils
  _removeItemFromObject,

  // SysUtils
  _getUserAgent
}
