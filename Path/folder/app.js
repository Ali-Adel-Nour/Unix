const fs = require("node:fs")

require("../file.js")

console.log(__dirname)
console.log(process.cwd())

const content = fs.readFileSync("./text.txt", "utf8")

console.log(content)