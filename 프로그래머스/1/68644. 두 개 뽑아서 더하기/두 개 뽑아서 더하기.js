function solution(numbers) {
    const adds = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) adds.push(numbers[i] + numbers[j])
    }
    
    return [...new Set(adds)].sort((a, b) => a - b);
}