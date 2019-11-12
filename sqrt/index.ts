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
  let guess = 0;
  let count = 0;

  function calculateSqRoot(num: number) {
    guess = (left + right) / 2;
    console.log({ left, right, guess, count });
    // we'll add our base case to our recursive function
    // we want to stop
    const squared = guess * guess;
    if (squared === num || count === 8) {
      return;
    } else if (squared < num) {
      // if our number is too low
      // move it more to the right
      left = left + INCREMENT;
    } else {
      right = right - INCREMENT;
    }
    count++;
    calculateSqRoot(x);
  }
  // Init recursive function
  calculateSqRoot(x);
  return Math.abs(Math.floor(guess));
}
