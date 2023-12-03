function solution(num_list, n) {
    return Number(num_list.includes(n));
}

//다른 사람의 풀이
function solution(num_list, n) {
  return num_list.includes(n) ? 1 : 0;
}


/*
배열에 특정 값이 포함되어 있는지 여부 체크하는 함수

1. indexOf(), lastIndexOf()
2. includes()
3. findIndex()
4. some()

1. indexOf(): arr.indexOf(searchElement[, fromIndex])
배열 안에서 찾으려는 값(searchElement)과 정확하게 일치(===)하는 '첫번째' element의 index를 리턴합니다. 
 
lastIndexOf(): arr.lastIndexOf(searchElement[, fromIndex])
배열 안에서 찾으려는 값(searchElement)과 정확하게 일치(===)하는 '마지막' element의 index 를 리턴합니다.
 
두 함수 모두 찾으려는 값이 배열에 없으면 -1을 리턴합니다.

2. includes() : arr.includes(valueToFind[, fromIndex])
배열이 특정값을 포함하고 있는지의 여부를 'boolean 값'으로 반환합니다.
있으면 true, 없으면 false

3. findIndex(): arr.findIndex(callback(element[, index[, array]])[, thisArg])
배열에서 값을 찾는 조건을 callback 함수로 전달하고,
배열에서 조건에 맞는 값의 '첫번째 index'를 리턴하는 함수입니다.
만약, 조건에 맞는 값이 배열에 없으면 -1을 리턴합니다.

4. some(): arr.some(callback(element[, index[, array]])[, thisArg])
배열에서 값을 찾는 조건을 callback 함수로 전달하고,
배열에 조건에 맞는 값이 있는지 여부(boolean)를 리턴하는 하는 함수입니다.
조건에 맞는 값이 있으면 true, 조건에 맞는 값이 없으면 false를 리턴합니다.

[출처] https://hianna.tistory.com/403
*/
