const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

for (let i = 1; i <= input[0]; i++) {
  const [h, w, n] = input[i].split(" ");
  let room = 1;

  for (let j = 0; j < n; j++) {
    room += 100;

    if (Math.floor(room / 100) > h) {
      room += 1;
      room -= h * 100;
    }
  }

  console.log(room);
}