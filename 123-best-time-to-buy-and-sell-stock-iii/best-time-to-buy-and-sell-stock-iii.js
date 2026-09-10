/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let n = prices.length;
    let nextDay = Array.from({ length: 2 }, () => new Array(3).fill(0));
    for (let i = n - 1; i >= 0; i--) {
        let currDay = Array.from({ length: 2 }, () => new Array(3).fill(0));
        for (let buy = 0; buy <= 1; buy++) {
            for (let k = 1; k <= 2; k++) {
                if (buy) {
                    let buyStock = -prices[i] + nextDay[0][k];
                    let notbuyStock = 0 + nextDay[1][k];
                    currDay[buy][k] = Math.max(buyStock, notbuyStock);
                } else {
                    let sellStock = prices[i] + nextDay[1][k - 1]; //sell kare baadme buy kar sakte so [1]...
                    let notsellStock = 0 + nextDay[0][k]; //sell nai kare so buy bhi nai kar sakte that's why [0]..
                    currDay[buy][k] = Math.max(sellStock, notsellStock);
                }
            }
        }
        nextDay = currDay; //swap pointers..
    }
    return nextDay[1][2];
};