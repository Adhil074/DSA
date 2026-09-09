/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let n = word1.length;
    let m = word2.length;
    let prev = new Array(m + 1).fill(0);
    // Base case: Row 0 -> prev[j] = j
    for (let j = 0; j <= m; j++) {
        prev[j] = j;
    }
    for (let i = 1; i <= n; i++) {
        let curr = new Array(m + 1).fill(0);
        curr[0] = i; // Base case: Column 0 -> dp[i][0] = i
        for (let j = 1; j <= m; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                curr[j] = prev[j - 1];
            } else {
                let insert = 1 + curr[j - 1];
                let del = 1 + prev[j];
                let replace = 1 + prev[j - 1];
                curr[j] = Math.min(insert, del, replace);
            }
        }
        prev = curr;
    }
    return prev[m];
};