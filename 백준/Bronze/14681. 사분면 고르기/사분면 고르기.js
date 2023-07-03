const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const [x, y] = input;

console.log(x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3);