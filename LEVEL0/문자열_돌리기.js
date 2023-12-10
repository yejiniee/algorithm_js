const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    for(let i=0;i<str.length;i++){
        console.log(str[i]);
    }
});

//다른 사람의 풀이
let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    [...str].forEach(c => console.log(c))
});


/*

[...str]: 구조분해 할당
예) [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);
// Expected output: Array [30, 40, 50]

forEach문: 배열이 가지고 있는 요소들을 한 번씩 반환하여 반복을 시켜주게 되는 것
배열.forEach(요소명 => {
	실행문(요소명);
});

*/
