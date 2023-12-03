function solution(name, yearning, photo) {
    const memory = {}; // 인물 별 그리움 점수를 객체로 저장
    for(let i=0 ; i<name.length ; i++ ){
        memory[name[i]] = yearning[i];
    }
 
   return photo.map((arr) =>
    arr.reduce((acc, cur) => acc + (memory[cur] || 0), 0)
  );
}

// 배열 원소의 합계 관련 문제풀이 시, reduce() 를 활용하는 것이 좋다

/*
arr.map((item, index)=>{})
: 배열을 순회하며 지정된 콜백 함수를 적용하여 각 요소를 변환하고, 변환된 값을 모아서 새로운 배열로 return

arr.reduce(callback(accumulator, current, index, array), initialValue);
: 배열의 요소를 순회하며 하나의 값으로 줄여 return
-acc accumulator : 누산기, 누적되는 값, 최종적으로 출력되는 값
-cur current : 현재 돌고 있는 요소
-idx index : 배열 요소의 순서 (optional)
-arr array (또는 src source) : 현재 배열, 원본 배열 (optional)
-initialValue : acc의 초기값 (optional)
*/
