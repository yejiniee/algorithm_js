function solution(strlist) {
    var answer = [];
    for(word of strlist){
        answer.push(word.length);
    }
    return answer;
}

//다른 사람의 풀이

function solution(strlist) {
    return strlist.map((el) => el.length)
}
