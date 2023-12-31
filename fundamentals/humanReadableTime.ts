/**
 * Write a function, which takes a non-negative integer (seconds)
 * as input and returns the time in a human-readable format (HH:MM:SS)
  HH = hours, padded to 2 digits, range: 00 - 99
  MM = minutes, padded to 2 digits, range: 00 - 59
  SS = seconds, padded to 2 digits, range: 00 - 59
  The maximum time never exceeds 359999 (99:59:59)
 */

export function humanReadable(seconds: number): string {
  const hrs = Math.trunc(seconds / 3600)
    .toString()
    .padStart(2, '0');
  const mins = Math.trunc((seconds % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const secs = ((seconds % 3600) % 60).toString().padStart(2, '0');
  return `${hrs}:${mins}:${secs}`
}
