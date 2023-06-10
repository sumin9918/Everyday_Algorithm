function solution(arr, k) {
    const answer = [...new Set(arr)].slice(0, k);
    
    return answer.length < k ? [...answer, ...new Array(k - answer.length).fill(-1)] : answer;
}