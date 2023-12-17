function solution(array, height) {
    var answer = 0;
    array.forEach((el)=>{
        if(el>height)
            answer++;
    })
    return answer;
}

//다른 사람의 풀이
function solution(array, height) {
    var answer = array.filter(item => item > height);
    return answer.length;
}
