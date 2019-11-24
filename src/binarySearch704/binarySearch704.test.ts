import { binarySearch704 } from '.';

describe('binarySearch704 function', () => {
  it('should do the first one', () => {
    const input = [-1, 0, 3, 5, 9, 12];
    const target = 9;
    const expected = 4;
    const actual = binarySearch704(input, target);
    expect(actual).toBe(expected);
  });

  it('should return -1 if it does not exist', () => {
    const input = [-1, 0, 3, 5, 9, 12];
    const target = 2;
    const expected = -1;
    const actual = binarySearch704(input, target);
    expect(actual).toBe(expected);
  });
});
