function solution(my_string, n) {
   return my_string.slice(0, n)
}

//다른 사람의 풀이
function solution(my_string, n) {
  return my_string.substring(0, n);
}

/*

substr(), substring(), slice() 함수는 모두 문자열을 잘라주는 역할을 한다.
모두 비슷하지만, 조금씩 작동 방법이 다르다.

string.substr(start, length)
: 매개변수로 잘라내고 싶은 문자열의 start index와 길이를 전달

string.substring(start, end)
: 매개변수로 잘라내고 싶은 문자열의 start index와 last index를 전달

string.slice(start, end)
: 매개변수로 잘라내고 싶은 문자열의 start index와 last index를 전달

< substring vs slice >

- start > end 일 경우,
substring() : start 값과 end 값을 바꾸어서 처리
예시) substring(1, 0) => substring(0, 1)로 처리
 
slice() : 그냥 비어있는 string, 즉 ""을 리턴

- start 또는 end 값이 음수인 경우
slice() : string의 가장 뒤에서 음수의 절대값만큼 내려온 index로 취급
예시) slice(-2, 6) => slice(4, 6)
예시) slice(0, -2) => slice(0, 4)

substring() : 값이 음수인 경우, 0으로 취급
예시) substring(-2, 6) => substring(0, 6)
예시) substring(0, -2) => substring(0, 0)

- slice() : start 또는 end값이 음수이고, 음수의 절대값이 전체 string 길이보다 클 때
이 경우, 음수는 단순히 0으로 처리됨

string의 길이는 10보다 작다고 가정했을 때,
예시) slice(-10, 6) => slice(0, 6)
예시) slice(0, -10) => slice(0, 0) 

*/
