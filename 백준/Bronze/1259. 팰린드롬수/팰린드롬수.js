const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const reversed = [...input[i]]
    .slice(Math.ceil(input[i].length / 2))
    .reverse()
    .join("");

  console.log(
    input[i].slice(0, Math.floor(input[i].length / 2)) === reversed
      ? "yes"
      : "no"
  );
}