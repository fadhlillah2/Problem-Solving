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

// ! 4 ====================================================================================================

//* Maximum 69 Number

// Example 1:
// Input: num = 9669
// Output: 9969
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.

// Example 2:
// Input: num = 9996
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.

// Example 3:
// Input: num = 9999
// Output: 9999
// Explanation: It is better not to apply any change.

// const maximum69Number = (num) => Number(num.toString().replace("6", "9"));
// console.log(maximum69Number(9669));

// let a = 123123123123;
// console.log(Number(a.toString().replace("1", "5")));

// ! 5 ====================================================================================================

// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15

// var subtractProductAndSum = function (n) {
//   let sum = 0,
//     product = 1;
//   while (n) {
//     num = n % 10;
//     sum += num;
//     product *= num;
//     n = Math.floor(n / 10);
//   }
//   return product - sum;
// };
// console.log(subtractProductAndSum(234));

//====

// Input: n = 7
// Output: 6
// Explanation: Details of the tournament:
// - 1st Round: Teams = 7, Matches = 3, and 4 teams advance.
// - 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
// - 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
// Total number of matches = 3 + 2 + 1 = 6.

// var numberOfMatches = function (n) {
//   let sum = 0;
//   while (n > 1) {
//     if (n % 2 == 0) {
//       sum += n / 2;
//       n = n / 2;
//     } else {
//       sum += (n - 1) / 2;
//       n = (n - 1) / 2 + 1;
//     }
//   }
//   return sum;
// };
// console.log(numberOfMatches(7));

// ===

// function parenthesiss(str) {
//   let stack = [],
//     maxDepth = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "(") stack.push(str[i]);
//     if (str[i] === ")") stack.pop();
//     maxDepth = Math.max(maxDepth, stack.length);
//   }
//   console.log(stack);
//   return maxDepth - stack.length;
// }
// console.log(parenthesiss("(((((1)+((2))+(((3))))))))"));
// console.log(parenthesiss("(1)+((2))"));
// console.log(parenthesiss("(((1)+(((2))+(((3)))))"));
