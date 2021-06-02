/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (!val ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    let res = [];
    function helper(node) {
        if(!node) return;.
        helper(node.left);
        helper(node.right)
        res.push(node.val)
    }
    helper(root)
    
    return res;
};