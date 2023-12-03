function solution(num, n) {
    if (num%n===0)
        return 1;
    else
        return 0;
}


//다른 사람의 풀이 - 삼항연산자 사용
// condition ? exprIfTrue : exprIfFalse;

function solution(num, n) {
    return num%n ? 0 : 1;
}
