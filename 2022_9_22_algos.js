
/* 
Finds the container that can hold the most water based on it's area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.
See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

const heights2 = [1, 1];
const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */

// note height at index 0. Note height at index 1. Subtract index 0 from 1. Then multiply by the lower height.
// Move index 1 to 2, 3, etc. and compare/repeat until reaching the end of the index.
// as this is being done, each of those noted items is to be stored in temporary variables.
// also, when the area with one set of variables is higher than the area with another set of variables, replace them.
// finally, return the area from the final variables.
// since we only need ot return area, we don't really need to save the variables that got the area so they can be changed each time while area retains value


function containerWithMostWater(heights) {


    let currentMax = 0

    for (let i = 0; i < heights.length; i++) {
        const leftHeight = heights[i];

        for (let j = i + 1; j < heights.length; j++) {
            const rightHeight = heights[j];
            const lowerHeight = Math.min(leftHeight, rightHeight)
            const length = j - i
            const area = length * lowerHeight
            
            if (area > currentMax) {
                currentMax = area
            }
        }
    }
    return currentMax
}

console.log(containerWithMostWater(heights1));
console.log(containerWithMostWater(heights2));
console.log(containerWithMostWater(heights3));
console.log(containerWithMostWater(heights4));


// /* 
// Given two strings, version1, and version2, both representing version numbers
// If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.
// Helpful methods:
//   - .split(characterToSplitOn)
//     - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
//   - .parseInt
//     - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails
// Bonus, solve without .split
// */

// const test1V1 = '0.1';
// const test1V2 = '1.1';
// const expected1 = -1;

// const test2V1 = '1.0.1';
// const test2V2 = '1';
// const expected2 = 1;

// const test3V1 = '7.5.2.4';
// const test3V2 = '7.5.3';
// const expected3 = -1;

// const test4V1 = '7.5.2.4';
// const test4V2 = '7.5.2';
// const expected4 = 1;

// const test5V1 = '1.01';
// const test5V2 = '1.001';
// const expected5 = 0;
// // Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

// const test6V1 = '1.0.1';
// const test6V2 = '1';
// const expected6 = 1;

// /**
//  * Determines which version number is greater or if they are equal.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} v1
//  * @param {string} v2
//  * @returns {number} 1 if v1 greater, -1 if v1 smaller, 0 if equal.
//  */
// function compareVersionNumbers(v1, v2) { }