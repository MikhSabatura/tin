function binarySearch(arr, key) {
    let l = 0,
        r = arr.length - 1;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (arr[m] === key) {
            return m;
        } else if (arr[m] > key) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return -1;
}

var args = [];
for (let i = 0; i < 100; i++) {
    args.push(i);
}
console.log(binarySearch(args, 10));