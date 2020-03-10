const setEnv = require("./setEnv");
setEnv();


// import path from "path";
const express = require("express");
const next = require("next");
const compression = require("compression");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dev = process.env.NODE_ENV !== "production";


const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

const { PORT = "" } = process.env;
const port = parseInt(PORT) || 3000;

const Email = new Schema({
  login: String,
  userID: String,
});

const EmailSchema = mongoose.model('Email', Email);

app.prepare().then(() => {
  const server = express();
  server.disable("x-powered-by");
  server.use(bodyParser.json({ limit: "10kb" }));
  server

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
