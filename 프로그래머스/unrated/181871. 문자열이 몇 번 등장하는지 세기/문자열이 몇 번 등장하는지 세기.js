function solution(myString, pat) {
    let result = 0;
    
    for (let i = 0; i < myString.length - pat.length + 1; i++) {
        let is_break = false;
        
        for (let j = 0; j < pat.length; j++) {
            if (pat[j] !== myString[i + j]) {
                is_break = true;
                break;
            }
        }
        
        if (!is_break) result += 1;
    }

    return result;
}