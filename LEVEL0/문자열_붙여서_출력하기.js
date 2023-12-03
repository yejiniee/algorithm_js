const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
    
    console.log(str1+str2)
});

/*
<str1+str2 대신 사용 가능한 함수>

concat(): 매개변수로 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열을 반환
console.log(str1.concat(str2)); 

join(): 메배열의 모든 요소를 연결해 하나의 문자열로 만듦
join() 메소드의 매개변수로는 배열의 각 요소를 구분할 문자열이 들어감. 생략하면 , 로 요소가 구분됨
console.log(str1.join()); // apple,pen
console.log(str1.join('')); // applepen
*/

//다른 사람의 풀이
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    const strArr = line.split(' ')
    console.log(strArr.join(''))
})
