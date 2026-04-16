/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.


Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

*/
const target: number = 0;

const inputArr: number[] = [-2, 0, 1, 1, 2];

const threeSumTriplets = (arr: number[], target: number) => {
  const sortedAns = arr.toSorted((a, b) => a - b);
  if (sortedAns.length < 3) return [];

  let answer = [];
  const hashSet = new Map<string, number>();
  let arrLength: number = sortedAns.length;
  let i: number = 0;
  let j: number = 0;
  let k: number = 0;

  for (i = 0; i < arrLength - 2; i++) {
    const requiredTarget = target - sortedAns[i];
    if (sortedAns[i] > 0) break;

    if (i > 0 && sortedAns[i] === sortedAns[i - 1]) continue;
    j = i + 1;
    k = arrLength - 1;

    while (j < k) {
      const currSum = sortedAns[j] + sortedAns[k];
      if (currSum === requiredTarget) {
        if (hashSet.has(`${sortedAns[i]},${sortedAns[j]},${sortedAns[k]}`)) {
        } else {
          hashSet.set(`${sortedAns[i]},${sortedAns[j]},${sortedAns[k]}`, 1);
          answer.push([sortedAns[i], sortedAns[j], sortedAns[k]]);
        }
        j++;
        k--;
      } else if (currSum < requiredTarget) {
        j++;
      } else if (currSum > requiredTarget) {
        k--;
      }
    }
  }

  return answer;
};

console.log(
  "This is the answer to the three sum problem",
  threeSumTriplets(inputArr, target),
);

export { threeSumTriplets };
