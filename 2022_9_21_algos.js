/* 
Given by Riot games.
*/

import { isNumber } from "util";

const str1 = 'b70a164c32a20c10';
const expected1 = 'a184b70c42';



/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    const resultStr = "";
    const map = new Map();
    let tempLetter = "";
    // let tempNum = 0;
    let tempStrToNum = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z]/gi)) {
            tempLetter = s[i];
        }
        if (map.has(tempLetter)) {

        }
            for (let j = i + 1; j < s.length; j++) {
                if (!s[j].match(/[a-z]/gi)) {
                    tempStrToNum += s[j];
                }
                if (s[j].match(/[a-z]/gi)) {
                    pasrseInt(tempStrToNum)
                }
            }
        }

        map.set(tempLetter, tempStrToNum);
        console.log(map)
        tempLetter = ""
        tempStrToNum = ""
    }
}

console.log(rehash(str1))

function rehash(s){
    let result = ""
    let alphabetDict = {}
    let currentLetter = ""
    let currentNumber = ""
    for (let i = 0; i<s.length; i++){
        if(!isNumber(s[i]) && currentNumber != ""){
            alphabetDict[currentLetter] += parseInt(currentNumber)
            currentNumber = ""
        }
        if(!isNumber(s[i]) && (alphabetDict[s[i]] === undefined)){
            alphabetDict[s[i]] = 0
            currentLetter = s[i]
            continue
        }
        if(!isNumber(s[i]) && (s[i] in alphabetDict)){
            currentLetter = s[i]
            continue
        }
        currentNumber += s[i]
    }
    alphabetDict[currentLetter] += parseInt(currentNumber)

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for(let i=0; i<alphabet.length; i++){
        if(alphabetDict[alphabet[i]]){
            result += alphabet[i] + alphabetDict[alphabet[i]]
        }
    }
    return result
}

console.log(rehash(str1))

function isNumber(value)
{ return value >= '0' && value <= '9' }


// /*
//   Given a string, find the length of the longest substring without repeating characters.
// */

// const str1 = 'abcabcbb';
// const expected1 = 3;
// // Explanation: The answer is "abc", with the length of 3.

// const str2 = 'bbbbb';
// const expected2 = 1;
// // Explanation: The answer is "b", with the length of 1.

// const str3 = 'pwwkew';
// const expected3 = 3;
// /* Explanation: The answer is "wke", with the length of 3.
//   Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

// const str4 = 'dvadf';
// const expected4 = 4;
// // Explanation: "vadf"

// /**
//  * Determines the length of the longest substring in the given str.
//  * @param {string} str
//  * @returns {number} Length of the longest substring from the given str.
//  * - Time: O(?).
//  * - Space: O(?).
//  */
// function lengthOfLongestSubString(str) { }