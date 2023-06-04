function solution(my_string, is_prefix) {
    return +[...my_string].map((_, i) => [...my_string].splice(0, i).join('')).includes(is_prefix);
}