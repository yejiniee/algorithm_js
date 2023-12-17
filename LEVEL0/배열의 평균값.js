function solution(numbers) {
    var answer = 0;
    for(num of numbers){
        answer+=num;
    }
    
    return answer/numbers.length;
}

//다른 사람의 풀이
function solution(numbers) {
    var answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
    return answer;
}
