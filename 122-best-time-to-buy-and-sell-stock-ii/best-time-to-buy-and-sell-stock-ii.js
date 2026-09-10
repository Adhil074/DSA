/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let n = prices.length;
    // Base Case (day n): No more days left, so future profit is 0 for both states
    let nextBuy = 0;
    let nextSell = 0;
    for (let i = n - 1; i >= 0; i--) {
        let currBuy = Math.max(-prices[i] + nextSell, 0 + nextBuy); //agar buy kartho sell karo, else buy karo
        let currSell = Math.max(+prices[i] + nextBuy, 0 + nextSell); //agar sell kartho buy karo, else sell karo..
        nextBuy = currBuy; //swap pointers
        nextSell = currSell;
    }
    return nextBuy; //since the problem starts with nextBuy..
};