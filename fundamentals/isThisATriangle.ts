/**
 * Implement a function that accepts 3 integer values a, b, c.
 * The function should return true if a triangle can be built with the sides of given length and false in any other case.
 */

/**
 * Solution uses the  triangle inequality theorem which states that
 * for any triangle, the sum of the lengths of any two sides must be greater than
 *  or equal to the length of the remaining side.
 */

// probable bug because Codewars test fail when you use >= insted of >

export function isTriangle(a: number, b: number, c: number): boolean {
  if((a+b) > c && (a+c) > b && (b+c) > a) return true;
  return false;
}

// let result = isTriangle(1,8,7)
// console.log(result);