//! Number of Students Unable to Eat Lunch
// Example 1:
// Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
// Output: 0
// Explanation:
// - Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
// - Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
// - Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
// - Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
// - Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
// - Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
// - Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
// - Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
// Hence all students are able to eat.

// Example 2:
// Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
// Output: 3

// var countStudents = function (students, sandwiches) {
//   let l = students.length;
//   for (let i = 0; i < l * l; i++) {
//     if (students[0] === sandwiches[0]) {
//       students.shift();
//       sandwiches.shift();
//     } else {
//       students.push(students.shift());
//     }
//   }
//   return students.length;
// };
// console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));

//! 1 ==================================================================================

//in: [1,2,3,4,5,6,7,8], n=4
//out: [1,5,2,6,3,7,4,8]

// function magic(arr) {
//   let a = [],
//     n = arr.length / 2;

//   for (let i = 0; i < n; i++) {
//     a.push(arr[i], arr[i + n]);
//   }
//   return a;
// }
// console.log(magic([1, 2, 3, 4, 5, 6]));

//! 2 ==================================================================================

//in: "2.2.2.2"
//out: " 2[.]2[.]2[.]2[.] "

//! 1
// function mag(str) {
//   return str.split(".").join("[.]");
// }
// console.log(mag("2.2.2.2"));

//!2;
// function mag(str) {
//   let o = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ".") o += "[.]";
//     else o += str[i];
//   }
//   return o;
// }
// console.log(mag("2.2.2.2"));

//! 3 ==================================================================================

// // Example 1:
// // Input: n = 2
// // Output: 1
// // Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// // Example 2:
// // Input: n = 3
// // Output: 2
// // Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// // Example 3:
// // Input: n = 4
// // Output: 3
// // Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// var fib = function (n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// };
// console.log(fib(7));
