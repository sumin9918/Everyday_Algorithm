function solution(str_list) {
    const str = str_list.find(str => str === 'l' || str === 'r');
    
    if (!str) return [];
    
    return str === 'l' ? str_list.slice(0, str_list.indexOf('l')) : str_list.slice(str_list.indexOf('r') + 1)
}