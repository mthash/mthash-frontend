import axios, { AxiosInstance } from "axios";
import cookie from "js-cookie";

import EnviromentService from "./EnviromentService";

const { API } = EnviromentService;

type RequestMethod = "get" | "post" | "put";

function Catch(target, key, descriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = async function(...args) {
    try {
      return await originalMethod.apply(this, args);
    } catch (error) {
      throw error.response.data || error;
    }
  };

  return descriptor;
}

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

  @Catch
  async get(endpoint: string, data?: any): Promise<any> {
    return await this.axiosRequst(endpoint, "get", data);
  }

  @Catch
  async post(endpoint: string, data?: any): Promise<any> {
    return await this.axiosRequst(endpoint, "post", data);
  }

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
