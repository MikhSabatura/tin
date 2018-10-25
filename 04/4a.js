function facIter(n) {
    if (n < 0) {
        return -1;
    }
    let result = 1;
    while (n > 1) {
        result *= n--;
    }
    return result;
}

var factorial = function facRecur(n) {
    if (n < 0) {
        return -1;
    }
    return n < 2 ? 1 : n * facRecur(n - 1);
}

var vars = [0, 1, 2, 3, 4, 5];
console.log("iterative:");
for (const i of vars) {
    console.log(facIter(i));
}
console.log("\nrecursive:");
for (const i of vars) {
    console.log(factorial(i));
}