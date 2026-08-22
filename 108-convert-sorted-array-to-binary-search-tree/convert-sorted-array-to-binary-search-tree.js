/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    let helper = function (nums, st, end) {
        if (st > end) return null;
        let mid = st + Math.floor((end - st) / 2);
        let root = new TreeNode(nums[mid]);
        root.left = helper(nums, st, mid - 1);
        root.right = helper(nums, mid + 1, end);
        return root;
    };
    return helper(nums, 0, nums.length - 1);
};
