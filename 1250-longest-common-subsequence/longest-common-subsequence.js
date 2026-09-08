/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let n = text1.length;
    let m = text2.length;
    let prev = new Array(m + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        let curr = new Array(m + 1).fill(0);
        for (let j = 1; j <= m; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                curr[j] = 1 + prev[j - 1];
            } else {
                curr[j] = Math.max(curr[j - 1], prev[j]);
            }
        }
        prev = curr;
    }
    return prev[m];
};