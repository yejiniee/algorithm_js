function solution(num_list) {
    const answer = [...num_list];
    return answer.sort((a,b)=>a-b).slice(5,answer.length);
}
