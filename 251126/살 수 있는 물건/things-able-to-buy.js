const fs = require("fs")
const input = Number(fs.readFileSync(0).toString().trim())

if (input >= 1000 && input < 3000) {
    console.log("mask")
} else if (input >= 3000) {
    console.log("book")
} else {
    console.log("no")
}