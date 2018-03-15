/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-15 15:14:06
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-15 12:53:58
 */

//  PathUtils
import _replaceUrlProtocal2CurrentProtocal from './utils/PathUtils/ReplaceUrlProtocal2CurrentProtocal'
import _isUrl from './utils/PathUtils/IsUrl'
import _getUrlPathByGrade from './utils/PathUtils/GetUrlPathByGrade'
import _getURLProtocol from './utils/PathUtils/GetURLProtocol'
import _getUrlQuery from './utils/PathUtils/GetUrlQuery'
import _query2Json from './utils/PathUtils/Query2Json'
import _removeProtocol from './utils/PathUtils/RemoveProtocol'


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
import _generateGUID from './utils/SysUtils/GenerateGUID'
import _generateUUID from './utils/SysUtils/GenerateUUID'
import _isColor from './utils/SysUtils/IsColor'
import _isIdentity from './utils/SysUtils/IsIdentity'
import _isPhoneNum from './utils/SysUtils/IsPhoneNum'

//  ApiUtils
import _generateApiObjFromArr from './utils/ApiUtils/GenerateApiObjByArr'

// ImgUtils
import _converImgToBase64 from './utils/ImgUtils/ConvertImgToBase64'

export default {
  // PathUtils
  _replaceUrlProtocal2CurrentProtocal,
  _isUrl,
  _getUrlPathByGrade,
  _getURLProtocol,
  _getUrlQuery,
  _query2Json,
  _removeProtocol,

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
  _getUserAgent,
  _generateGUID,
  _generateUUID,
  _isColor,
  _isIdentity,
  _isPhoneNum,

  // ApiUtils
  _generateApiObjFromArr,

  // ImgUtils
  _converImgToBase64
}