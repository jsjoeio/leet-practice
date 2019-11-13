/**
 * @param {number} x
 * @return {number}
 */
export function mySqrt(x: number) {
  let result = 0;

  // The square root of 0 and 1 is equal to itself
  if (x === 0 || x === 1) {
    return x;
  }

  let left = 0;
  let right = x;

  while (left <= right) {
    // Grab the number in the midle
    let middle = (left + right) / 2;

    // Round down
    let middleSquared = Math.floor(middle * middle);
    if (middleSquared === x) {
      return Math.floor(middle);
    }

    if (middleSquared < x) {
      left = middle + 0.0001;
      result = middle;
    } else {
      right = middle - 0.0001;
    }
  }

  return Math.abs(Math.floor(result));
}
