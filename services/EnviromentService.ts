const EnviromentService = new Proxy(
  {},
  {
    get: (target, name) => {
      if (process && !process.browser && process.env && process.env[name]) {
        return process.env[name];
      }

      if (process.browser && window.env && window.env[name]) {
        return window.env[name];
      }
    }
  }
);

export default EnviromentService;
