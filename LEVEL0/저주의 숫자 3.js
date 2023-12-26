function solution(n) {
    let x=0; //3x 마을에서 쓰는 숫자
    for(let i=0;i<n;i++){
        x++; 
        while(true){
            if( x%3===0 || x.toString().includes('3') ){ //3의 배수이거나, 3이 들어가면 건너뜀
                x++;
            }else{ 
                break;
            }
        }
    }
    return x;
}
