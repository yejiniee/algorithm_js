function solution(num_list) {
    const answer = [...num_list];
    const a = answer[num_list.length-1];
    const b = answer[num_list.length-2];
   if(a>b){
       answer.push(a-b);
   }else{
       answer.push(a*2);
   }
    return answer;
}
