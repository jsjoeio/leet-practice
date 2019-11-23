export function twoSum(nums: number[], target: number) {
  // Write the function body here
  // We want to search the array for two numbers that add up to equal the target

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
