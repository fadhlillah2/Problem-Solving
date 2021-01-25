// Input:
// [4,3,2,7,8,2,3,1]
// Output:
// [5,6]

// var findDisappearedNumbers = function (nums) {
//cara ini tidak efektif karena memberikan komputer kerja yang lebih berat
//   var res = [];
//   for (var i = 1; i < nums.length + 1; i++) {
//     if (nums.indexOf(i) === -1) res.push(i);
//dicek setiap index el pd arr nums apabila tidak ada maka push kedalam res(array kosong)
//   }
//   return res;
// };

// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1, 10]));

//=================================================================================================

// Input:
// [4,3,2,7,8,2,3,1]
// Output:
// [2,3]

// var findDuplicates = function (nums) {
//   let m = new Map(),
//     res = [];
//   nums.forEach((x) => {
//     if (!m.has(x)) m.set(x, 1);
//method has() mengembalikan nilai true atau false
//     else res.push(x);
//arr res diisi oleh el bernilai x
//   });
//   return res;
// };

// console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));

//=================================================================================================

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2]

var removeElement = function (nums, val) {
  let length = nums.length;
  let i = 0;
  while (i < length) {
    if (nums[i] === val) {
      //kalo el yg ada pd arr = val(target yang ingin dihilangkan maka eksekusi code dibawah ini)
      nums.splice(i, 1);
      length--;
      //seiring dengan array nums yang di remove menggunakan splice juga berjalan length-- yg berarti terjadi
      //pengurangan terhadap jumlah elemen yang ada di dalam array tersebut.
    } else {
      i++;
      //lakukan terus perulanngan terhadap i
    }
  }
  return length;
};
console.log(removeElement([3, 2, 2, 3], 3));
