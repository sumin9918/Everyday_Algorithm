function solution(k, score) {
    const answer = [];
    let winner = [];
    
    for (let i = 0; i < score.length; i++) {
        if (winner.length < k) winner = [...winner, score[i]];
        else if (winner[0] < score[i]) winner[0] = score[i];
        
        winner.sort((a, b) => a - b);
        
        answer.push(winner[0]);
    };
    
    return answer;
}