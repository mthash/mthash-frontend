// import path from "path";
const express = require("express");
const next = require("next");
const compression = require("compression");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";

const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

const { PORT = "" } = process.env;
const port = parseInt(PORT) || 3000;

app.prepare().then(() => {
  const server = express();
  server.disable("x-powered-by");
  server.use(bodyParser.json({ limit: "100kb" }));

  dev || server.use(compression());
  // server.use(nextApp(app));

  server.get("*", (req, res, next) => handle(req, res));

  server.listen(port, err => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
