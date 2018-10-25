function isPalyndrome(str) {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
            return false;
        }
    }
    return true;
}

var vars = ["test", "oro", "lol", "some", "string", "boobboob", "cat", "racecar", "10201", "102201"];
for (const i of vars) {
    console.log(i + ": " + isPalyndrome(i));
}