function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0] * numbers[1], numbers[numbers.length-1] * numbers[numbers.length-2]);
  //만약 음수일 경우 가장 작은 두 수가 최대값
}
