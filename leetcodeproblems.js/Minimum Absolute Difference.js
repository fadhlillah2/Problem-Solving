function minim(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] === 0) return 0;
      if (min > Math.abs(arr[j] - arr[i])) min = Math.abs(arr[j] - arr[i]);
    }
  }
  return min;
}
console.log(minim([2, 5, 4, 1]));
