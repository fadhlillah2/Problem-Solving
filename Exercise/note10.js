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
