import axios from 'axios';

const instance = axios.create({
  timeout: 2000,
  baseURL: 'https://bjwz.bwie.com/lkt',
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        console.log('错误请求');
        break;
      case 500:
        console.log('服务端错误');
        break;
      default:
        console.log('错误');
    }
  }
  return Promise.reject(error);
});

const post = <T, S>(api:string, data:S, headers:any = {}) => {
  headers['Content-Type'] = 'application/json;charset=utf-8';
  return new Promise<T>((resolve, reject) => {
    instance.post(api, data, { headers })
      .then((res) => { resolve(res as T); })
      .catch((error) => { reject(error); });
  });
};

const get = <T, S>(api:string, params:S, headers:any = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(api, { params, headers })
      .then((res) => {
        resolve(res.data as T);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const http = {
  post,
  get,
};

export default http;
