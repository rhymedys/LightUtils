/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 16:39:59
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-16 14:20:31
 */

 /**
  * 获取url的query字符窜
  * @param {*} strUrl 
  */
export default function _getUrlQuery (strUrl) {
  return strUrl && strUrl.match('/?/') && strUrl.split('?')[1] || null
}