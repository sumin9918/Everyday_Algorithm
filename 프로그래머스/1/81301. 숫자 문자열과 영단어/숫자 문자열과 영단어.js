const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function solution(s) {
    let answer = '';
    let chars = '';
    
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            answer += s[i];
            continue;
        }
        
        chars += s[i];
        
        if (nums.indexOf(chars) !== -1) {
            answer += nums.indexOf(chars);
            chars = '';
        }
    }
    
    return +answer;
}