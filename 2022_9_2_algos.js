






/* 
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
  Create a function that uses yesterday’s partition to fully sort an array
  in-place.
  Unstable sort.
  
  Time Complexity
    - Best: O(n log(n)) linearithmic.
    - Average: O(n log(n)) linearithmic.
    - Worst: O(n^2) quadratic.
  
  Space: O(1) constant.
  Params: nums, left, right
  - left and right are indexes, for now, left will be 0, and right will be the
      last idx.
  - later these params will be used to specify a sub section of the array to
      partition.
  Steps:
    - start by partitioning the full array
        (use the previously built partition algo).
    - then partition the left side of the array
        (left of the returned partition idx) and the right side
        (right of the returned partition idx), recursively.
*/

// const { partition } = require('../2022_9_1_algos');

/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */

 const nums1 = [11, 8, 14, 3, 6, 2, 7];
 const expected1 = [2, 3, 6, 7, 8, 11, 14];
 
 const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
 const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];
 
 const nums3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
 const expected3 = [2, 3, 3, 3, 6, 7, 8, 11, 14];
 
 const nums4 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
 const expected4 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

function partition(nums, leftIdx=0, rightIdx=nums.length-1){
    const midIdx = Math.floor((leftIdx + rightIdx)/2);
    const pivotVal = nums[midIdx];
    const tempPivotIdx = rightIdx;
    
    [nums[midIdx], nums[tempPivotIdx]] = [nums[tempPivotIdx], nums[midIdx]];
    
    rightIdx = tempPivotIdx - 1;

    while(true){
        
        while(nums[leftIdx]<pivotVal){
            leftIdx+=1;
        }
        while(nums[rightIdx]>pivotVal){
            rightIdx -=1;
        }
        if(leftIdx>=rightIdx){
            [nums[tempPivotIdx], nums[leftIdx]] = [nums[leftIdx], nums[tempPivotIdx]];
            return leftIdx;
        }
        [nums[leftIdx], nums[rightIdx]]=[nums[rightIdx], nums[leftIdx]];
        
        leftIdx+=1;
        rightIdx -=1;
    }
}

// function quickSort(nums = [], left = 0, right = nums.length - 1) {
//     if(nums.length === 1){
//         return nums;
//     }
//     left = partition(nums)
//     quickSort(nums = [], left = 0, right = nums.length - 1)
    
// }

// const middleIdx = Math.floor(nums.length/2);
//     const left = nums.slice(0, middleIdx);
//     const right = nums.slice(middleIdx);
//     const sortedLeft = mergeSort(left);
//     const sortedRight = mergeSort(right);
//     return merge(sortedLeft, sortedRight);

// console.log(partition(nums2))
// console.log(nums2)

if(left < right) {
    const result = partition(nums, left, right);
    quickSort(nums, left, result);
    quickSort(nums, result + 1, right);
}
return nums;

console.log(quickSort(nums2))
console.log(nums2)

