// 최대 공약수
function cal_gcd(a, b) {
    return a % b === 0 ? b : cal_gcd(b, a % b);
}

function solution(denom1, numer1, denom2, numer2) {
    let num = denom1 * numer2 + denom2 * numer1; //분자
    let denom = numer1 * numer2; //분모
    let gcd = cal_gcd(num, denom);
    
    // 분자 분모를 최대 공약수로 나누고 배열에 넣기
    return [num / gcd, denom / gcd]
}
