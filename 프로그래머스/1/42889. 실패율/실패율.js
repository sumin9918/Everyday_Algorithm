function solution(N, stages) {
    const leftStages = [stages.length];
    const rates = [];
    
    for (let i = 1; i <= N; i++) {
        const count = leftStages[i - 1] - stages.filter(s => s === i).length;
        const prevTotal = leftStages[i - 1];
        const rate = prevTotal ? (prevTotal - count) / prevTotal : 0;
        
        leftStages.push(count);
        rates.push(rate);
    };
    
    const sortedRates = [...rates].sort((a, b) => b - a);
    
    return sortedRates.map((rate) => {
        const stage = rates.indexOf(rate) + 1;
        rates[stage - 1] = -1;
        
        return stage;
    });
}