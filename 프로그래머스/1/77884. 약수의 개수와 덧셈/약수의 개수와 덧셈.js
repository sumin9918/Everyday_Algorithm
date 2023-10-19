function solution(left, right) {
    let answer = 0;
    
    for (let i = left; i <= right; i++) answer += i * (Math.sqrt(i) % 1 ? 1 : -1)
    
    return answer;
}