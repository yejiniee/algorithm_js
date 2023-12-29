function solution(num_list) {
    let mul=num_list.reduce((acc, cur)=>acc*cur);
    let pow=Math.pow(num_list.reduce((acc, cur)=>acc+cur),2);
    return mul<pow?1:0;
}
