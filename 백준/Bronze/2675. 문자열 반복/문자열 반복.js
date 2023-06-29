const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i <= input[0]; i++) {
  const [repeatN, str] = input[i].replace("\r", " ").split(" ");
  const newStr = [...str].map((s) => s.repeat(repeatN)).join("");

  console.log(newStr);
}