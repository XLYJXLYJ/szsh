import Vue from 'vue';
import Mint from 'mint-ui';
import axios from 'axios'
Vue.use(Mint);

// 请求时的拦截
axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})
// 响应时拦截
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  //判断是否是客户端错误
  if (response.status === 404 ) {
    MessageBox('提示', '客户端异常');
  }
  // 异常状态下，把错误信息返回去
    MessageBox('提示', '网络异常');
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === 500) {
    MessageBox('提示', '服务器异常');
  }
  return res
}
//post方法
export default {
  post (url, data) {
      return axios({
        method: 'post',
        baseURL: '',
        url,
        data: data,
        timeout: 5000,
      }).then(
        (response) => {
          return checkStatus(response)
        }
      )
      .then(
        (res) => {
          return checkCode(res)
        }
      )
  },

//get方法
  get (url, params) {
    return axios({
      method: 'get',
      baseURL: '',
      url,
      params, // get 请求时带的参数
      timeout: 5000,
    }).then(
      (response) => {
        return checkStatus(response)
      }
    )
    .then(
      (res) => {
        return checkCode(res)
      }
    )
  }
}