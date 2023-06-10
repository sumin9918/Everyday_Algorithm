function solution(myStr) {
    const answer = myStr.split(/[a-c]/g).filter(v => v);
    
    return answer.length ? answer : ['EMPTY']
}