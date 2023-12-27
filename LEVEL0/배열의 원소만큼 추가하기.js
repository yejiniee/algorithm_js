function solution(arr) {
    var answer = [];
    let a;
    for(let i=0;i<arr.length;i++){
        a=arr[i];
        for(let j=0;j<a;j++){
            answer.push(a);
        }
    }
    
    return answer;
}

//다른 사람의 풀이
function solution(arr) {
    return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}
