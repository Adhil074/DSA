/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let n = s.length;
    let count = 0;
    let prev = new Array(n + 1).fill(false);
    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j >= i; j--) {
            if (s[i] === s[j]) {
                if (j - i <= 2) {
                    prev[j] = true;
                } else {
                    prev[j] = prev[j - 1];
                }
            } else {
                prev[j] = false;
            }
            if (prev[j] === true) {
                count++;
            }
        }
    }
    return count;
};