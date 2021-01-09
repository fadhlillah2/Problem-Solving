//!CARI ANGKA PALING BANYAK MUNCUL
var majorityElement = function (nums) {
  var count = 1;
  var maj;
  maj = nums[0];
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] == maj) {
      count++;
    } else if (count > 0) {
      count--;
    } else if (count === 0) {
      maj = nums[i];
      count = 1;
    }
  }
  return maj;
};

console.log(majorityElement([2, 2, 2, 1, 1, 2, 2]));
