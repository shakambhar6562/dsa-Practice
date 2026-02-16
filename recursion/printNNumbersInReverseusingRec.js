const printNumbersNinReverseOrder = (n) => {
  if (n <= 0) return 1;
  printNumbersNinReverseOrder(n - 1);
  console.log(n);
};

export default printNumbersNinReverseOrder;

