function solution(a, b) {
    const answer = [a,b];
    let ab=String(a)+String(b);
    let ba=String(b)+String(a);
    return ab > ba ? Number(ab) : Number(ba);
    
}
