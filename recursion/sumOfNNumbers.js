const sumOfNumbers = (number) => {
  if (number < 0) {
    return 0;
  } else if (number >= 0 && number <= 1) {
    return number;
  }

  return number + sumOfNumbers(number - 1);
};

export default sumOfNumbers;
