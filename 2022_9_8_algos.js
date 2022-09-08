
/*
  Given two arrays of ints
  return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
      think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
    
  Venn Diagram Visualization:
    - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/

/**
 * Produces the symmetric differences, aka disjunctive union of two sets.
 * Venn Diagram Visualization:
 * @see https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
 * - Time: O(?).
 * - Space: O(?).
 * @param  {Array<number>} numsA
 * @param  {Array<number>} numsB
 *    Both given sets are multisets in any order (contain dupes).
 * @returns {Array<number>} The union of the given sets but excluding the shared
 *    values (union without intersection).
 *    i.e., if the element is in one array and NOT the other, it should be
 *    included in the return.
 */

const setA1 = [1, 2];
const setB1 = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const setA2 = [1, 2, 3];
const setB2 = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const setA3 = [4, 1, 2, 3, 4];
const setB3 = [1, 2, 3, 5, 5];
const expected3 = [4, 5];
/* 
  Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array, but have duplicates, so only one copy of each is kept
*/

const setA4 = [];
const setB4 = [];
const expected4 = [];

const setA5 = [];
const setB5 = [1, 2, 3];
const expected5 = [1, 2, 3];

// n, m
function symmetricDifferences(numsA, numsB) {
    // n
    let setA = new Set(numsA)
    // m
    let setB = new Set(numsB)
    // 1 (o of 1)
    let result = new Set([])
// n
    for (let i=0; i<numsA.length; i++){
        // 1, 1
        if (!setB.has(numsA[i]) && !result.has(numsA[i])){
            // 1
            result.add(numsA[i])
        }
    }
// m
    for (let i=0; i<numsB.length; i++){
        // 1, 1
        if (!setA.has(numsB[i]) && !result.has(numsB[i])){
            // 1
            result.add(numsB[i])
        }
    }
    // n+m
    return [...result]
}
// n(n+(n+m))
// a set is like a dictionary, but only the keys. So using .has is not a loop...
// if .includes was used, it would be 2 for loops next to each other in a main loop










/**
 * From a Chipotle interview.
 * encodeStr algo was also given in this interview (aaabbcdd => a3b2cd2).
 *
 * It ain't much, but it's honest work. A worker who measures water level
 * fluctuations in a river is asked to find the largest fluctuation in water
 * levels during a day, but only for rises in water levels.
 */

 // create temp variable to store difference
 // create temp variable to store lower value
 // create temp value to store higher value
 // Loop through the index overall
 // start with the first number, subtract it from all sequential numbers
 // store the highest positive value in the temp variable
 // we then use the loop to go to the next number.
 // change the lower number to the next one in the index,
 // and run all the right numbers through the right variable, subtracting and comparing to the stored temp
 // if the difference is > what the tmep variable is holding, we switch the temp variable.

 const riverLevels1 = [15, 17, 30];
 const expected1 = 15; // 30 - 15 = 15
 
 const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
 const expected2 = 20; // 25 - 5 = 20

 const riverLevels3 = [15, 17, 30, 20, 50, 16, 25, 9, 3];
 const expected3 = 35; // 50 - 15 = 35
 
 const riverLevels4 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
 const expected4 = 11; // 12 - 1 = 11
 
 const riverLevels5 = [1, 5];
 const expected5 = 4;
 
 const riverLevels6 = [5, 1];
 const expected6 = -1;
 
 const riverLevels7 = [9, 7, 7, 7];
 const expected7 = -1;
 
 const riverLevels8 = [42];
 const expected8 = -1;

 function measureWaterLevels(waterLevels) {
    let difference = 0
    let leftLow = 10000
    for (i=0; i<waterLevels.length; i++){
        if(leftLow > waterLevels[i]){
            leftLow = waterLevels[i]
        }
        if(waterLevels[i]-leftLow > difference){
            difference = waterLevels[i]-leftLow
        }
    }
    if(difference <= 0){
        difference = -1
    }
    return difference
 }
 
console.log(measureWaterLevels(riverLevels1))
console.log(measureWaterLevels(riverLevels2))
console.log(measureWaterLevels(riverLevels3))
console.log(measureWaterLevels(riverLevels4))
console.log(measureWaterLevels(riverLevels5))
console.log(measureWaterLevels(riverLevels6))
console.log(measureWaterLevels(riverLevels7))
console.log(measureWaterLevels(riverLevels8))

//OTHER SOLUTION

// function measureWaterLevels(waterLevels) {
//     let result = 0
//     let min = waterLevels[0]
//     let current = 0
//     for(let i=1; i<waterLevels.length; i++){
//         if(min < waterLevels[i]){
//             current = waterLevels[i]-min
//         }
//         if(current > result) result = current
//         if(waterLevels[i]<min){
//             current = 0
//             min = waterLevels[i]
//         }
//     }
//     return result === 0 ? -1 : result
// }




 /**
  * It ain't much, but it's honest work. A worker who measures water level
  * fluctuations in a river is asked to find the largest fluctuation in water
  * levels during a day, but only for rises in water levels.
  * - Time: O(?).
  * - Space: O(?).
  * @param {Array<number>} waterLevels Non-empty .
  * @returns {number} The max water-level rise amount or -1 if none.
  */
//  function measureWaterLevels(waterLevels) {}

 /* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
*/

const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
];

const nums2 = [];
const expected2 = [];

const nums3 = [1, 3, 7, 9];
const expected3 = [
  { i: 1, n: 3 },
  { i: 2, n: 7 },
  { i: 3, n: 9 },
];
// Explanation: Index 0 has no number before it, so it is not included.

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecNums}
 */
function allNonConsecutive(sortedNums) {}