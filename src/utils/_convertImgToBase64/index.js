/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-21 19:16:36 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-19 21:15:10
 */
/**
 * @private
 * @description 压缩图片
 * @param {any} img 图片地址
 * @param {any} outputFomat 图片输出格式
 * @param {any} rate 压缩率
 * @returns
 */
function resizeMe(img, outputFomat, rate) {
  const maxWidth = 1024
  const maxHeight = 768

  const canvas = document.createElement('canvas')
  let width
  let height

  try {
    width = img.width
    height = img.height
  } catch (e) {
    console.log(e)
  }

  if (width > height) {
    if (width > maxWidth) {
      height = Math.round(height *= maxWidth / width)
      width = maxWidth
    }
  } else if (height > maxHeight) {
    width = Math.round(width *= maxHeight / height)
    height = maxHeight
  }

  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0, width, height)
  // 压缩率
  return canvas.toDataURL(outputFomat || 'image/jpeg', rate || 0.7)
}

/**
 * @description 图片转化为base64编码
 * @export
 * @param {any} url 图片地址
 * @param {any} callback 转化成功后的回调函数
 * @param {any} outputFomat 图片输出格式
 */
export default function _convertImgToBase64(url, callback, outputFomat) {
  const image = new Image()
  image.setAttribute('crossOrigin', 'anonymous')
  image.onload = function loadF() {
    callback && callback(this.resizeMe(image, outputFomat))
  }
  image.onerror = function errorF() {
    callback && callback()
  }
  image.src = url
}