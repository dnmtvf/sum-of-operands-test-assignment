import getRandInt from './getRandInt';

const getNewExerсize = (operandARange = [6, 9], sumRange = [11, 14]) => {
  const operandA = getRandInt(...operandARange);
  const sum = getRandInt(...sumRange);
  const operandB = sum - operandA;
  return { operands: [operandA, operandB], sum };
};

export default getNewExerсize;
