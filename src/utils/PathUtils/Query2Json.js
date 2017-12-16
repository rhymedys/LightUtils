/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 16:49:10 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-16 17:01:19
 */
import _getUrlQuery from './GetUrlQuery'
export default function (strUrl){
    let query=_getUrlQuery(strUrl)
    const queryArray =query&&query.split('&') || []
    const result = {}
    for (const val of queryArray) {
      if (!val) {
        continue
      }
      const keyValArray = val.split('=')
      if (keyValArray) {
        result[keyValArray[0]] = keyValArray[1] || ''
      } else {
        result[val] = ''
      }
    }
    return result
}