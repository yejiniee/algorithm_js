function solution(my_string, k) {
    let answer='';
    for(let i=0 ; i<k ; i++){
        answer+=my_string;
    }
    return answer;
}

//다른 사람의 풀이
function solution(my_string, k) {
    return my_string.repeat(k);
}

/*
repeat(): 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환
String.repeat()

반환값: 현재 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열
*/
