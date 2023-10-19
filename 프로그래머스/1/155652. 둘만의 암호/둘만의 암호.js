function solution(s, skip, index) {
    const skippedS = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i)).filter(s => !skip.includes(s));

    return [...s].map(str => {
        let c = skippedS.indexOf(str);
        
        for (let i = 0; i < index; i++) c = c < skippedS.length - 1 ? c + 1 : 0;

        return skippedS[c]
    }).join('');
}