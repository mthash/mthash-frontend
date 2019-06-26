const dotenv = require("dotenv");
const path = require("path");

module.exports = () => {
  const dev = process.env.NODE_ENV !== "production";
  const envFile = dev ? ".env.dev" : ".env.prod";
  const env = dotenv.config({ path: path.join(__dirname, "..", "env", envFile) });

  console.log(env);
}