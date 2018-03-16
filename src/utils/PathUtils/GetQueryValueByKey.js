/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2018-03-16 14:07:54 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-16 14:12:34
 */

import _getUrlQuery from './GetUrlQuery'
import _query2Json from './Query2Json'

export default function _getQueryValueByKey(url, key) {
  if (url && key&& _query2Json( _getUrlQuery(url))) {
    return  _query2Json( _getUrlQuery(url))[key]
  }
  return null
}