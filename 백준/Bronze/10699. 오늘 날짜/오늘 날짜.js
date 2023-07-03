const today = new Date();

console.log(
  `${today.getFullYear()}-${(today.getMonth() + 1 + "").padStart(2, 0)}-${(
    today.getDate() + ""
  ).padStart(2, 0)}`
);