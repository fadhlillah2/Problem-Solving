// Example 1:
// Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
// Output: 4
// Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].

// Example 2:
// Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
// Output: 0
// Explanation: No triplet satisfies all conditions.

// var countGoodTriplets = function (arr, a, b, c) {
//     let res = 0;
//     const { abs } = Math;
//     console.log(abs);
//     for (let i = 0; i < arr.length; i++)
//       for (let j = i + 1; j < arr.length; j++)
//         for (let k = j + 1; k < arr.length; k++)
//           if (
//             abs(arr[i] - arr[j]) <= a &&
//             abs(arr[j] - arr[k]) <= b &&
//             abs(arr[i] - arr[k]) <= c
//           )
//             res++;
//     return res;
//   };
//   console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));

//!==========================================================================================1
