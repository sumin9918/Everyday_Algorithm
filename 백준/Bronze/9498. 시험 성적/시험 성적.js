const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let score = "F";

if (input >= 90) score = "A";
else if (input >= 80) score = "B";
else if (input >= 70) score = "C";
else if (input >= 60) score = "D";

console.log(score);