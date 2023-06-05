function solution(arr, query) {
    let answer = arr;
    
    query.forEach((n, i) => {
        const s = i % 2 === 0 ? 0 : n;
        const e = i % 2 === 0 ? n + 1 : answer.length;
        
        answer = answer.slice(s, e);
    });
    
    return answer;
}