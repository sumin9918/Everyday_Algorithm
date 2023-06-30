const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", " ")
  .split("\n");

const [A, B, C] = input;
const result = (A * B * C).toString();

for (let i = 0; i <= 9; i++) {
  console.log([...result].filter((v) => +v === i).length);
}
