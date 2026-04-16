/*

1. Two Sum
Solved
Easy
Topics
premium lock icon
Companies
Hint
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


 */

const inputArr: number[] = [3, 2, 4];
const target: number = 6;

const findTwoSumPair = (arr: number[], target: number): number[] => {
  const hashSet = new Map();
  let ans: number[] = [];

  for (let i: number = 0; i < arr.length; i++) {
    if (hashSet.has(arr[i])) {
      return [hashSet.get(arr[i]), i];
    }
    hashSet.set(target - arr[i], i);
  }

  return ans;
};


console.log(
  "This is the answer to the two sum problem",
  findTwoSumPair(inputArr, target),
);

export { findTwoSumPair };
