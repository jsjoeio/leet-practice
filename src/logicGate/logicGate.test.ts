import { logicGate } from '.';

describe('logicGate function', () => {
  it('handles the YES gate', () => {
    const actual = logicGate('YES', 1);
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it('handles the NOT gate', () => {
    const actual = logicGate('NOT', 1);
    const expected = 0;
    expect(actual).toBe(expected);
  });
  it('handles the AND gate', () => {
    const actual = logicGate('AND', 1, 1);
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it('handles the NAND gate', () => {
    const actual = logicGate('NAND', 1, 0);
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it('handles the NOR gate', () => {
    const actual = logicGate('NOR', 0, 0);
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it('handles the OR gate', () => {
    const actual = logicGate('OR', 1, 1);
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it('handles the XOR gate', () => {
    const actual = logicGate('XOR', 1, 0);
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it('handles the XNOR gate', () => {
    const actual = logicGate('XNOR', 1, 1);
    const expected = 1;
    expect(actual).toBe(expected);
  });
});
