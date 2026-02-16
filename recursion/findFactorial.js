const factorialOfNNumber = (number) => {
  if (number <= 0) {
    return 1;
  }
  if (number === 1) {
    return 1;
  }

  return number * factorialOfNNumber(number - 1);
};

export default factorialOfNNumber;
