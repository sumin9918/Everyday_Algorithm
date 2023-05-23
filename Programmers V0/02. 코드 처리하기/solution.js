function solution(code) {
  let mode = false;

  // 결과값이 빈 문자열이면 "EMPTY"를 return한다
  return (
    [...code].reduce((acc, str, idx) => {
      // str이 1이면 모드를 바꾸고, return
      if (str === "1") {
        mode = !mode;
        return acc;
      }

      // 주어진 조건에 맞으면 str을 더해주고, 아니면 return
      return !(mode || idx % 2) || (mode && idx % 2) ? acc + str : acc;
    }, "") || "EMPTY"
  );
}
