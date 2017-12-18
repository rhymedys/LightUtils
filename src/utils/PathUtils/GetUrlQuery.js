/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 16:39:59
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-18 10:01:44
 */

export default function _getUrlQuery (strUrl) {
  return strUrl && strUrl.match('/?/') && strUrl.split('?')[1] || null
}