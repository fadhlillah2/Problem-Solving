//!Reverse Words in a string
var reverseWords = function (s) {
  res = s.split(" ");
  console.log(res);
  res = res.map((e) => e.split("").reverse().join(""));

  return res.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
