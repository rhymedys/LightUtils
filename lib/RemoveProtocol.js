/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2018-03-15 12:51:15 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-15 13:08:10
 */

/**
 * 去除url的协议
 * @param {*} strUrL 
 */
export default function _removeProtocol(strUrl) {
    return (strUrl && strUrl.replace(/.*?:\/\//g, '//')) || strUrl
}