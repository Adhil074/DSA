/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    let n = graph.length;
    let arr = new Array(n).fill(-1);
    for (let i = 0; i < n; i++) {//graph  may disconnected so traverse whole graph...
        if (arr[i] == -1) {//if curr node uncolored, create a que and push curr node in it and mark as colored in array...
            let q = [];
            q.push(i);
            arr[i] = 0;
            while (q.length > 0) {
                let node = q.shift();//take out that stored curr node from q..
                for (let neighbor of graph[node]) {//traverse its neighbors...
                    if (arr[neighbor] === -1) {//if neighbpor  uncolored , color it with opposite color from curr node..
                        arr[neighbor] = 1 - arr[node];
                        q.push(neighbor);//and push that neighbor in q..
                    } else if (arr[neighbor] === arr[node]) {//else if curr node and neighbor node shares same color rturn false..
                        return false;
                    }
                }
            }
        }
    }
    return true;
};