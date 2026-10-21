/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let n = gas.length;
    let m = cost.length;
    let total = 0;
    let result = 0;
    let totalGas = 0;
    let totalCost = 0;
    // Calculate total gas available across all stations
    for (let a = 0; a < n; a++) {
        totalGas += gas[a];
    }
    // Calculate total cost required across all stations
    for (let b = 0; b < m; b++) {
        totalCost += cost[b];
    }
    // If total cost is greater than total gas, completing a circle is impossible, so return -1
    if (totalCost > totalGas) {
        return -1;
    }
    // Loop through each station to find the valid starting index using the greedy approach
    for (let i = 0; i < n; i++) {
        // Add current station gas and subtract the cost to move to the next station
        total = total + gas[i] - cost[i];
        // If our running total drops below zero, this starting candidate fails
        if (total < 0) {
            // Reset total balance back to 0
            total = 0;
            // Shift our potential result index to the very next station (i + 1)
            result = i + 1;
        }
    }
    // Return the final starting index that successfully completed the trip
    return result;
};