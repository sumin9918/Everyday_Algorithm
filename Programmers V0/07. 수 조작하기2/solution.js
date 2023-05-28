const operations = {
  w: 1,
  s: -1,
  d: 10,
  a: -10,
};

const findOperation = (a, b) =>
  Object.keys(operations).find((key) => operations[key] === b - a);

const solution = (numLog) =>
  numLog.map((_, idx) => findOperation(numLog[idx], numLog[idx + 1])).join("");
