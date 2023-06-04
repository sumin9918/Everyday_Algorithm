function solution(arr, queries) {
   let answer = [...arr];
    
   queries.forEach(([s, e, k]) => {
       for (let i = s; i <= e; i++) {
           if (i % k === 0) answer[i]++
       }
   })
    
   return answer;
}