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
export default function (strDate) {
  const day = ['天', '一', '二', '三', '四', '五', '六']
  return `星期${day[new Date(Date.parse(strDate.replace(/-/g, '/'))).getDay()]}`
}