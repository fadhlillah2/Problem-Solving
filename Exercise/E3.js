// var obj  = {};
// for(var i = 0, l = colors.length; i < l; i++) {
//     obj[colors[i]] = true;
// }
// var hash = new Hash(obj);
//Hash map
var uniqueFunction = function (nums) {
  const numCounts = {}; // hasMap

  for (x of nums) {
    if (x in numCounts) {
      numCounts[x]++;
    } else {
      numCounts[x] = 1;
    }
  }

  for (num in numCounts) {
    if (numCounts[num] === 1) return num;
  }
};
let nums = [1, 1, 2, 2, 3];
console.log(uniqueFunction(nums));

apa = [];
apa[1] = 1;
apa[2] = 2;
apa[1] = 5;
console.log(apa);
const c = 2;
c = 5;

a = 1;
b = 2;
c = 3;
ak = [a, b, c];
console.log(ak);
