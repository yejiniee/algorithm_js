function solution(lines) {
  var answer = 0;
  let lineMap = new Array(200);  // 선분들이 놓일 공간
  lineMap.fill(0);

  for (let i = 0; i < 3; i++) {
    let left = lines[i][0];
    let right = lines[i][1];

    for (let j = left; j < right; j++) {
      lineMap[j + 100] += 1;
    }
  }

  for (let i in lineMap) {
    if (lineMap[i] > 1) {
      answer += 1;
    }
  }

  return answer;
}

//풀이
/*
배열을 0으로 채운 뒤, 선분이 지나는 곳마다 +1을 해준다
2 이상의 수로 채워진 부분 == 겹치는 부분
*/
