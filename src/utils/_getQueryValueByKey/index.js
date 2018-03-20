/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2018-03-16 14:07:54 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-20 14:41:35
 */

import _getUrlQuery from '../_getUrlQuery/index.js'
import _query2Json from '../_query2Json/index.js'

/**
 * 从url中提取对应值
 * @param {*} url 
 * @param {*} key 
 */
export default function _getQueryValueByKey(url, key) {
  if (url && key&& _query2Json( _getUrlQuery(url))) {
    return  _query2Json( _getUrlQuery(url))[key]
  }
  return null
}