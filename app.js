const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

const index = require("./src/routes");
const react = require("./src/routes/react");

app.use(express.static(path.join(__dirname, "public/build")));

app.use("/api", index);
app.use("/", react);

app.listen("3100", "0.0.0.0", () => {
  console.log("server run!!!");
});

module.exports = app;
