function solution(slice, n) {
    var answer = 0;
    answer = Math.floor( (n - 1) / slice) + 1;
    return answer;
}

//다른 사람의 풀이

function solution(slice, n) {
    return Math.ceil(n / slice)
}
