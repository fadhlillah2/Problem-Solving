// // Input: nums = [2,7,11,15], target = 9
// // Output: [0,1]
// // Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// var twoSum = function (nums, target) {
//   var map = {};
//   for (var i = 0; i < nums.length; i++) {
//     var n = nums[i];
//     if (map[target - n] !== undefined) {
//       //jika map[target - n] terdefinisi atau ditemukan. Dari sini kita tahu bahwa utk mentakan sebuah
//       //pernyataan  yg terdefinisi komputer hanya mengerti menggunakan syntax if(expression !== undefined)
//       //bukan defined.
//       return [map[target - n], i];
//       //maka tampilkan sebuah arr berisi [map[target - n], i]
//     } else {
//       map[n] = i;
//       console.log(map[n]);
//       //jika tidak maka d belakang layar tetap berjalan sebuah assignment
//       //terhadap tiap2 key dari map(map={})
//     }
//   }
//   console.error("No two sum solution");
// };

// console.log(twoSum([2, 11, 7, 15], 9));

//=======================================================================================================

// function fizzBuzz2(n) {

//     let str = [];
//     for (let i = 1; i <= n; i++) {
//       if (i % 3 === 0 && i % 5 === 0) str.push("FizzBUzz");
//       else if (i % 3 === 0) str.push("fizz");
//       else if (i % 5 === 0) str.push("buzz");
//       else str.push(i);
//     }

//     return str;
//   }

//   console.log(fizzBuzz2(15));

//=====================================================================================================

// var inverseString = function (param) {
//   var l = param.length - 1,
//     i = 0,
//     param = param.split("");
//   while (i < l) {
//     temp = param[l];
//     param[i] = param[l];
//     param[l] = temp;
//     i++;
//     l--;
//   }
//   return param;
// };
// console.log(inverseString("abcd")); //??????????? masih perlu revisi

// ========================================================================================================

// function confirmEnding(str, target) {
//   for (
//     let i = str.length - 1, j = target.length - 1;
//     i >= 0, j >= 0;
//     i--, j--
//   ) {
//     if (str[i] !== target[j]) return false;
//   }
//   return true;
//   //Jadi intinya adalah fokus inisiasi pd bagian (huruf) ujung2 str dan target tsb. jika menemukan
//   //str[i] !== target[j] maka akan lgsng direturn false.
// }
// console.log(confirmEnding("cobakan", "akan"));

//===========================================================================================================
