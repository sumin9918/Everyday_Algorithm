function solution(n, m, section) {
    let count = 0;
    const sections = Array.from({length: n}, (_, i) => !section.includes(i + 1));

    for (let i = 0; i < sections.length; i++) {
        if (sections[i]) continue;
        
        for (let j = i; j < i + m && j < n; j++) sections[j] = true;
        
        count += 1;
    }
    
    return count;
}