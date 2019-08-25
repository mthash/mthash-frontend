import axios, { AxiosInstance } from "axios";
import cookie from "js-cookie";
import qs from "qs";

import EnviromentService from "./EnviromentService";

const { API } = EnviromentService;

type RequestMethod = "get" | "post" | "put" | "delete";

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
  async get(endpoint: string, query?: any): Promise<any> {
    const url = query ? `${endpoint}?${qs.stringify(query)}` : endpoint;
    return await this.axiosRequst(url, "get");
  }

  @Catch
  async post(endpoint: string, data?: any): Promise<any> {
    return await this.axiosRequst(endpoint, "post", data);
  }

  @Catch
  async delete(endpoint: string, data?: any): Promise<any> {
    return await this.axiosRequst(endpoint, "delete", data);
  }

  axiosRequst = (
    endpoint: string,
    method: RequestMethod,
    data?: any
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
