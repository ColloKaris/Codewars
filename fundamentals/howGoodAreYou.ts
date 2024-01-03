/**
 * There was a test in your class and you passed it.
 * Congratulations! But you're an ambitious person.
 * You want to know if you're better than the average student in your class.
 * You receive an array with your peers' test scores. Now calculate the average and compare your score!
 * Return True if you're better, else False!
 */

export function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
  let sumPoints = yourPoints; // to initialize it and avoid add it later
  for(const value of classPoints) {
    sumPoints += value;
  }
  const average = sumPoints / (classPoints.length + 1)
  if(yourPoints > average) return true;
  return false;
}

