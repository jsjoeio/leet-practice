/**
 * @param target the value you are looking for
 * @param items the list of items in which you're looking
 * @returns the index of the target item if it exists. Otherwise, returns -1
 */
export function indexOf<TypeOfValue>(
  target: TypeOfValue,
  items: TypeOfValue[]
) {
  // left most value (index of value)
  let min = 0;
  // right most value (index of value)
  let max = items.length - 1;
  let currentIndex;
  let count = items.length;

  while (count > 0) {
    currentIndex = Math.round((min + max) / 2);
    const currentValue = items[currentIndex];
    // Check if we found the target
    if (currentValue === target) {
      return currentIndex;
    } else if (currentValue < target) {
      // shift right
      min = currentIndex;
    } else {
      // shift left
      max = currentIndex;
    }
    count -= 1;
  }
  return -1;
}
