const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const numArr = input[1].split(" ");

console.log(Math.min(...numArr), Math.max(...numArr));