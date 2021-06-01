/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  let res = [];
  function helper(node) {
    if (!node) return;
    for (c of node.children) {
      helper(c);
    }
    res.push(node.val);
  }
  helper(root);

  return res;
};
