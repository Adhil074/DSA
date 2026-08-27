/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    let count = 0;
    let n = isConnected.length; // Added line to fix the bug
    let visited = new Array(n).fill(false);

    function dfs(node) {
        if (visited[node] == true) return;
        visited[node] = true; // Spot on: mark current city as visited

        for (let i = 0; i < isConnected[node].length; i++) { // Spot on: check all potential neighbors
            let neighbor = i;
            if (isConnected[node][i] == 1) {
                // ⚠️ Comment tweak: This checks if city `node` is connected to city `i` 
                // within the SAME province, expanding the current province.
                dfs(neighbor);
            }
        }
    }

    // Spot on: Iterate through all cities to handle disconnected components/provinces
    for (let i = 0; i < isConnected.length; i++) {
        if (visited[i] == false) {
            count++; // Found a brand new province!
            dfs(i);
        }
    }

    return count;
};