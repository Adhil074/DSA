/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let n = s.length;
    let m = t.length;
    let prev = new Array(m + 1).fill(true);////true enduku ani gogle ni adagali..
    for (let i = 1; i <= n; i++) {
        let curr = new Array(m + 1).fill(false);//false enduku ani gogle ni adagali..
        for (let j = 1; j <= m; j++) {
            if (s[i - 1] == t[j - 1]) {
                curr[j] = prev[j - 1]
            } else {
                curr[j] = curr[j - 1]
            }
        }
        prev = curr;
    }
    return prev[m];
}