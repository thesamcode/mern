// Interview Algo given to alumni Oct 2019

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

const nums2 = [];
const sum2 = 5;
const expected2 = [];

const nums3 = [10, 15, 20, 35, 30];
const sum3 = 5;
const expected3 = [];

// Bonus:
const nums4 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum4 = 16;
const expected4 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

// Bonus:
const nums5 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum5 = -16;
const expected5 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
function findConsqSums(nums, targetSum) {}

// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
const expected1 = [0, 2];
// Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const nums3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
const expected3 = [1, 6];

/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */

// NONWORKING...
// function twoSum(nums, targetSum) {
//     const pairs = new Map()
//     const indexes = new Map()
//     const newArray = []

//     for(let i = 0; i<nums.length; i++){
//         if(pairs.has(targetSum - nums[i])){
//             console.log(indexes[targetSum - nums[i]])
//             newArray.push(indexes[targetSum - nums[i]])
//             newArray.push(i)
//             return newArray
//         }
//         pairs[nums[i]] = targetSum - nums[i]
//         indexes[nums[i]] = i
//     }
//     return newArray
// }

function twoSum(nums, targetSum){
    // let sum = 0;
    let result = []
    let temp = []

    for(let i =0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            const sum = nums[i] + nums[j]
            if(sum === targetSum){
                // result.push(i)
                // result.push(j)
                // return result
                result.push(i,j)
                return result
            }
        }
    }
}

function twoSumSpaceOptimized(nums, targetSum){
    for (let i=0; i<nums.length; i++){
        for (let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === targetSum){
            return [i,j]
            }
        }
    }
    return []
}

function twoSum(nums, targetSum){
    const numsToIndex = {}

    for (let i=0; i<nums.length; i++){
        const numA = nums[i]
        const numB = targetSum - numA

        if(numsToIndex.hasOwnProperty(numB)){
            const idxB = numsToIndex[numB]
            return [idxB, i]
        }
        numsToIndex[numA] = i
    }
    return []
}

console.log(twoSum(nums1, targetSum1))
console.log(twoSum(nums2, targetSum2))
console.log(twoSum(nums3, targetSum3))