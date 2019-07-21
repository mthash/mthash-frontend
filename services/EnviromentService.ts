import Environment from "~/models/common/Environment";

declare global {
  interface Window {
    env: {
      API: string;
    };
  }
}

const EnviromentService = new Proxy(
  {},
  {
    get: (target, name: string) => {
      if (process && !process.browser && process.env && process.env[name]) {
        return process.env[name];
      }

      if (process.browser && window.env && window.env[name]) {
        return window.env[name];
      }
    }
  }
);

export default EnviromentService as Environment;
