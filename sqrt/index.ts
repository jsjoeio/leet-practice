const INCREMENT = 0.3;
/**
 * @param {number} x
 * @return {number}
 */
export function mySqrt(x: number) {
  // also called min
  let left = 0;
  // also called max
  let right = x - INCREMENT;
  // We'll start at 0
  let count = 0;
  let bestGuess = x / 2.0;

  function calculateSqRoot(num: number, guess: number) {
    // Divide the num by our guess
    const divided = num / guess;

    // Get the average after adding the divided + our guess
    const average = (divided + guess) / 2.0;

    if (average === guess) {
      // The new guess is the best we got.
      bestGuess = guess;
      return;
    }
    // Otherwise, keep going
    calculateSqRoot(x, average);
  }
  // Init recursive function
  calculateSqRoot(x, bestGuess);
  return Math.abs(Math.floor(bestGuess));
}
