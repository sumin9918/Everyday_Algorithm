const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let rests = [];

for (let i = 0; i < input.length; i++) {
  rests = [...rests, input[i] % 42];
}

console.log([...new Set(rests)].length);