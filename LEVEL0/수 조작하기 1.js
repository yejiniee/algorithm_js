function solution(n, control) {
    for(let i=0;i<control.length;i++){
        if(control[i]==='w'){
            n++;
        } else if(control[i]==='s'){
            n--;
        } else if(control[i]==='d'){
            n+=10;
        } else if(control[i]==='a'){
            n-=10;
        } 
    }
    return n;
}

//다른 사람의 풀이
const operations = {
  w: (n) => n + 1,
  s: (n) => n - 1,
  d: (n) => n + 10,
  a: (n) => n - 10,
};

function solution(n, control) {
  return [...control].reduce((prev, op) => operations[op](prev), n);
}
