const operations = {
  w: 1,
  s: -1,
  d: 10,
  a: -10,
};

const solution = (n, control) =>
  [...control].reduce((acc, controlStr) => acc + operations[controlStr], n);
