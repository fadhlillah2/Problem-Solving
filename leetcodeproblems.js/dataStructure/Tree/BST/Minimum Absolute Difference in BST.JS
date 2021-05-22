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
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let res = [],
    min = Infinity;
  function helper(node) {
    if (!node) return;
    helper(node.left);
    res.push(node.val);
    helper(node.right);
  }
  helper(root);

  for (let i = 0; i < res.length; i++) {
    for (let j = i + 1; j < res.length; j++) {
      if (res[j] - res[i] === 0) return 0;
      if (min > res[j] - res[i]) min = res[j] - res[i];
    }
  }

  return min;
};

//! Level Up! (Lv.1)
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
 * @return {number}
 */
//  var getMinimumDifference = function(root) {
//     let prevNode=Infinity, min=Infinity;
//     function helper(node){
//         if(!node) return;
//         helper(node.left);
//         min = Math.min(min, Math.abs(node.val-prevNode));
//         prevNode = node.val;
//         helper(node.right);

//     };
//     helper(root);

//     return min;
// };

let a = [1, 2, 3];
let b = [1, 3, 3];
for (let i = 0; i < a.length; i++) {
  a[i] === b[i] ? false : true;
}
