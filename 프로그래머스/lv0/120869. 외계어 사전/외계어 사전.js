function solution(spell, dic) {
    return 1 + !dic.some(v => !spell.map(s => v.includes(s)).includes(false))
}