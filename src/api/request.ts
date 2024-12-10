import store from '@/store';
import axios from 'axios';
export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API + import.meta.env.VITE_PUBLIC_PATH,
  timeout: 100000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'content-type': 'application/json',
  },
});
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在请求发送之前做点什么，比如添加 token
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    store.commit('common/START_LOADING');
    return config;
  },
  function (error) {
    // 对请求错误做点什么
    console.error('请求错误:', error);
    store.commit('common/STOP_LOADING');
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    store.commit('common/STOP_LOADING');
    return response.data;
  },
  function (error) {
    store.commit('common/STOP_LOADING');
    // 对响应错误做点什么 待扩展
    const isNot404Page = window.location.pathname !== '/404';
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 未授权，跳转到登录页面
          // isNot404Page ? (window.location.href = '/404') : '';
          break;
        case 403:
          // 拒绝访问
          // isNot404Page ? (window.location.href = '/404') : '';
          break;
        case 404:
          // 请求资源不存在
          // isNot404Page ? (window.location.href = '/404') : '';
          break;
        default:
        // 其他错误
        // isNot404Page ? (window.location.href = '/404') : '';
      }
    }
    console.error('响应错误:', error);

    // 判断是否为 AxiosError 类型
    if (axios.isAxiosError(error)) {
      // 检查错误代码是否是超时错误
      if (error.code === 'ECONNABORTED') {
        console.error('请求超时错误：', error.message);
        // 可以在这里处理超时的情况，例如显示提示信息或重试请求

        // if (window.location.pathname !== '/404') {
        //   window.location.href = '/404';
        // }
      } else if (error.response) {
        // 如果服务器返回了一个状态码范围在 2xx 之外的错误
        console.error(
          '服务器响应错误：',
          error.response.status,
          error.response.data
        );
        // 根据错误响应状态码进行自定义处理
        if (error.response.status === 404) {
          if (window.location.pathname !== '/404') {
            window.location.href = '/404';
          }
        } else if (error.response.status === 500) {
          alert('服务器内部错误，请稍后再试');
        }
      } else if (error.request) {
        // 请求已发出，但没有收到响应
        console.error('没有收到响应：', error.request);
        // 可能是网络问题或服务器没有响应
        alert('网络问题，请检查您的网络连接');
      } else {
        // 其他错误
        console.error('请求配置错误：', error.message);
      }
    } else {
      // 非 AxiosError 类型错误
      console.error('非 Axios 错误：', error);
    }
    return Promise.reject(error);
  }
);
