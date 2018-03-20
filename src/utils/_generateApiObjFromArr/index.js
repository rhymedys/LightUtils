/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-20 16:57:19 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-19 21:44:12
 */

/**
 * @description 生成ApiObj 
 * @export
 * @param {any} apiDomain api域名 
 * @param {any} apiArr api名
 */
export default function _generateApiObjFromArr(apiDomain, apiArr) {
  let res = {}
  if (apiArr) {
    apiArr.forEach((val) => {
      res[val] = apiDomain && `${apiDomain}/${val}` || `${val}`
    })
  }
  return res
}