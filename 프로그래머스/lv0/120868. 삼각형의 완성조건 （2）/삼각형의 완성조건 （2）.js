function solution(sides) {
    let count = 0;
    
    const a = Math.min(...sides);
    const b = Math.max(...sides);
    
    // b가 가장 긴 변인 경우
    for (let c = 1; c < b; c++) {
        if (b < a + c) count++;
    }
    
    // c가 가장 긴 변인 경우
    for (let c = b; c < a + b; c++) {
        count++;
    }
    
    return count;
}