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




  
  var isPalindromeNumber = function(x) {
    
  };
  console.log(isPalindromeNumber(121))





  var buildArray = function(nums) {
    let ans = [];
    for(let i = 0; i<nums.length; i++){
        
           ans.push(nums[nums[i]]) 
        
    }
    return ans;
};
console.log(buildArray([1,3,2,5,4]))



var truncateSentence = function(s, k) {
  let arr = s.split(" "), newArr = [];
  for(let i=0; i<k; i++){
      newArr.push(arr[i]);
  }
   return newArr.join(' ')
};
console.log(truncateSentence("hello world this is monday"))


let a= "123456"

console.log("2".charCodeAt() + "1".charCodeAt())
