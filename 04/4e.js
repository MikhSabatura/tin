function findLongestWord(str) {
    str.trim();
    str = str.split(/\s+/);
    return str.sort((a, b) => a.length - b.length)[str.length - 1];

}

var str = "foo one Two Three Four Five ThisOneIsTheLongest smth cats and something else i don't know what else to write here";
console.log(findLongestWord(str));