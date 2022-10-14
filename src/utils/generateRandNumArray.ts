export const generateRandNumArray = (count: number, max: number = 100) => {
  const randArray = [];

  while (randArray.length < count) {
    const random = Math.floor(Math.random() * max);
    if (randArray.indexOf(random) === -1) {
      randArray.push(random);
    }
  }
  return randArray;
};
