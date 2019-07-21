import axios, { AxiosInstance } from "axios";
import cookie from "js-cookie";

import EnviromentService from "./EnviromentService";

const { API } = EnviromentService;

type RequestMethod = "get" | "post" | "put";

class AsyncService {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      headers: {
        Accept: "*/*",
        "Content-Type": "text/plain"
      }
    });

    this.setInterceptors();
  }

  requestURl(endpoint: string): string {
    return `${API}/${endpoint}`;
  }

  get = async (endpoint: string, data?: any): Promise<any> => {
    return await this.axiosRequst(endpoint, "get", data);
  };

  post = async (endpoint: string, data: any): Promise<any> => {
    return await this.axiosRequst(endpoint, "post", data);
  };

  axiosRequst = (
    endpoint: string,
    method: RequestMethod,
    data: any
  ): Promise<any> => {
    return this.axios({
      method,
      url: this.requestURl(endpoint),
      data
    });
  };

  setInterceptors() {
    const { request, response } = this.axios.interceptors;
    request.use(this.requestInterceptor, err => Promise.reject(err));
  }

  requestInterceptor = config => {
    if (!process.browser) return config;

    const token = cookie.get("token");

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  };
}

export default new AsyncService();
