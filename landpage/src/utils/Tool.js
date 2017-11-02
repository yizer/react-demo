import {toastIt} from './toast/toast';
// 请求数据拼接
const paramType = data => {
  let paramArr = []
  let paramStr = ''
  for (let attr in data) {
    paramArr.push(attr + '=' + data[attr])
  }
  paramStr = paramArr.join('&')
  return paramStr
}
const baseURL = (process.env.NODE_ENV === 'production') ? '' : 'http://192.168.10.87'
// 公共请求方法
const ajax = (obj) => {
  let data = obj['data'] || {}
  fetch(`${baseURL}${obj['url']}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: paramType(data)
  })
  .then((response) => response.json()) //把response转为json
  .then((res) => { // 上面的转好的json
    if (res.success) {
      if (obj.hasOwnProperty('success')) obj.success(res)
    } else {
      if (obj.hasOwnProperty('fail')) {
        obj.fail(res)
      } else {
        toastIt(res.message || '连接超时')
      }
    }
  })
  .catch((error)=> {
    alert('请求错误')
  })
}
const Tool = {
  toast: toastIt,
  ajax: ajax,
  baseURL: baseURL
}
export default Tool
