const sumOfDigits = (num) => {
  if (num === 0) {
    return 0;
  }
  const remainder = num % 10;
  const nums = Math.floor(num / 10);

  return sumOfDigits(nums) + remainder;
};

export default sumOfDigits;
