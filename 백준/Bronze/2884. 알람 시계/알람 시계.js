const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

let hours = input[0];
let minutes = input[1] - 45;

if (minutes < 0) {
  hours -= 1;
  minutes += 60;
}

if (hours < 0) hours = 23;

console.log(hours, minutes);