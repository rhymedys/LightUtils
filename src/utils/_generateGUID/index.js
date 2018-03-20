/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-20 17:19:51 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-20 17:21:15
 */

/**
 * @description 生成GUID
 * @export
 * @returns 
 */
export default function _generateGUID() {
     function S4() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
     }
     return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
 }