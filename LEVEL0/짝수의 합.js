function solution(n) {
    var answer = 0;
    for(let i=2;i<=n;i+=2){
        answer+=i
    }
    return answer;
}

//다른 사람의 풀이
//수열 공식 이용
function solution(n) {
    var half = Math.floor(n/2);
    return half*(half+1);
}
