const arr: number[] = [-1, 0, 1, 2, -1, -4];
const target: number = -1;

const findThreePairs = (arr: number[], target: number): number[][] => {
  const ans: number[][] = [];
  const toSorted = arr.toSorted((a, b) => a - b);

  const hashMap = new Map<string, number>();

  for (let i = 0; i < toSorted.length - 2; i++) {
    const currentNum: number = toSorted[i];
    const requiredTarget: number = target - currentNum;

    let j = i + 1;
    let k = toSorted.length - 1;

    while (j < k) {
      const currentSum = toSorted[j] + toSorted[k];
      if (currentSum === requiredTarget) {
        if (!hashMap.has(`${currentNum}.${toSorted[j]}.${toSorted[k]}`)) {
          hashMap.set(`${currentNum}.${toSorted[j]}.${toSorted[k]}`, 1);
          ans.push([currentNum, toSorted[j], toSorted[k]]);
        }
        j++;
        k--;
      } else if (currentSum > requiredTarget) {
        k--;
      } else if (currentSum < requiredTarget) {
        j++;
      }
    }
  }

  return ans;
};

console.log("these are the three pairs", findThreePairs(arr, target));

export { findThreePairs };
