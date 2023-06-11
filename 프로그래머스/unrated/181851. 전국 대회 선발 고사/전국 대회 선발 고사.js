function solution(rank, attendance) {
    const [f, s, t] = rank.filter((_, i) => attendance[i]).sort((a, b) => a - b).slice(0, 3);

    return 10000 * rank.indexOf(f) + 100 * rank.indexOf(s) + rank.indexOf(t);
}