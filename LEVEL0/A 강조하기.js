function solution(myString) {
    return [...myString].map(a => a.toLowerCase()).join('').replaceAll('a','A');
}
