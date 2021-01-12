// !Return the lowest index at which a value (second argument) should be inserted
//!into an array (first argument) once it has been sorted.

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var times = arr.length; // runs the for loop once for each thing in the array
  var count = 0;
  for (var i = 0; i < times; i++) {
    if (num > arr[i]) {
      count++;
    }
  } // counts how many array numbers are smaller than num
  return count; // the above equals num's position in a sorted array
}

getIndexToIns([40, 60], 50);
