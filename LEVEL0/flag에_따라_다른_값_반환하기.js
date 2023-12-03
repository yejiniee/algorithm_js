function solution(a, b, flag) {
    let answer;
    flag ? answer = a+b : answer = a-b;
    return answer;
}

//다른 사람의 풀이
function solution(a, b, flag) {
    return flag ? a+b : a-b;
}
