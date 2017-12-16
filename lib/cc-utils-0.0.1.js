/*
 * CC-UTILS v0.0.1
 * (c) 2016-2017 Rhymedys<Rhymedys@gmail.com>
 * Released under the MIT license.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.CcUtils = factory());
}(this, (function () { 'use strict';

/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:30:15 
 * @Last Modified by:   Rhymedys 
 * @Last Modified time: 2017-12-16 15:30:15 
 */

 /**
 * @description url的协议转换成当前访问的协议
 * @param {any} strUrl 
 * @param {any} needProtocal 
 * @returns 
 */
var _replaceUrlProtocal2CurrentProtocal = function (strUrl, needProtocal) {
  if (strUrl) {
    var toReplacePart = strUrl.substring(0, strUrl.indexOf('://')+3);
    return strUrl.replace(toReplacePart, needProtocal ? ((window.location.protocol) + "//") : '')
  }
};

/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:27:24 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-16 15:28:23
 */

/**
 * @description 判断是否是Url
 * @param {any} str 
 **/
function _isUrl(str) {
  return /^(http(s)?|\/\/)/.test(str)
}

/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:27:01 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-16 15:29:35
 */

/**
 * @description 获取自定义级数的路径
 * @param {any} strUrl 
 */
var _getUrlPathByGrade = function(strUrl, grade) {
  if (_isUrl(strUrl) && grade > 0) {
    var arrUrl = strUrl.split('//');
    var res = (arrUrl[0]) + "/";
    if (arrUrl[1]) {
      var splitUrl = arrUrl[1].split('/');
      for (var i = 0; i < grade; i++) {
        res += "/" + (splitUrl[i]);
      }

    } else {
      res += '/';
    }
    return res
  }
};

/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 15:37:02
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-16 15:37:27
 */

/**
 * @description 对Date对象注入Format方法
 */
var _injectDateFormatToDate = function () {
  Date.prototype.format = function (fmt) {
    var o = {
      'M+': this.getMonth() + 1,
      'd+': this.getDate(),
      'h+': this.getHours(),
      'm+': this.getMinutes(),
      's+': this.getSeconds(),
      'q+': Math.floor((this.getMonth() + 3) / 3),
      S: this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (("" + (this.getFullYear()))).substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp(("(" + k + ")")).test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1)
          ? (o[k])
          : ((("00" + (o[k]))).substr((("" + (o[k]))).length)));
      }
    }
    return fmt
  };
};

/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:38:06 
 * @Last Modified by:   Rhymedys 
 * @Last Modified time: 2017-12-16 15:38:06 
 */


 /**
 * @description 通过日期获取周几
 * @param {any} strDate 
 */
var _getWeekDayByDate = function (strDate) {
  var day = ['日', '一', '二', '三', '四', '五', '六'];
  return ("周" + (day[new Date(Date.parse(strDate.replace(/-/g, '/'))).getDay()]))
};

/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:38:39 
 * @Last Modified by:   Rhymedys 
 * @Last Modified time: 2017-12-16 15:38:39 
 */


 /**
 * @description 通过日期获取星期几
 * @param {any} strDate 
 * @returns 
 */
var _getDayByDate = function (strDate) {
  var day = ['天', '一', '二', '三', '四', '五', '六'];
  return ("星期" + (day[new Date(Date.parse(strDate.replace(/-/g, '/'))).getDay()]))
};

/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:39:40 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-16 15:45:39
 */
/**
 * @description 检查是否Date对象已经注入format，且进行回调
 * @param {function} cb 回调函数
 * @returns 
 */
function injectDateFormatToDateAndCallback(cb) {
  if (!Date.prototype.format) {
    _injectDateFormatToDate();
  }
  return cb && cb()
}

/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:45:00 
 * @Last Modified by:   Rhymedys 
 * @Last Modified time: 2017-12-16 15:45:00 
 */

var defaultDateFormatType$1 = defaultDateFormatType = 'yyyy-MM-dd hh:mm:ss';

/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:42:20 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-16 15:45:29
 */
/**
 * @description 将时间戳转换成标准日期
 * @param {any} numTimestamp 时间戳
 * @param {string} [formatType='yyyy-MM-dd hh:mm:ss'] 返回类型
 * @returns 
 */
var _getDateByTimestamp = function (numTimestamp, formatType) {
  return injectDateFormatToDateAndCallback(function (){ return new Date(numTimestamp).format(formatType || defaultDateFormatType$1); })
};

/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:40:58 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-16 15:52:50
 */

 /**
 * @description 获取当前时间
 * @param {string} [formatType='yyyy-MM-dd hh:mm:ss'] 返回类型
 * @returns 
 */
var _getCurrentDate = function (formatType) {
  return injectDateFormatToDateAndCallback(function (){ return new Date().format(formatType || defaultDateFormatType$1); })
};

/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 15:34:44
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-16 15:35:08
 */

/**
 * @description 获取当前对象类型
 * @param {any} obj
 * @returns
 */

var _getObjectType = function (obj) {
  return obj && Object
    .prototype
    .toString
    .call(obj) || null
};

/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:33:08 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-16 15:35:37
 */
function generateType(type) {
  return ("[object " + type + "]")
}

var type = {
  String: generateType('String'),
  Array: generateType('Array'),
  Object: generateType('Object'),
  Function: generateType('Function'),
  Number: generateType('Number'),
  Date: generateType('Date'),
  Boolean: generateType('Boolean')
};


/**
 * @description 校验对象类型
 * @param {any} obj 要校验的对象
 * @param {any} typeCallback 匹配类型  
 * @returns 
 */
 var _checkObjectType = function (obj, typeCallback) {
  if (_getObjectType(typeCallback) === type.Function) {
    return _getObjectType(obj) === typeCallback(type)
  }
};

/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-15 15:14:06
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-16 15:52:15
 */

//  PathUtils
// TimeUtils
//  TypeUtils
var index = {
  // PathUtils
  _replaceUrlProtocal2CurrentProtocal: _replaceUrlProtocal2CurrentProtocal,
  _isUrl: _isUrl,
  _getUrlPathByGrade: _getUrlPathByGrade,

  // TimeUtils
  _injectDateFormatToDate: _injectDateFormatToDate,
  _getWeekDayByDate: _getWeekDayByDate,
  _getDayByDate: _getDayByDate,
  _getDateByTimestamp: _getDateByTimestamp,
  _getCurrentDate: _getCurrentDate,

  // TypeUtils
  _checkObjectType: _checkObjectType,
  _getObjectType: _getObjectType
};

return index;

})));
