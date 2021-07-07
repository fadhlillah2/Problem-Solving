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