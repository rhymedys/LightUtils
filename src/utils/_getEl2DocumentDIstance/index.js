/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2018-04-08 20:37:57
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-04-08 20:40:15
 */

/**
 * @description 获取当前结点到文档上边距的距离
 * @export 
 * @param {any} el 结点对象 
 * @returns 距离
 */
export default function _getEl2DocumentDIstance(el) {
  let res=0
  if (el) {
    let tempObj = obj;
    while (tempObj) {
      res += tempObj.offsetTop;
      tempObj = tempObj.offsetParent;
    }
  }
  return res
}