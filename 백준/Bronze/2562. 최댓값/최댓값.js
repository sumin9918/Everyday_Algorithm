const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const inputNum = input.map((v) => +v.replace("\r", ""));
const max = Math.max(...inputNum);

console.log(max);
console.log(inputNum.indexOf(max) + 1);