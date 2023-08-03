function solution(name, yearning, photo) {
    const score = name.reduce((acc, v, i) => ({...acc, [v] : +yearning[i] }), {});
    
    return photo.map(p => p.reduce((acc, v) => acc += score[v] || 0, 0));
}