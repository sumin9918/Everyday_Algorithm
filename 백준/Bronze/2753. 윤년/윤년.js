const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

console.log(+(input % 4 === 0 && (input % 100 !== 0 || input % 400 === 0)));