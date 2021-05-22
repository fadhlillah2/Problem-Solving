/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let res = [];
var preorderTraversal = function (root) {
  helper(root);

  return res;
};

function helper(node) {
  if (!node) return;
  res.push(node.val);
  helper(node.left);
  helper(node.right);
}
