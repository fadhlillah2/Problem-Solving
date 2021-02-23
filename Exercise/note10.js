// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

// var balancedStringSplit = function (s) {
//     const charge = { L: -1, R: 1 };
//     let sum = 0,
//       c = 0;
//     for (let i = 0; i < s.length; i++) {
//       sum += charge[s[i]];
//       //untuk menentukan apakah elemen s bernilai 1 atau -1
//       if (sum == 0) c++;
//     }
//     return c;
//   };
//intinya disini huruf L bernilai -1 dan huruf R brnnilai +1 sehingga apabila menghalikan nilai 0 instruksikan komputer
//untuk mengeluarkan output increment (penjumlahan).
//contohnya sebagai berikut "RL"= +1 -1 = 0 maka terhitung 1 dan begitu seterusnya
//   console.log(balancedStringSplit("RLRRLLRLRL"));

//! #1 =========================================================================================

// input:  num1 [6,8,13,0,0] m=3;   num2 [2,5,6] n=3
// output:    [2,5,6,6,8,13]

//! 1
// function magic(num1, m, num2, n) {
//   const num3 = num1.concat(num2),
//     arr = [];
//   for (let i = 0; i < num3.length; i++) {
//     if (num3[i] !== 0) arr.push(num3[i]);
//   }
//   return arr.sort((a, b) => a - b);
// }
// console.log(magic([6, 0, 8, 13, 0, 0], 3, [2, 5, 0, 0, 0, 5, 6], 3));

//! #2 =========================================================================================
//! #3 =========================================================================================
//! #4 =========================================================================================
//! #5 =========================================================================================
