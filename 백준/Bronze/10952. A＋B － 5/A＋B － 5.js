const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const [A, B] = input[i].replace("\r", " ").split(" ");

  const result = +A + +B;

  if (result) console.log(result);
}