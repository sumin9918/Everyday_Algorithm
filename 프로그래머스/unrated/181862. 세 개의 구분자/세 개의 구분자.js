function solution(myStr) {
    const answer = myStr.replace(/[a-c]/g, '*').split('*').filter(v => v);
    
    return answer.length ? answer : ['EMPTY']
}