function solution(a, b, c, d) {    
    const deduplicated_array = [...new Set([a, b, c, d])];
    
    const filtered_array = deduplicated_array.map(n => [a, b, c, d].filter(x => n === x));
        
    if (filtered_array.length === 1) return 1111 * a;
    else if (filtered_array.length === 2) {        
        const [p, q] = filtered_array;
        
        if (p.length === 2) return (p[0] + q[0]) * Math.abs(p[0] - q[0]);
        else return p.length === 3 ? (10 * p[0] + q[0]) ** 2 : (10 * q[0] + p[0]) ** 2
    } else if (filtered_array.length === 3) return filtered_array.reduce((acc, n) => n.length === 1 ? acc * n : acc, 1);
    else if (filtered_array.length === 4) return Math.min(...filtered_array.flat(1));
    
}