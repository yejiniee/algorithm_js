function solution(num_list) {
    var answer = [];
    let even=0;
    let odd=0;
    num_list.forEach(i=>{
        if(i%2===0)
            even++;
        else
            odd++;
    });
    answer.push(even);
    answer.push(odd);
    return answer;
}

//다른 사람의 풀이
function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}
