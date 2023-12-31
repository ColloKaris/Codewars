/**
 *  Count the number of divisors of a positive integer n.
    Random tests go up to n = 500000.
 */

export function divisors(n: number) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) count++;
  }
  return count;
}

const result = divisors(64)
console.log(result);