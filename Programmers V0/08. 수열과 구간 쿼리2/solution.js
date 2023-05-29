function solution(arr, queries) {
  return queries.map(([start, end, compare]) => {
    const filteredArr = arr.filter(
      (element, i) => i >= start && i <= end && element > compare
    );
    return Math.min(...(filteredArr.length ? filteredArr : [-1]));
  });
}

// 다른 사람의 풀이
function solution(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter((n) => n > k)
        .sort((a, b) => a - b)[0] || -1
  );
}
