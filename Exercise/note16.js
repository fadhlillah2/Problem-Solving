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