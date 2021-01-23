// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

var largestAltitude = function (gain) {
  let num = 0;
  let box = [];
  for (let i = 0; i < gain.length; i++) {
    num += gain[i];
    box.push(num);
  }
  let result = [0].concat(box);
  return Math.max(...result);
};
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
