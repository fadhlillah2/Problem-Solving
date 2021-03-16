var countConsistentStrings = function (allowed, words) {
  let c = 0;

  for (val of words) {
    let ok = true;
    for (let i = 0; i < val.length; i++) {
      if (!allowed.includes(val[i])) ok = false;
    }
    if (ok) c++;
  }

  return c;
};
console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));

//! #1==================================================================================

var subtractProductAndSum = function (n) {
  let sum = 0,
    product = 1;
  while (n) {
    num = n % 10;
    sum += num;
    product *= num;
    n = Math.floor(n / 10);
  }
  return product - sum;
};
console.log(subtractProductAndSum(234));

//! #2 ==================================================================================

// var intersect = function (num1, num2) {
//   const map = new Map();
//   console.log(map);
//   for (const n of num1) {
//     if (map.has(n)) {
//       map.set(n, map.get(n) + 1);
//     } else {
//       map.set(n, 1);
//     }
//   }
//   console.log(map);
//   const result = [];
//   for (const n of num2) {
//     if (map.has(n) && map.get(n) > 0) {
//       result.push(n);
//       map.set(n, map.get(n) - 1);
//     }
//   }
//   console.log(map);
//   return result;
// };
// console.log(intersect([1, 2, 1, 2, 3, 5, 2, 5, 1], [1, 2, 1]));

//! #3 ==================================================================================

//! 1
// var numJewelsInStones = function (jewels, stones) {
//   let c = 0;
//   for (let i = 0; i < stones.length; i++) {
//     for (let j = 0; j < jewels.length; j++) {
//       if (stones[i] === jewels[j]) c++;
//     }
//   }
//   return c;
// };
// console.log(numJewelsInStones("aA", "aAAbbbb"));

//! 2
// const numJewelsInStones = (J, S) => {
//   const jewels = new Set(J);

//   console.log(jewels.has("A"));
//   return S.split("").reduce((res, s) => res + jewels.has(s), 0);
// };
// console.log(numJewelsInStones("aA", "aAAbbbb"));

//! #4 ==================================================================================
//! #5 ==================================================================================
