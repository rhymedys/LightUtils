/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-15 15:14:06
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-04-08 20:50:27
 */

//  PathUtils
import _replaceUrlProtocal2CurrentProtocal from './utils/_replaceUrlProtocal2CurrentProtocal/index.js'
import _isUrl from './utils/_isUrl/index.js'
import _getUrlPathByGrade from './utils/_getUrlPathByGrade/index.js'
import _getURLProtocol from './utils/_getURLProtocol/index.js'
import _getUrlQuery from './utils/_getUrlQuery/index.js'
import _query2Json from './utils/_query2Json/index.js'
import _removeProtocol from './utils/_removeProtocol/index.js'
import _getQueryValueByKey from './utils/_getQueryValueByKey/index.js'
import _tranJson2Query from './utils/_tranJson2Query/index.js'
import _checkIsImgUrl from './utils/_checkIsImgUrl/index.js'


// TimeUtils
import _injectDateFormatToDate from './utils/_injectDateFormatToDate/index.js'
import _getWeekDayByDate from './utils/_getWeekDayByDate/index.js'
import _getDayByDate from './utils/_getDayByDate/index.js'
import _getDateByTimestamp from './utils/_getDateByTimestamp/index.js'
import _getCurrentDate from './utils/_getCurrentDate/index.js'

//  TypeUtils
import _checkObjType from './utils/_checkObjType/index.js'
import _getObjectType from './utils/_getObjectType/index.js'

// ObjectUtils
import _removeItemFromObject from './utils/_removeItemFromObject/index.js'

// SysUtils
import _getUserAgent from './utils/_getUserAgent/index.js'
import _generateGUID from './utils/_generateGUID/index.js'
import _generateUUID from './utils/_generateUUID/index.js'
import _isColor from './utils/_isColor/index.js'
import _isIdentity from './utils/_isIdentity/index.js'
import _isPhoneNum from './utils/_isPhoneNum/index.js'

//  ApiUtils
import _generateApiObjFromArr from './utils/_generateApiObjFromArr/index.js'

// ImgUtils
import _convertImgToBase64 from './utils/_convertImgToBase64/index.js'

// ElUtils
import _getEl2DocumentDistance from './utils/_getEl2DocumentDistance/index.js'  

export default {
  // PathUtils
  _replaceUrlProtocal2CurrentProtocal,
  _isUrl,
  _getUrlPathByGrade,
  _getURLProtocol,
  _getUrlQuery,
  _query2Json,
  _removeProtocol,
  _getQueryValueByKey,
  _tranJson2Query,
  _checkIsImgUrl,

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
  _convertImgToBase64,

  // ElUtils  
  _getEl2DocumentDistance
}