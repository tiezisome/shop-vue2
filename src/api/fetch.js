import axios from "axios";
import { Loading, Message } from "element-ui";

const Util = {};
Util.ajax = axios.create({
  timeout: 50000,
});
Util.ajax.defaults.headers.common = {
  "X-Requested-With": "XMLHttpRequest",
};
Util.ajax.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("Authorization");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 配置响应拦截器 所有错误统一处理
Util.ajax.interceptors.response.use(
  (response) => {
    const { code, data } = response.data;
    if (code === 200) {
      return data;
    } else {
      return Promise.reject("error");
    }
  },
  (error) => {
    const response = error.response;
    if (response) {
      if (response.status === 400) {
        // 处理400错误
        return Message({
          message: "错误的请求!",
          type: "error",
          duration: 5 * 1000,
        });
      } else if (response.status === 401) {
        // 处理401错误
      } else if (response.status === 403) {
        // 处理403错误
        return Message({
          message: "禁止访问!",
          type: "error",
          duration: 5 * 1000,
        });
      } else if (response.status === 404) {
        // 处理404错误
      } else if (response.status === 413) {
        // 处理413权限不足
      }
    }
    return Promise.reject(response);
  }
);
export default {
  post(url, data) {
    return Util.ajax({
      method: "post",
      url,
      data,
      timeout: 50000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  get(url, data) {
    return Util.ajax({
      method: "get",
      url,
      params: data,
    });
  },
};
