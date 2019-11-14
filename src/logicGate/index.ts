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
  if (!inputB) {
    switch (gate) {
      case 'YES': {
        // do the logic checking
      }
      case 'NOT': {
        // do the logic checking
      }
      default:
        throw new Error('Invalid logic gate');
    }
  }

  switch (gate) {
    case 'AND': {
      // do the logic checking
    }
    case 'OR': {
      // do the logic checking
    }
    case 'XOR': {
      // do the logic checking
    }
    case 'NAND': {
      // do the logic checking
    }
    case 'NOR': {
      // do the logic checking
    }
    case 'XNOR': {
      // do the logic checking
    }
    default:
      throw new Error('Invalid logic gate');
  }
}

export { logicGate };
