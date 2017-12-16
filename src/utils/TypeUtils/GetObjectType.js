/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 15:34:44
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2017-12-16 15:35:08
 */

/**
 * @description 获取当前对象类型
 * @param {any} obj
 * @returns
 */

export default function (obj) {
  return obj && Object
    .prototype
    .toString
    .call(obj) || null
}