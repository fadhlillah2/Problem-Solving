// //! Reverse String

// function reverseString(kata) {
//   var wadah = "";
//   for (var i = kata.length - 1; i >= 0; i--) {
//     wadah += kata[i];
//   }
//   return wadah;
// }
// console.log(reverseString("salah"));

// //!Reverse Integer dalam array
// var wadah = [1, 2, 3, 4];
// function reverseInt() {
//   var kotak = [];
//   for (let i = wadah.length - 1; i >= 0; i--) {
//     kotak.push(wadah[i]);
//   }
//   return kotak;
// }
// console.log(reverseInt());

//!Reverse Integer
// const reverse = function (x) {
//   let revNum = 0,
//     lastDigit = 0;
//   while (x !== 0) {
//     lastDigit = x % 10;
//     x = parseInt(x / 10);
//     revNum = revNum * 10 + lastDigit;
//     if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) return 0;
//   }
//   return revNum;
// };
// console.log(reverse(125000));

//=====================================================================================

//!Square root func
// var sqrt = function (x) {
//   var isGoodEnough = function (guess) {
//     return Math.abs(guess * guess - x) / x < 0.001;
//   };

//   var improve = function (guess) {
//     return (guess + x / guess) / 2;
//   };

//   var sqrIter = function (guess) {
//     return isGoodEnough(guess) ? guess : sqrIter(improve(guess));
//   };

//   return sqrIter(1.0);
// };

// console.log(Math.sqrt(2), sqrt(2));
