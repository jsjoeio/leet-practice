import { search } from '.';

describe('search function', () => {
  it('returns -1 if the item does not exist in the array', () => {
    const target = 0;
    const items = [1, 2, 3];
    const actual = search<number>(items, target);
    const expected = -1;
    expect(actual).toBe(expected);
  });
  it('returns the index in a small group of items', () => {
    const target = 6;
    const items = [1, 3, 6];
    const actual = search<number>(items, target);
    const expected = 2;
    expect(actual).toBe(expected);
  });
  it('returns the index in a medium group of items', () => {
    const target = 6;
    const items = [1, 3, 6, 7, 9, 14, 18, 21];
    const actual = search<number>(items, target);
    const expected = 2;
    expect(actual).toBe(expected);
  });
  it('returns the index in a larger group of items', () => {
    const target = 9;
    const items = [1, 3, 6, 7, 9, 14, 18, 21];
    const actual = search<number>(items, target);
    const expected = 4;
    expect(actual).toBe(expected);
  });
  it('returns the index in a group of two items', () => {
    const target = 2;
    const items = [2, 5];
    const actual = search<number>(items, target);
    const expected = 0;
    expect(actual).toBe(expected);
  });
});
