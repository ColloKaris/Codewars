// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

export function sameCase(a: string, b: string): number {
  const unicodeA = a.codePointAt(0)!;
  const unicodeB = b.codePointAt(0)!;

  // Both Uppercase
  if ((unicodeA > 64 && unicodeA < 91) && (unicodeB > 64 && unicodeB < 91))  {
    return 1;
  }
  // Both Lowercase
  if ((unicodeA > 96 && unicodeA < 123) && (unicodeB > 96 && unicodeB < 123)) {
    return 1;
  }
  // Both letters but not same case
  if (
    ((unicodeA > 64 && unicodeA < 91) || (unicodeA > 96 && unicodeA < 123)) &&
    ((unicodeB > 64 && unicodeB < 91) || (unicodeB > 96 && unicodeB < 123))
  ) {
    return 0;
  } else { // Either of the characters is not a letter
    return -1;
  }
}

const result = sameCase('H', ':');
console.log(result);
