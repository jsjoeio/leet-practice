import { happyNumber } from '.';

describe('happyNumber function', () => {
  it('should return true for 7', () => {
    const input = 7;
    const expected = true;
    const actual = happyNumber(input);
    expect(actual).toBe(expected);
  });
  it('should return false for 4', () => {
    const input = 4;
    const expected = false;
    const actual = happyNumber(input);
    expect(actual).toBe(expected);
  });
});
