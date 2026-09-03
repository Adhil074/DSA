/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let n = s.length;
    if (n === 0 || s[0] === '0') return 0;

    let next1 = 1; // dp[n]
    let next2 = 0; // dp[n + 1]
    let curr = 0;

    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '0') {
            curr = 0;
        } else {
            let takeonedigit = next1;
            let taketwodigit = 0;

            if (i + 1 < n) {
                let doubledigit = s[i] + s[i + 1];
                if (doubledigit >= 10 && doubledigit <= 26) {
                    taketwodigit = next2;
                }
            }
            curr = takeonedigit + taketwodigit;
        }

        // Shift window for the next iteration
        next2 = next1;
        next1 = curr;
    }

    return next1;
};