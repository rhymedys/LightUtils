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
export default function (strDate) {
  const day = ['日', '一', '二', '三', '四', '五', '六']
  return `周${day[new Date(Date.parse(strDate.replace(/-/g, '/'))).getDay()]}`
}