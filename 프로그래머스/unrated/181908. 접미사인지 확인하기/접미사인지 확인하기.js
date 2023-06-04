function solution(my_string, is_suffix) {
    return +[...my_string].map((_, i) => [...my_string].splice(i).join('')).includes(is_suffix)
}