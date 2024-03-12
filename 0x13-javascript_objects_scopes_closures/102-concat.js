#!/usr/bin/node
const fs = require('fs');

const fAr = fs.readFileSync(process.argv[2]).toString();
const sAr = fs.readFileSync(process.argv[3]).toString();
fs.writeFileSync(process.argv[4], fAr + sAr);
