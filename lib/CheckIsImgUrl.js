/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2018-03-16 14:33:37 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-16 14:36:51
 */

/**
 * 检测当前url是否是图片资源资质
 * @param {*} strUrl 
 */
export default function _checkIsImgUrl(strUrl) {
  const reg = /([^\s]+(?=\.(jpg|gif|png|jpeg))\.\2)/gi
  return !!strUrl.match(reg)
}