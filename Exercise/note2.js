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
