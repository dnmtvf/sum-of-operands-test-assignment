import getRandInt from './helpers/getRandInt';

const getNewExerсize = (numARange = [6, 9], sumRange = [11, 14]) => {
  const numA = getRandInt(...numARange);
  const sum = getRandInt(...sumRange);
  const numB = sum - numA;
  return { operands: [numA, numB], sum };
};

export default getNewExerсize;
