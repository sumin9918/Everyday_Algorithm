function solution(new_id) {
    return new_id.replace(/[A-Z]/g, s => s.toLowerCase()).replace(/[^\w-.]/g, '').replace(/[.]+/g, '.').replace(/^[.]|[.]$/, '').replace(/^$/, 'a').slice(0, 15).replace(/[.]$/, '').replace(/.$/, (s, i) => i < 2 ? s.repeat(3 - i) : s);
}