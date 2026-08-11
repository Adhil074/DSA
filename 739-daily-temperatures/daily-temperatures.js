/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let n = temperatures.length;
    let ans = new Array(n);
    let st = [];
    for (let i = n - 1; i >= 0; i--) {
        while (
            st.length > 0 &&
            temperatures[st[st.length - 1]] <= temperatures[i]
        ) {
            st.pop();
        }
        if (st.length === 0) {
            ans[i] = 0;
        } else {
            ans[i] = st[st.length - 1] - i;
        }
        st.push(i);
    }
    return ans;
};