/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2018-03-15 12:51:15 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-15 12:52:26
 */

/**
 * 去除url的协议
 * @param {String} strUrL 
 */
export default function _removeProtocol(strUrL) {
  return strUrl && strUrl.replace(/.*?:\/\//g, '//') || strUrl
}