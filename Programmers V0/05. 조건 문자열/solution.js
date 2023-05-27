function solution(ineq, eq, n, m) {
  return +((ineq === ">" ? n > m : n < m) || (eq === "=" && n === m));
}

// 다른 사람의 풀이
// const operations = {
//   ">=": (n, m) => n >= m,
//   "<=": (n, m) => n <= m,
//   ">!": (n, m) => n > m,
//   "<!": (n, m) => n < m,
// };

// function solution(ineq, eq, n, m) {
//   const op = operations[ineq + eq];
//   return Number(op(n, m));
// }
