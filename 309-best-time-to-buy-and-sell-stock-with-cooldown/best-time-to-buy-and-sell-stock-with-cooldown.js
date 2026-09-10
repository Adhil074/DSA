/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let n = prices.length;
    let nextBuy = 0;
    let nextSell = 0;
    let nextnextBuy = 0;
    for (let i = n - 1; i >= 0; i--) {
        let currBuy = Math.max(-prices[i] + nextSell, 0 + nextBuy);
        let currSell = Math.max(prices[i] + nextnextBuy, 0 + nextSell);
        nextnextBuy = nextBuy;
        nextBuy = currBuy;
        nextSell = currSell;
    }
    return nextBuy;
};