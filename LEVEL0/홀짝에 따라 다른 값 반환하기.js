function solution(n) {
    let odd=0;
    let even=0;
    if(n%2===1){ //홀수
        for(let i=1;i<=n;i+=2){
            odd+=i;
        }
        return odd;
    }else{
        for(let i=2;i<=n;i+=2){
            even+=Math.pow(i,2);
        }
        return even;
    }
}
