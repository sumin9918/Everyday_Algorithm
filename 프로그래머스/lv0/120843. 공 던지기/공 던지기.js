function solution(numbers, k) {
    let idx = 0;
    
    for(let i = 0; i < k - 1; i++) {
        idx = (idx + 2) % numbers.length ;
    }
    
    return numbers[idx];
}