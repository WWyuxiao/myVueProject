/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
// export function urlParse () {
//   let url = window.location.search
//   let obj = {}
//   let reg = /[?&][?&]+=[^?&]+/g
//   let arr = url.match(reg)
//   if (arr) {
//     arr.forEach((item) => {
//       let temArr = item.substring(1).split('=')
//       let key = decodeURIComponent(temArr[0])
//       let val = decodeURIComponent(temArr[1])
//       obj[key] = val
//     })
//   }
//   return obj
// }

export function urlParse () {
  let urlArr = window.location.search.substr(1).split('&') // 截取掉?，并以&分开,存入数组
  let obj = {}
  if (urlArr) {
    urlArr.forEach((item) => {
      let arr = item.split('=')
      let key = decodeURIComponent(arr[0])
      let val = decodeURIComponent(arr[1])
      obj[key] = val
    })
  }
  return obj
}
