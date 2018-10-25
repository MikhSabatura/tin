function amountToCoins(num, coins) {
    let result = [];
    coins = coins.sort((a, b) => b - a);
    for (let i = 0; num > 0; i++) {
        while(coins[i] <= num) {
            result.push(coins[i]);
            num -= coins[i];
        }
    }
    return result;
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
