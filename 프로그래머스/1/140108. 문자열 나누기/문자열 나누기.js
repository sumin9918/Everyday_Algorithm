function solution(s) {
    let answer = 1;
    let x = s[0];
    let count = [1, 0];
    
    for (let i = 1; i < s.length; i++) {
        if (count[0] === count[1]) {
            x = s[i];
            count = [1, 0];
            answer += 1;
        } else count[+(x !== s[i])] += 1;
    }
    
    return answer;
}