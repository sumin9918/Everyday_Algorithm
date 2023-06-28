const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const [A, b] = input[i].split(" ");
  const B = +b.replace("\r", "");

  console.log(+A + B);
  console.log(A - B);
  console.log(A * B);
  console.log(Math.floor(A / B));
  console.log(A % B);
}