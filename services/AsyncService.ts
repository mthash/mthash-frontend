import axios from "axios";
import cookie from "js-cookie";

class AsyncService {
  constructor() {
    this.axios = axios.create({
      headers: {
        Accept: "*/*",
        "Content-Type": "text/plain"
      }
    });

    this.post = this.axios.post;
    this.get = this.axios.get;
    this.setInterceptors();
  }

  setInterceptors() {
    const { request, response } = this.axios.interceptors;
    request.use(this.requestInterceptor, err => Promise.reject(err));
  }

  requestInterceptor = config => {
    if (!process.browser) return config;

    const token = cookie.get("token");

    if (token) {
      config.headers.Authorization = `${token}`;
    }

    return config;
  };
}

export default new AsyncService();
