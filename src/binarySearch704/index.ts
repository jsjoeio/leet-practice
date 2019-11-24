/*
    1. You may assume that all elements in nums are unique.
    2. n will be in the range [1, 10000].
    3. The value of each element in nums will be in the range [-9999, 9999].

*/

export function binarySearch704(nums: number[], target: number) {
  // The left most index in nums
  let low = 0;

  // The right most index in nums
  let high = nums.length - 1;

  while (true) {
    // Our best guess
    // Avoid integer overflow
    // We use Math.floor to make sure we get an integer
    // We are computing the half-way distance between high and low
    // I is master craft.
    let mid = Math.floor(low + (high - low) / 2);
    // Do the processing
    // base case #1: we found the target
    // mid is in index, so we evaulate the number
    if (nums[mid] === target) {
      return mid;
    }
    // base case #2: we're out of numbers, so it doesn't exist
    if (high <= low) {
      return -1;
    }

    // Modify the range
    if (nums[mid] > target) {
      // We're too high, search in the lower half
      // We also know it's not mid, so we minus 1
      high = mid - 1;
    } else if (nums[mid] < target) {
      // We're too low, search in the higher half
      // We also know it's not mid, so we minus 1
      low = mid + 1;
    }
  }
}
