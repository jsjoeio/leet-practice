import { indexOf } from '.';

describe('indexOf function', () => {
  it('returns -1 if the item does not exist in the array', () => {
    const target = 0;
    const items = [1, 2, 3];
    const actual = indexOf<number>(target, items);
    const expected = -1;
    expect(actual).toBe(expected);
  });
});
