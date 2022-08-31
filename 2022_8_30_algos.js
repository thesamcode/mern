/* 
  https://visualgo.net/en/sorting
    
  Selection sort works by iterating through the list, finding the minimum
  value, and moving it to the beginning of the list. Then, ignoring the first
  position, which is now sorted, iterate through the list again to find the
  next minimum value and move it to index 1. This continues until all values
  are sorted.
  Unstable sort.
  
  Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.
  Space: O(1) constant.
  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example,
      you run selection sort for 10 iterations only to display the first 10
      sorted items.
*/

// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
// function selectionSort(nums = []) {
//     let isSorted = false
//     while(!isSorted){
//         isSorted = true
//         for (let i = nums.length - 1; i >= 0; i--) {
//             if (nums[i+1] < nums[i]){
//                 let temp = nums[i]
//                 nums[i] = nums[i + 1]
//                 nums[i + 1] = temp
//                 isSorted = false
//                 console.log(nums)
//             }
//         }
//     }
// return nums
// }

// function sleectionSort(nums = []){
//     let selectIndex = 0;
//     while (sleectIndex < nums.length){
//         let minVal = nums[selectIndex];
//         let minIndex = selectIndex;
//         for (let i = selectIndex + 1; i < nums.length; i++){
//             if (nums[i] < minVal){
//                 minVal = nums[i];
//                 minIndex = 1;
//             }
//         }
//         const temp = nums[selectIndex];
//         nums[selectIndex] = minVal;
//         nums[minIndex] = temp;
//         selectIndex++;
//     }
//     return nums
// }

// console.log(selectionSort(numsOrdered));
// console.log(selectionSort(numsRandomOrder));
// console.log(selectionSort(numsReversed));

/* 
  - Visualization with playing cards (scroll down):
      https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
  - Array / bar visualization:
      https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
  - Stable sort, efficient for small data sets or mostly sorted data sets.
  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
  Space: O(1) constant.
  - this sort splits the array into two portions (conceptually, not literally).
  - the left portion will become sorted, the right portion
      (that hasn't been iterated over yet) is unsorted.
  can shift OR swap target element until it reaches desired position
  shifting steps:
  1. consider the first item as sorted
  2. move to the next item
  3. store current item in a temp var (to make this position available to shift items)
  4. if item to the left of current is greater than current item, shift the
      left item to the right.
  5. repeat step 4 as many times as needed
  6. insert current item
  7. move to the next item and repeat
  swap steps:
  1. consider the first item as sorted
  2. move to the next item
  4. if item to left of current item is less than current, swap
  5. repeat step 4 until item to left is less than current item
  6. move to next item and repeat
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given array in-place.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
// function insertionSort(nums = []) {
//     let isSorted = false
//     while(!isSorted){
//         // isSorted = true
//     for (let i = 1; i < nums.length; i++) {
//         while(nums[i]<nums[i-1]){
//             let temp = nums[i]
//             nums[i] = nums[i-1]
//             nums[i-1] = temp
//             i--
//         }
//         isSorted = false
//     }
//     isSorted = true
// }
// return nums
// }

console.log(insertionSort(numsOrdered));
console.log(insertionSort(numsRandomOrder));
console.log(insertionSort(numsReversed));


function insertionSortSwap(nums = []){
    for (let i = 1; i<nums.length; i++){
        letcurrIdx = i; // to avoid alterin i directly
        let leftIdx = currIdx - 1; //compare to left

        while (leftIdx >= 0 && nums[leftIdx] > nums[currIdx]){
            // destructure swap notation
            [nums[leftIdx], nums[currIdx]] = [nums[currIdx], nums[leftIdx]];
            // curr got swapped to the left, so currIdx is now 1 to the left
            currIdx--;
            leftIdx = currIdx - 1
        }
    }
}