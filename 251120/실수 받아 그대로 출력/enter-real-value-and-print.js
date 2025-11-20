const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

console.log((Math.round(input * 100) / 100).toFixed(2));