const decimalToBinary = (num) => {
  if (num === 0) return "";
  const rem = num % 2;
  const newNum = Math.floor(num / 2);
  return decimalToBinary(newNum) + rem;
};

export default decimalToBinary;
