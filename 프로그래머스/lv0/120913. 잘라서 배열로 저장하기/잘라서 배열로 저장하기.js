function solution(my_str, n) {
    const answer = [];
    let str = my_str;
    
    while (str.length > 0) {
        answer.push(str.slice(0, n));
        str = str.slice(n);
    }
    
    return answer;
}