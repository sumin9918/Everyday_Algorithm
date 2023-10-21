const words = ['aya', 'ye', 'woo', 'ma'];

function solution(babbling) {
    return babbling.filter(str => {
        for (let j = 0; j < words.length; j++) {
            if (str.includes(words[j].repeat(2))) return false;
            str = str.split(words[j]).join('*');
        }
        
        return [...str].reduce((acc, s) => acc && s === '*', true);
    }).length;    
}