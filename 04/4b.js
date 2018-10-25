function fibonacci(n) {
    if (n < 1) {
        return -1;
    }
    let i = 1,
        curr = 1,
        prev = 0;
    while (i < n) {
        curr += prev;
        prev = curr - prev;
        i++;
    }
    // for (var i = 1, curr = 1, prev = 0; i < n; i++, curr += prev, prev = curr - prev) {}
    return curr;
}

var vars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (const i of vars) {
    console.log(`${i}: ` + fibonacci(i));
}