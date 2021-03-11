var countConsistentStrings = function (allowed, words) {
  let c = 0;

  for (val of words) {
    let ok = true;
    for (let i = 0; i < val.length; i++) {
      if (!allowed.includes(val[i])) ok = false;
    }
    if (ok) c++;
  }

  return c;
};
console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));

//! ==================================================================================

var subtractProductAndSum = function (n) {
  let sum = 0,
    product = 1;
  while (n) {
    num = n % 10;
    sum += num;
    product *= num;
    n = Math.floor(n / 10);
  }
  return product - sum;
};
console.log(subtractProductAndSum(234));
