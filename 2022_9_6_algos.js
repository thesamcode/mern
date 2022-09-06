/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
//    const mergeArray = [];
//    let leftIndex = 0;
//    let rightIndex = 0;
//    while(sortedA.length > leftIndex && sortedB.length > rightIndex){
//     if(sortedA[leftIndex] < sortedB[rightIndex]){
//         mergeArray.push(sortedA[leftIndex]);
//         leftIndex++;
//     }
//     else{
//         mergeArray.push(sortedB[rightIndex])
//         rightIndex++;
//     }
//     }
//     while(sortedA.length > leftIndex){
//         mergeArray.push(sortedA[leftIndex]);
//         leftIndex++;
//     }
//     while(sortedB.length > rightIndex){
//         mergeArray.push(sortedB[rightIndex]);
//         rightIndex++;
//     }
//     const result = new Set(sortedA.filter((index) => sortedB.has(index)))
//     return result
    let setB = new Set(sortedB)
    const result = new Set(sortedA.filter((index) => setB.has(index)));
    return [...result]
}

console.log(orderedIntersection(numsA1, numsB1))

// function orderedIntersection(sortedA, sortedB) {
//     const newArray = [];
//     let arrayAPointer = 0;
//     let arrayBPointer = 0;

//     while(arrayAPointer < sortedA.length && arrayBPointer < sortedB.length){
//         if(arrayAPointer < sortedA.length && sortedA[arrayAPointer] < sortedB[arrayBPointer]){
//             arrayAPointer++;
//         }
//         else if (arrayBPointer < sortedB.length && sortedA[arrayAPointer] > sortedB[arrayBPoiinter]){
//             arrayBPointer++
//         }
//         else {
//             if(newArray.includes(sortedA[arrayAPointer])){
//                 arrayAPointer++
//                 arrayBPointer++}
//             }
//             else if(sortedA[arrayAPointer]===sortedB[arrayBPointer]){
//                 newArray.push(sortedA[arrayAPointer])
//                 arrayAPointer++
//                 arrayBPointer++
//             }
//             else{
//                 continue;
//             }
//         }
//     }

function orderedIntersection(sortedA, sortedB){
    let idxA = 0;
    let idxB = 0;

    const intersection = [];

    while (idxA < sortedA.length && idxB < sortedB.length){
        if (sortedA[idxA] === sortedB[idxB]){
            if (intersection[intersection.length - 1] != sortedA[idxA]){
                intersection.push(sortedA[idxA]);
            }
            idxA++;
            idxB++;
        }
        else if (sortedA[idxA] < sortedB[idxB]){
            idxA++;
        }
        else {
            idxB++;
        }
    }
    return intersection;
}