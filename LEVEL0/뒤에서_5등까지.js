function solution(num_list) {
    return num_list.sort((a,b) => a-b).slice(0,5);
}

//오름차순 sort((a,b) => a-b)
//내림차순 sort((a,b) -> b-a)
