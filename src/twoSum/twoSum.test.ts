import { twoSum } from '.';

describe('twoSum function', () => {
  it('should work with an array with 4 numbers', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];
    const actual = twoSum(nums, target);
    expect(actual).toEqual(expected);
  });
  it('should not work with an empty array', () => {
    const nums: number[] = [];
    const target = 9;
    const expected = false;
    const actual = twoSum(nums, target);
    expect(actual).toBe(expected);
  });
  it('should work with an array with 3 numbers', () => {
    const nums = [1, 2, 3];
    const target = 4;
    const expected = [0, 2];
    const actual = twoSum(nums, target);
    expect(actual).toEqual(expected);
  });
  it('should not work with an array with 1 numbers', () => {
    const nums = [0];
    const target = 9;
    const expected = false;
    const actual = twoSum(nums, target);
    expect(actual).toBe(expected);
  });
});
