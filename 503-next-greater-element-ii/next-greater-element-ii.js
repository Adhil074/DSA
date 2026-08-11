/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let n = nums.length;
    let ans = new Array(n).fill(-1);
    let st = [];
    for (let i = 2 * n - 1; i >= 0; i--) {
        while (st.length > 0 && st[st.length - 1] <= nums[i % n]) {
            st.pop();
        }
        if (st.length === 0) {
            ans[i % n] = -1;
        } else {
            ans[i % n] = st[st.length - 1];
        }
        st.push(nums[i % n]);
    }
    return ans;
};