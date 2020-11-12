/**
 * Created by Onur Demiralay
 * MIT License Copyright(c) 2014 Onur Demiralay
 *
 * woff2sfnt converter
 */
const fs = require("fs");
fs.writeFileSync(
  process.argv[3],
  require("./index.js").toSfnt(fs.readFileSync(process.argv[2]))
);
