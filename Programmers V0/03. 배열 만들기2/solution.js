const solution = (l, r) => {
  const answer = Array.from({ length: r - l + 1 }, (_, i) => i + l).filter(
    (v) => !v.toString().match(/[^05]/)
  );

  return answer.length ? answer : [-1];
};
