const express = require("express");
const { get } = require("express/lib/response");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello My Cluster Application");
});

app.listen(4000, () => {
  console.log(`WEB SERVER RUNNING In LVS Cluster`);
});
