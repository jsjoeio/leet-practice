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
  it('should return 3', () => {
    const input = 9;
    const expected = 3;
    const actual = mySqrt(input);
    expect(actual).toBe(expected);
  });
  it('should return 4', () => {
    const input = 16;
    const expected = 4;
    const actual = mySqrt(input);
    expect(actual).toBe(expected);
  });
  it('should return 46339', () => {
    const input = 2147395599;
    const expected = 46339;
    const actual = mySqrt(input);
    expect(actual).toBe(expected);
  });
  it('should return 46340', () => {
    const input = 2147395600;
    const expected = 46340;
    const actual = mySqrt(input);
    expect(actual).toBe(expected);
  });
});
