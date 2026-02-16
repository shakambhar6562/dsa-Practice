const reverseAString = (str, idx = 0) => {
  if (idx === str.length) {
    return "";
  }
  return reverseAString(str, idx + 1) + str[idx];
};

export default reverseAString;
