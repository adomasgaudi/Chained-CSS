export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return `is the the real life ${a + b};`;
};
