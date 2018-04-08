/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2017-12-16 17:02:07
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-04-08 20:47:42
 */

/**
 * @description 获取浏览器代理信息
 * @export
 * @returns 常用的代理对象  trident，presto，webKit，gecko，mobile，ios，android，iPhone，iPad，webApp，weixin，qq，mydoctor，wechatdevtools，kingdeeHit，alipayClient
 */
export default function _getUserAgent() {
  const u = navigator.userAgent
  return {
    trident: u.indexOf('Trident') > -1, // IE内核
    presto: u.indexOf('Presto') > -1, // opera内核
    webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, // 火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, // android终端
    iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1, // 是否iPad
    webApp: u.indexOf('Safari') == -1, // 是否web应该程序，没有头部与底部
    weixin: u.indexOf('MicroMessenger') > -1, // 是否微信 （2015-01-22新增）
    qq: u.match(/\sQQ/i) == ' qq', // 是否QQ
    mydoctor: u.indexOf('Mydoctor') > -1,
    wechatdevtools: u.indexOf('wechatdevtools') > -1,
    kingdeeHit: u.indexOf('KingdeeHit') > -1,
    alipayClient: u.indexOf('AlipayClient') > -1 // 支付宝
  }
}