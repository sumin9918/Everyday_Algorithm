const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b, c] = input[1];

console.log(+input[0] * +c);
console.log(+input[0] * +b);
console.log(+input[0] * +a);
console.log(+input[0] * +input[1]);