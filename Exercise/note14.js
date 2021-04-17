//! 1
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

//! 3
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
