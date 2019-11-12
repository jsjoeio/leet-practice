import { mySqrt } from './';

describe('mySqrt function', () => {
  it('should return an integer', () => {
    const input = 4;
    const expected = 2;
    const actual = mySqrt(input);
    expect(actual).toBe(expected);
  });
  it('should return a integer, not a decimal', () => {
    const input = 8;
    const expected = 2;
    const actual = mySqrt(input);
    expect(actual).toBe(expected);
  });
});
