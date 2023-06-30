const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let answer = "";

for (let i = 1; i <= input; i++) answer += `${i}${i !== input ? "\n" : ""}`;

console.log(answer);