type NumberAsStringOrStrings = string | string[];

export function happyNumber(num: number) {
  // Keep track of happiness
  let isHappy = false;
  const foundNumbers: { [key in number]: number } = {};

  // Use a recursive function to go through the numbers
  function helper(num: number) {
    // Base case #1 result = 1
    if (num === 1) {
      isHappy = true;
      return;
    }

    // Base case #2 "Have we seen this number before?"
    if (foundNumbers[num]) {
      return;
    }
    // Otherwise, store our number in the hashmap
    foundNumbers[num] = 1;

    let result = 0;
    let numAsString: NumberAsStringOrStrings = String(num);

    // Split number if more than one number
    if (numAsString.length > 1) {
      numAsString = numAsString.split('');
      // Loop over each number
      // Square to power of 2 and add to result
      numAsString.forEach((n: string) => (result += Math.pow(Number(n), 2)));
    } else {
      // Otherwise, if single digit, just square
      result += Math.pow(Number(numAsString), 2);
    }

    helper(result);
  }

  // Initialize our recursive function
  helper(num);

  return isHappy;
}

export function happyNumberIterative(num: number) {
  // Keep track of happiness
  let isHappy = false;
  const foundNumbers: { [key in number]: number } = {};
  let result = 0;
  let currentNum = num;

  // Check if currentNum === 1
  while (true) {
    // Base case #1 result = 1
    if (currentNum === 1) {
      isHappy = true;
      break;
    }
    // Base case #2 "Have we seen this number before?"
    if (foundNumbers[currentNum]) {
      break;
    }
    // Store currentNum
    foundNumbers[currentNum] = 1;
    // Reset result
    result = 0;

    let numAsString: NumberAsStringOrStrings = String(currentNum);

    // Split number if more than one number
    if (numAsString.length > 1) {
      numAsString = numAsString.split('');
      // Loop over each number
      // Square to power of 2 and add to result
      numAsString.forEach((n: string) => (result += Math.pow(Number(n), 2)));
    } else {
      // Otherwise, if single digit, just square
      result += Math.pow(Number(numAsString), 2);
    }
    // Store that number as currentNum
    currentNum = result;
  }

  return isHappy;
}

happyNumberIterative(4);
