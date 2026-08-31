/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    let adj = Array.from({ length: n }, () => []);
    for (let [u, v, w] of flights) {
        adj[u].push([v, w]);
    }
    let distArray = new Array(n).fill(Infinity);
    distArray[src] = 0;
    let q = [];
    q.push([src, 0, 0]);
    while (q.length > 0) {
        let [node, cost, stops] = q.shift();//take snapshot of items...
        if (stops > k) continue;
        for (let [neighbor, weight] of adj[node]) {
            let newCost = cost + weight;
            if (newCost < distArray[neighbor]) {
                distArray[neighbor] = newCost;
                q.push([neighbor, newCost, stops + 1]);
            }
        }
    }
    return distArray[dst] === Infinity ? -1 : distArray[dst];
};