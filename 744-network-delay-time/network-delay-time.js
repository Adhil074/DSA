/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    let adj = Array.from({ length: n + 1 }, () => []);
    for (let [u, v, w] of times) {
        adj[u].push({ node: v, weight: w });
    }
    let distArray = new Array(n + 1).fill(Infinity);
    distArray[k] = 0;
    // 1. Initialize built-in MinPriorityQueue sorting by distance
    const minHeap = new MinPriorityQueue({
        compare: (a, b) => a.dist - b.dist,
    }); //this line tells the priority queue how to compare two objects in queue({ node: 1, dist: 5 } - { node: 2, dist: 10 }) so that the smallest distance always stays at the top.
    // 2. Push start node 'k' with distance 0
    minHeap.enqueue({ node: k, dist: 0 });
    while (minHeap.size() > 0) {
        const { node, dist } = minHeap.dequeue(); //pop node with smallest node
        if (dist > distArray[node]) {
            continue; // if current distance longer than already exist distance skip this stale path and move to the next item in the queue
        }
        for (let { node: v, weight: w } of adj[node]) {//traverse neighbors and update distance if smaller distance found..
            if (dist + w < distArray[v]) {
                distArray[v] = dist + w;
                minHeap.enqueue({ node: v, dist: distArray[v] });
            }
        }
    }
    // Get max value ignoring index 0
    const maxTime = Math.max(...distArray.slice(1)); //Because nodes are 1-indexed (from 1 to n), you must slice off index 0
    return maxTime === Infinity ? -1 : maxTime; //  Return -1 if any node is unreachable (still Infinity), else return maxTime
};
