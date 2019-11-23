export function twoSum(nums: number[], target: number) {
  // If there are no numbers in nums, we return false
  if (nums.length < 2) return false;

  // Loop through nums
  for (let i = 0; i < nums.length; i++) {
    // Start with the current number
    const currentNumber = i;

    for (let j = i + 1; j < nums.length; j++) {
      // Check if current index + next index === target
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return false;
}

/*
  Worst case scenario - O(n^2) because we have to loop through all the nums twice
  We have to check every permutation.
*/

export function twoSumFaster(nums: number[], target: number) {
  // If there are no numbers in nums, we return false
  if (nums.length < 2) return false;

  // Keep track of the numbers we have seen
  // We use a Map, so that we don't have to coerce the numbers into strings to use as keys in the object
  let seenNumbers = new Map();

  // Don't store currentNumber (because the array contains them, we'd be duplicating them)
  // store the difference between the target - currentNumber
  // index makes it happen
  // key: number, value: index

  // [1, 2, 3]
  // target = 4
  // key = 4-1 => 0

  /*
  {
    // if you see 3, the complement is located at index 0
    3: 0
  }
  */

  // Loop through nums
  for (let i = 0; i < nums.length; i++) {
    // The number that would complement the number to equal the target

    // [1, 2, 3]
    // i = 0
    // nums[i] = 1
    // complement = 3
    // seenNumbers = { 3: 0 }

    // Check if the complement is not in our seenNumbers
    if (seenNumbers.has(nums[i])) {
      // We found it! :100:
      return [seenNumbers.get(nums[i]), i];
    } else {
      const complement = target - nums[i];
      // Store it in our seenNumbers
      seenNumbers.set(complement, i);
    }
  }
  console.log(seenNumbers);

  return false;
}

/* The loop grows based on the size of the length */
