//!Sum Odd Fibonacci Number

function sumFibs(num) {
  let a = 1,
    b = 1,
    c = [1, 1],
    i = 0;

  while (i < num - 2) {
    [a, b] = [b, a + b];
    c.push(b);
    i++;
  }

  return c.filter((e) => e % 2 == 1 && e <= num).reduce((e, a) => e + a);
}

console.log(sumFibs(4)); //5
