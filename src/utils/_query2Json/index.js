/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 16:49:10 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-16 14:21:38
 */

 /**
  * 将query字符窜转成json
  * @param {*} query 
  */
export default function _query2Json(query) {
  const queryArray = query && query.split('&') || []
  const result = {}
  queryArray.forEach(val => {
    if (val) {
      const keyValArray = val.split('=')
      if (keyValArray) {
        result[keyValArray[0]] = keyValArray[1] || ''
      } else {
        result[val] = ''
      }
    }

  })



  return result
}