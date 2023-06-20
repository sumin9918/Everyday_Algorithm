function solution(emergency) {
    const priority = [...emergency].sort((a, b) => b - a);
    
    return emergency.map(v => priority.indexOf(v) + 1);
}