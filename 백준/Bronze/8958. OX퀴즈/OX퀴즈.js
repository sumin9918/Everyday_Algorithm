const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i <= input[0]; i++) {
  const str = input[i].trim();
  let score = 0;
  let result = 0;

  for (let j = 0; j < str.length; j++) {
    if (str[j] === "X") score = 0;
    else score += 1;

    result += score;
  }

  console.log(result);
}
