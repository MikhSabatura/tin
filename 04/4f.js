function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

var vars = [1, 2, 3, 4, 5, 8, 100, 101, 197, 109];
for (const i of vars) {
    console.log(`${i}: ` + isPrime(i));
}