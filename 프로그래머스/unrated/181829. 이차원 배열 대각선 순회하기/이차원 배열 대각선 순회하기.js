function solution(board, k) {
    return board.reduce((acc, cur, i) => acc + cur.filter((_, j) => i + j <= k).reduce((a, v) => a + v, 0), 0);
}