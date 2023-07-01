const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

let isAscending = +input[0] === 1;
let isDescending = +input[0] === 8;

for (let i = 0; i < input.length - 1; i++) {
  if (isAscending) {
    isAscending = isAscending && +input[i] + 1 === +input[i + 1];
  } else if (isDescending) {
    isDescending = isDescending && +input[i] - 1 === +input[i + 1];
  } else break;
}

console.log(isAscending ? "ascending" : isDescending ? "descending" : "mixed");