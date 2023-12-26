function cal_gcd(a, b) {
    return a % b === 0 ? b : cal_gcd(b, a % b);
}

function factorization(n) {
  let result = [];
  let divisor = 2;
  
  while (n >= 2) {
    if (n % divisor === 0) {
      result.push(divisor)
      n = n / divisor;
    }
     else divisor ++;
  }
  return [...new Set(result)];
}

function solution(a, b) {
    let g=cal_gcd(a,b); //최대공약수
    b/=g; //분모를 최대공약수로 나눔
    
    let primes = factorization(b); //소인수분해 결과-배열
    return primes.find(n => n !== 2 && n !== 5) ? 2 : 1;
}

//다른 사람의 풀이-1
function solution(a, b) {
  	// a를 b로 나눈 수를 소수점 아래 10의 자리만큼 표기한 후 Number 타입으로 변환한다.
  	// 이때 변환한 값과 a를 b로 나눈 수가 같다면 유한소수이므로 1,
  	// 아니라면 무한소수이므로 2를 리턴한다.
    return Number((a/b).toFixed(10)) == a/b ? 1 : 2
}


//다른 사람의 풀이-2
function solution(a, b) {
    let n = 1;
    for (let i = 1; i <= Math.min(a,b); i++) { //n=최대공약수
        if (a%i===0 && b%i===0) n = i;
    }

    b/=n; 
    while (b%2===0) b/=2;
    while (b%5===0) b/=5; //분모에 2와 5가 사라질 때까지 나눔

    return b === 1 ? 1 : 2;   
}
