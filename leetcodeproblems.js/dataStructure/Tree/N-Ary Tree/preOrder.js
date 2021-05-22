/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  let res = [];
  function helper(node) {
    if (!node) return;
    res.push(node.val);
    for (c of node.children) {
      helper(c);
    }
  }
  helper(root); // call the function

  return res;
};
