import axios from "axios";

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
  }
}

export default new AsyncService();
