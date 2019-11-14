/**
 * @param nums the list of nums in which you're looking
 * @param target the value you are looking for
 * @returns the index of the target item if it exists. Otherwise, returns -1
 */
export function search<TypeOfValue>(nums: TypeOfValue[], target: TypeOfValue) {
  // left most value (index of value)
  let min = 0;
  // right most value (index of value)
  let max = nums.length - 1;
  let currentIndex;

  while (max >= min) {
    currentIndex = Math.round((min + max) / 2);
    const currentValue = nums[currentIndex];
    // Check if we found the target
    if (currentValue === target) {
      return currentIndex;
    } else if (currentValue < target) {
      // shift right
      min = min + 1;
    } else {
      // shift left
      max = max - 1;
    }
  }
  return -1;
}
