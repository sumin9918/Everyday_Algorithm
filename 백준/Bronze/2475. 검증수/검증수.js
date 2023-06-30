const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const sum = input.split(" ").reduce((acc, v) => acc + v ** 2, 0);

console.log(sum % 10);