function solution(my_string) {
    var answer = '';
    for(let i=my_string.length-1;i>=0;i--){
        answer+=my_string[i]
    }
    return answer;
}

//다른 사람의 풀이

function solution(my_string) {
    var answer = [...my_string].reverse().join("");
    return answer;
}
