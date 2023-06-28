const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let result = 0;

for (let i = 0; i < input[0]; i++) {
  result += +input[1][i];
}

console.log(result);