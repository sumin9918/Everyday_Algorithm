function solution(n, slicer, num_list) {
    const [a, b, c] = slicer;
    
    const start = n === 1 ? 0 : a;
    const end = n === 2 ? num_list.length - 1 : b;
    const interval = n !== 4 ? 1 : c;
    
    const answer = [];
    
    for (let i = start; i <= end; i += interval ) {
        answer.push(num_list[i]);
    }
    
    return answer;
}