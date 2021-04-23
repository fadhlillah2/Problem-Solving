//* 1
// var removeDuplicates = function (S) {
//   let obj = {},
//     str = "";
//   for (val of S) {
//     obj[val] = ++obj[val] || 1;
//   }
//   console.log(obj);
//   for (key in obj) {
//     if (obj[key] % 2 === 1) str += key;
//   }

//   return str;
// };
// console.log(removeDuplicates("azxxzy"));

//!???? 2
// var removeDuplicates = function (S) {
//   let s = S.split(""),
//     l = S.length;
//   console.log(s);
//   for (let i = 0; i < l; i++) {
//     if (s[i] === s[i + 1]) {
//       s[i] = "";
//       s[i + 1] = "";
//     }
//   }
//   s = s.join("");

//   return s;
// };
// console.log(removeDuplicates("aababaab"));

//* 3
// var removeDuplicates = function (S) {
//   let res = [];
//   for (let i = 0; i < S.length; i++) {
//     if (S[i] !== res[res.length - 1]) {
//       res.push(S[i]);
//       console.log(res);
//     } else {
//       res.pop();
//     }
//   }
//   return res.join("");
// };
// console.log(removeDuplicates("aababaab"));

// ! 1======================================================================================================

// function toLowCase(str) {
//   let lowerCase = "";
//   for (let letter of str) {
//     const index = letter.charCodeAt(0);
//     console.log(index);
//     console.log(letter);
//     if (index >= 65 && index <= 90) letter = String.fromCharCode(index + 32);
//     console.log(letter);
//     lowerCase += letter;
//   }
//   return lowerCase;
// }
// console.log(toLowCase("HELLO"));

// ! 2 ====================================================================================================

//*  Flipping an Image

// Example 1:
// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

// Example 2:
// Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

var flipAndInvertImage = function (image) {
  let reversed = image.map((curr, index) => {
    return curr.reverse();
  });
  console.log(reversed);
  for (i = 0; i < reversed.length; i++) {
    for (let j = 0; j < reversed[i].length; j++) {
      if (reversed[i][j] === 1) reversed[i][j] = 0;
      else reversed[i][j] = 1;
    }
  }
  return reversed;
};
console.log(
  flipAndInvertImage([
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0],
  ])
);

// ! 3 ====================================================================================================

//* Remove Outermost Parentheses (goop concept)
// Example 1:
// Input: "(()())(())"
// Output: "()()()"
// Explanation:
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

// Example 2:
// Input: "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation:
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

// Example 3:
// Input: "()()"
// Output: ""
// Explanation:
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".

// var removeOuterParentheses = function (S) {
//   let a = "",
//     c = 0;
//   for (let s of S) {
//     if (s === "(") {
//       if (c) a += s;
//       c++;
//     } else {
//       c--;
//       if (c) a += s;
//     }
//   }
//   return a;
// };
// console.log(removeOuterParentheses("()()"));
