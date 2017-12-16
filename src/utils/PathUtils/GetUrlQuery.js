/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 16:39:59
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-16 16:43:13
 */

export default function (strUrl) {
  return strUrl && strUrl.match('/?/') && strUrl.split('?')[1] || null
}