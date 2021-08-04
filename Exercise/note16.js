function twoSum (arr, target) {
    let idx = [];
    for(let i = arr.length-1; i >= 0; i--){
        if(target > arr[i]){
            arr.indexOf(target - arr[i]) === -1 ? true : idx.push(arr.indexOf(target - arr[i]))
         } 
        
    } 
   return idx;

    
}
console.log(twoSum([2,7,11,15],18))
console.log("==================================  1  =========================================")


var findTheDifference = function(s, t) {
    let sum1 = 0;
    for (let i = 0; i < s.length; i++) {
      sum1 += s[i].charCodeAt();
    }
    
    let sum2 = 0;
    for (let i = 0; i < t.length; i++) {
      sum2 += t[i].charCodeAt();
    }
    
    return String.fromCharCode(sum2-sum1);
  };
  console.log(findTheDifference('abcd','abcde'))
  console.log("==================================  2  =========================================")



  
  var isPalindromeNumber = function(x) {
    
  };
  console.log(isPalindromeNumber(121))
  console.log("==================================  3  =========================================")




  var buildArray = function(nums) {
    let ans = [];
    for(let i = 0; i<nums.length; i++){
        
           ans.push(nums[nums[i]]) 
        
    }
    return ans;
};
console.log(buildArray([1,3,2,5,4]))
console.log("==================================  4  =========================================")


var truncateSentence = function(s, k) {
  let arr = s.split(" "), newArr = [];
  for(let i=0; i<k; i++){
      newArr.push(arr[i]);
  }
   return newArr.join(' ')
};
console.log(truncateSentence("hello world this is monday"))
console.log("==================================  5  =========================================")

let a= "123456"

console.log("2".charCodeAt() + "1".charCodeAt())
console.log("==================================  6  =========================================")



var reverseVowels = function(s) {
  let i = 0;
  let j = s.length-1; 
 
  const vowel = new Set(['a','i','u','e','o']); 
  str = s.split(''); 
  while(i <= j){
      let iIsV = vowel.has(str[i].toLowerCase());
      let jIsV = vowel.has(str[j].toLowerCase());
      
      if(iIsV && jIsV){
          let tmp = str[i];
          str[i] = str[j];
          str[j] = tmp;
          i++;
          j--
      } 
      if(!iIsV) i++;
      if(!jIsV) j--;
      }
      return str.join('');
  
};
console.log(reverseVowels("hello"))
console.log("==================================  7  =========================================")



var maxSubArray = function(nums) {
  let max = nums[0];
  let current = Math.max(max, 0)
  for(let i = 1; i<nums.length; i++){
      current += nums[i];
      max = Math.max(max, current);
      current = Math.max(current, 0)
  }
  return max;
};
console.log(maxSubArray([1,2,-3,4,3,-4,3]))
console.log("==================================  8  =========================================")



var singleNumber = function(nums) {
  let hash = {}
  for(let val of nums){
      hash[val]?delete hash[val]:hash[val]=1;
  }
  console.log("hash,", hash)
  return Object.keys(hash)[0]
};

console.log(singleNumber([1,2,2,2,2,1,3,4]))
console.log("==================================  9  =========================================")


/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
  return s.trim().split(" ").pop().length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log("==================================  10  =========================================")


