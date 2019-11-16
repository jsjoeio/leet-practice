/**
 * @description 1-input logic gates
 */
type OneInputGate = 'YES' | 'NOT';

/**
 * @description 2-input logic gates
 */
type TwoInputGate = 'AND' | 'OR' | 'XOR' | 'NAND' | 'NOR' | 'XNOR';

/**
 * @description all logic gates
 */
type Gate = OneInputGate | TwoInputGate;

/**
 * @description the binary output of the logic gate. 0 is false and 1 is true.
 */
type Output = 0 | 1;

type Input = 0 | 1;

// TODO - use this table: https://www.researchgate.net/figure/Summary-of-the-common-Boolean-logic-gates-with-symbols-and-truth-tables_fig3_291418819

function logicGate(gate: OneInputGate, inputA: Input): Output;
function logicGate(gate: TwoInputGate, inputA: Input, inputB: Input): Output;
function logicGate(gate: Gate, inputA: Input, inputB?: Input): Output {
  // If we don't have inputB, then we know it's a OneInputGate
  if (typeof inputB === 'undefined') {
    switch (gate) {
      case 'YES':
        // This logic gate returns the same input as output
        return inputA;
      case 'NOT':
        // Return the oppositive of what we get
        return inputA ? 0 : 1;
      default:
        throw new Error('Invalid logic gate');
    }
  }

  switch (gate) {
    case 'AND':
      // Both inputs must be true to return 1
      return inputA && inputB ? 1 : 0;
    case 'OR':
      // Either input should be true to return 1
      return inputA || inputB ? 1 : 0;
    case 'XOR':
      // Check that they are not the same and return 1
      // (mutually exclusive) they can never be the same.
      return inputA !== inputB ? 1 : 0;
    case 'NAND':
      // The negation of "and"
      // Demorgan's Law
      return !(inputA && inputB) ? 1 : 0;
    case 'NOR':
      // The negation of "or"
      // do the logic checking
      return !(inputA || inputB) ? 1 : 0;
    case 'XNOR':
      // Are they equal inputs? Then return 1
      return inputA === inputB ? 1 : 0;
    default:
      throw new Error('Invalid logic gate');
  }
}

export { logicGate };
