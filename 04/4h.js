function secondLowestGreatest(arr) {
    let result = [];
    arr = arr.sort((a, b)  => a - b);
    result.push(arr[1]);
    result.push(arr[arr.length - 1]);
    return result;
}

var nums = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(secondLowestGreatest(nums));