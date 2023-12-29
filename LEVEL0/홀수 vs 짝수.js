function solution(num_list) {
    let sumOdd=0;
    let sumEven=0;
    num_list.map((v, idx) => {
        !(idx % 2) ? sumEven += v : sumOdd += v; 
    })

    return sumOdd > sumEven ? sumOdd : sumEven; 
}
