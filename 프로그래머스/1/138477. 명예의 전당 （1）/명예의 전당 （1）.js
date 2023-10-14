function solution(k, score) {
    let winner = [];
    
    return score.map((s, i) => {
        if (winner.length < k) winner = [...winner, score[i]];
        else if (winner[0] < score[i]) winner[0] = score[i];
        
        winner.sort((a, b) => a - b);
        
        return winner[0];
    });
}