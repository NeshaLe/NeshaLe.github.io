const path = require("path");

const express = require("express");
const izExcela = require("../utils/citanjeExcel");
const moment = require("moment");
// const sastojci = [];
const router = express.Router();

router.get("/", (req, res, next) => {
  const sastojci = [];
  // console.log(req);
  izExcela(sastojci);

  res.render("index", {
    pageTitle: "ExcelToJSON-ovaj",
    lista: sastojci,
    vreme: moment().format("hh:mm:ss"),
  });
});

module.exports = router;
