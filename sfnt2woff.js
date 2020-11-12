/**
 * Created by Onur Demiralay
 * MIT License Copyright(c) 2014 Onur Demiralay
 *
 * sfnt2woff converter
 */
const fs = require("fs");
fs.writeFileSync(
  process.argv[3],
  require("./index.js").toWoff(fs.readFileSync(process.argv[2]))
);
