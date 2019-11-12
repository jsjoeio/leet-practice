import { indexOf } from '.';

describe('indexOf function', () => {
  it('returns -1 if the item does not exist in the array', () => {
    const target = 0;
    const items = [1, 2, 3];
    const actual = indexOf<number>(target, items);
    const expected = -1;
    expect(actual).toBe(expected);
  });
  it('returns the index in a small group of items', () => {
    const target = 6;
    const items = [1, 3, 6];
    const actual = indexOf<number>(target, items);
    const expected = 2;
    expect(actual).toBe(expected);
  });
  it('returns the index in a medium group of items', () => {
    const target = 6;
    const items = [1, 3, 6, 7, 9, 14, 18, 21];
    const actual = indexOf<number>(target, items);
    const expected = 2;
    expect(actual).toBe(expected);
  });
  it('returns the index in a larger group of items', () => {
    const target = 9;
    const items = [1, 3, 6, 7, 9, 14, 18, 21];
    const actual = indexOf<number>(target, items);
    const expected = 4;
    expect(actual).toBe(expected);
  });
});
