function solution(my_string, n) {
    const answer = [...my_string];
    return answer.map(v=>v.repeat(n)).join('');
}
