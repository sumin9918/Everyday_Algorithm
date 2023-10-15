function solution(k, m, score) {
    let boxes = [];
    
    score.sort((a, b) => b - a);
    
    for (let i = 0; i < score.length; i += m) {
        const array = [];
        
        for (let j = i; j < i + m; j++) score[j] && array.push(score[j]);
        
        if (array.length === m) boxes.push(array);
    }
    
    return boxes.reduce((acc, box) => Math.min(...box) * m + acc, 0);
}