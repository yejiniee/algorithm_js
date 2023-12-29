function solution(my_strings, parts) {
    return my_strings.reduce((acc, cur, i) => {
        const [from, to] = parts[i];
        const curSlice = cur.slice(from, to+1);
        return acc+curSlice;
    }, "")
}
