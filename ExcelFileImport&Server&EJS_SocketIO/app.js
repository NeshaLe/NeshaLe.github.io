const path = require("path");
const fs = require("fs");

const express = require("express");
const chokidar = require("chokidar");
const socketio = require("socket.io");
const http = require("http");
// const sastojci = [];
const izExcela = require("./utils/citanjeExcel");

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const moment = require("moment");

const indexRoutes = require("./routes/index");
const watcher = chokidar.watch(path.join(__dirname, "data"));

app.use(indexRoutes);
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");
// watcher pazi na promene u excel fajlu_________________
watcher.on("change", () => {
  const sastojci = [];
  izExcela(sastojci);
  console.log("promenjen fajl");
  let spisak = sastojci.join(", ");
  // let vreme = moment().format("hh:mm:ss");
  io.emit("poruka", { spisak, vreme: moment().format("hh:mm:ss") });
});
// _______________________________________________________

app.use("/", (req, res, next) => {
  res.render("404", {
    pageTitle: "Page not found!",
    sadrzaj: "Stranica nije pronadjena!",
  });
});

server.listen(3000, () => {
  console.log("server slusa");
});
