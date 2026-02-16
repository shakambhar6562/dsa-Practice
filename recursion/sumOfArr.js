const sumOfArr = (arr, idx = 0, res = 0) => {
  if (idx === arr.length) {
    return res;
  }
  return sumOfArr(arr, idx + 1, res + arr[idx]);
};

export default sumOfArr;

