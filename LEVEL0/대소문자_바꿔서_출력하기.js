//나의 풀이
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
    let arr = []; //대소문자 변환 후 새로 담을 배열
    for(let x of str) {
        x === x.toUpperCase() ? arr.push(x.toLowerCase()) : arr.push(x.toUpperCase());  
    }
    console.log(arr.join(''));
});


//다른 사람의 풀이- 1
let input = [];
rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    // 변환할 값을 저장할 배열 준비
    let arr = [];
    
    // 입력된 문자열을 배열로 만든 뒤, 해당 문자가 대문자면 소문자, 아니라면 대문자로 변경
    str.split('').forEach((k) => {arr.push(k == k.toUpperCase() ? k.toLowerCase() : k.toUpperCase()); });
    
    // 이후 문자배열 합치기
    console.log(arr.join(''));
});


//다른 사람의 풀이-2
let input;
rl.on('line', (line) => {
  input = [...line];
}).on('close', () => {
  console.log(
    input.map((char) => (/[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase())).join('')
  );
});


/*

.toUpperCase()
: 대문자로 변환

.toLowerCase()
: 소문자로 변환

정규표현식: 양식 검사 등에 활용
 -리터럴 방식
 const regex = /abc/;

 -생성자 방식
 const regex = new RegExp("abc");
 const regex = new RegExp(/abc/); // 이렇게 해도 됨

/패턴/.test(문자열)
: 문자열이 /패턴/ 이라는 정규표현식과 매칭되는지 여부를 검사하여 true나 false를 반환함

배열.join(구분자)
: 배열의 각 요소를 지정한 구분자로 연결해 하나의 문자열로 만들어 반환함

*/
