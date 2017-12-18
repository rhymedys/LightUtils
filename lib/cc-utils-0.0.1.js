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
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 09:59:49
 */

 /**
 * @description url的协议转换成当前访问的协议
 * @param {any} strUrl 
 * @param {any} needProtocal 
 * @returns 
 */
function _replaceUrlProtocal2CurrentProtocal (strUrl, needProtocal) {
  if (strUrl) {
    var toReplacePart = strUrl.substring(0, strUrl.indexOf('://')+3);
    return strUrl.replace(toReplacePart, needProtocal ? ((window.location.protocol) + "//") : '')
  }
}

/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:27:24 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 10:01:44
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
 * @Last Modified time: 2017-12-18 10:01:32
 */

/**
 * @description 获取自定义级数的路径
 * @param {any} strUrl 
 */
function _getUrlPathByGrade(strUrl, grade) {
  if (_isUrl(strUrl) && grade > 0) {
    var arrUrl = strUrl.split('//');
    var res = (arrUrl[0]) + "/";
    if (arrUrl[1]) {
      var splitUrl = arrUrl[1].split('/');
      for (var i = 0; i < grade; i++) {
        res += "/" + (splitUrl[i]);
      }
      
      if(res.match('/?/')){
        res=res.split('?')[0];
      }
    } else {
      res += '/';
    }
    return res
  }
}

/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 16:10:16
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 10:07:11
 */
function  _getURLProtocol (strUrl, typeCallback) {
  if (strUrl) {
    var protocol = strUrl.match('://') && strUrl.split(':');
    return protocol && protocol[0] || null
  }
}

/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 16:39:59
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 10:01:44
 */

function _getUrlQuery (strUrl) {
  return strUrl && strUrl.match('/?/') && strUrl.split('?')[1] || null
}

/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 16:49:10 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 10:34:42
 */
function _query2Json(strUrl) {
  var query = _getUrlQuery(strUrl);
  var queryArray = query && query.split('&') || [];
  var result = {};
  queryArray.forEach(function (val) {
    if (val) {
      var keyValArray = val.split('=');
      if (keyValArray) {
        result[keyValArray[0]] = keyValArray[1] || '';
      } else {
        result[val] = '';
      }
    }

  });



  return result
}

/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 15:37:02
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 10:02:37
 */

/**
 * @description 对Date对象注入Format方法
 */
function _injectDateFormatToDate(){
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
}

/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:38:06 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 10:02:34
 */


 /**
 * @description 通过日期获取周几
 * @param {any} strDate 
 */
function _getWeekDayByDate (strDate) {
  var day = ['日', '一', '二', '三', '四', '五', '六'];
  return ("周" + (day[new Date(Date.parse(strDate.replace(/-/g, '/'))).getDay()]))
}

/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:38:39 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 10:02:30
 */


 /**
 * @description 通过日期获取星期几
 * @param {any} strDate 
 * @returns 
 */
function _getDayByDate (strDate) {
  var day = ['天', '一', '二', '三', '四', '五', '六'];
  return ("星期" + (day[new Date(Date.parse(strDate.replace(/-/g, '/'))).getDay()]))
}

/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:39:40 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 10:02:41
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
 * @Date: 2017-12-16 15:42:20 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 10:05:18
 */
// import {defaultDateFormatType} from '../Constant/DefaultDateFormatType'

 /**
 * @description 将时间戳转换成标准日期
 * @param {any} numTimestamp 时间戳
 * @param {string} [formatType='yyyy-MM-dd hh:mm:ss'] 返回类型
 * @returns 
 */
function  _getDateByTimestamp (numTimestamp, formatType) {
  return injectDateFormatToDateAndCallback(function (){ return new Date(numTimestamp).format(formatType || 'yyyy-MM-dd hh:mm:ss'); })
}

/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 15:40:58
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 10:05:23
 */

// import {defaultDateFormatType} from '../Constant/DefaultDateFormatType'

/**
 * @description 获取当前时间
 * @param {string} [formatType='yyyy-MM-dd hh:mm:ss'] 返回类型
 * @returns
 */
function _getCurrentDate (formatType) {
  return injectDateFormatToDateAndCallback(function () { return new Date().format(formatType || 'yyyy-MM-dd hh:mm:ss'); })
}

/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 15:34:44
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 10:04:22
 */

/**
 * @description 获取当前对象类型
 * @param {any} obj
 * @returns
 */

function _getObjectType (obj) {
  return obj && Object
    .prototype
    .toString
    .call(obj) || null
}

/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:33:08 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 10:14:24
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
 function _checkObjType (obj, typeCallback) {
  if (_getObjectType(typeCallback) === type.Function) {
    return _getObjectType(obj) === typeCallback(type)
  }
}

/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 16:24:03
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 13:46:37
 */
function _removeItemFromObject(obj, arrKeysOrStrKey) {
  if (obj && _checkObjType(obj, function (type) { return type.Object; }) && arrKeysOrStrKey) {
    var res = {};
    if (_checkObjType(arrKeysOrStrKey, function (t) { return t.Array; })) {
      Object.entries(obj).forEach(function (ref) {
        var k = ref[0];
        var v = ref[1];

        !arrKeysOrStrKey.includes(k) && (res[k] = v);
      });
    } else if (_checkObjType(arrKeysOrStrKey, function (t) { return t.String; })) {
      Object.entries(obj).forEach(function (ref) {
        var k = ref[0];
        var v = ref[1];

        arrKeysOrStrKey !== k && (res[k] = v);
      });
    } else {
      res = obj;
    }
    return res
  }
  return obj
}

/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 17:02:07
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 10:02:03
 */

function _getUserAgent () {
  var u = navigator.userAgent;
  return {
    trident: u.indexOf('Trident') > -1, // IE内核
    presto: u.indexOf('Presto') > -1, // opera内核
    webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, // 火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, // android终端
    iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1, // 是否iPad
    webApp: u.indexOf('Safari') == -1, // 是否web应该程序，没有头部与底部
    weixin: u.indexOf('MicroMessenger') > -1, // 是否微信 （2015-01-22新增）
    qq: u.match(/\sQQ/i) == ' qq', // 是否QQ
    mydoctor: u.indexOf('Mydoctor') > -1,
    wechatdevtools: u.indexOf('wechatdevtools') > -1
  }
}

/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-15 15:14:06
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 15:04:03
 */

//  PathUtils
// TimeUtils
 //  TypeUtils
 // ObjectUtils
 // SysUtils
 var index = {
  // PathUtils
  _replaceUrlProtocal2CurrentProtocal: _replaceUrlProtocal2CurrentProtocal,
  _isUrl: _isUrl,
  _getUrlPathByGrade: _getUrlPathByGrade,
  _getURLProtocol: _getURLProtocol,
  _getUrlQuery: _getUrlQuery,
  _query2Json: _query2Json,

  // TimeUtils
  _injectDateFormatToDate: _injectDateFormatToDate,
  _getWeekDayByDate: _getWeekDayByDate,
  _getDayByDate: _getDayByDate,
  _getDateByTimestamp: _getDateByTimestamp,
  _getCurrentDate: _getCurrentDate,

  // TypeUtils
  _checkObjType: _checkObjType,
  _getObjectType: _getObjectType,

  // ObjectUtils
  _removeItemFromObject: _removeItemFromObject,

  // SysUtils
  _getUserAgent: _getUserAgent
}

return index;

})));
