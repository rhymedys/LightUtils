/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:27:01 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-20 14:41:38
 */

import _isUrl from '../_isUrl/index.js'

  /**
 * @description 获取自定义级数的路径
 * @param {any} strUrl 
 */
export default function _getUrlPathByGrade(strUrl, grade) {
  if (_isUrl(strUrl) && grade > 0) {
    let arrUrl = strUrl.split('//')
    let res = `${arrUrl[0]}/`
    if (arrUrl[1]) {
      let splitUrl = arrUrl[1].split('/')
      for (let i = 0; i < grade; i++) {
        res += `/${splitUrl[i]}`
      }
      
      if(res.match('/?/')){
        res=res.split('?')[0]
      }
    } else {
      res += '/'
    }
    return res
  }
}