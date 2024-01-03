/**
 * Complete the function that takes two integers (a, b, where a < b)
 * and return an array of all integers between the input parameters, including them.
 */

// Solution doesn't add error checking in case a > b in real programs
// error checking should be added

export function between(a: number, b: number): number[] {
  let nums:number[] = [];
  for(let i = a; i <= b; i++) {
    nums.push(i)
  }
  return nums;
}

const result = between(1,4);
console.log(result)
