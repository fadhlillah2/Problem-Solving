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
