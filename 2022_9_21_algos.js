/* 
Given by Riot games.
*/

const str1 = 'b70a164c32a20c10';
const expected1 = 'a184b70c42';

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(n + n(log(n))) linearithmic. The n(log(n)) is from sorting.
 * Space: O(2n) -> O(n) linear. Duplicate storage of str in obj and new str.
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(str) {
  const letterHashCounts = {};
  let numStr = '';
  let letter = str[0];

  for (let i = 1; i < str.length; i++) {
    const num = parseInt(str[i]);
    const isNum = !isNaN(num);
    const isLetter = isNaN(num);

    if (isNum) {
      numStr += str[i];
    }

    // Not an else since it needs to run on last iteration ending with a num.
    if (isLetter || i === str.length - 1) {
      const letterCount = parseInt(numStr);

      if (letter in letterHashCounts) {
        letterHashCounts[letter] += letterCount;
      } else {
        letterHashCounts[letter] = letterCount;
      }

      // reset for next letter and it's following digits
      letter = str[i];
      numStr = '';
    }
  }

  const alphabetized = Object.keys(letterHashCounts).sort();

  let newHash = '';

  // This could have been chained after the sort as a .forEach and then concat
  // the string, or .reduce instead to create the string to return.
  for (let i = 0; i < alphabetized.length; i++) {
    const letter = alphabetized[i];
    newHash += letter + letterHashCounts[letter];
  }

  return newHash;
}

/**
 * Time:  * Time: O(n + n(log(n))) linearithmic. The n(log(n)) is from sorting.
 *    The nested while loop increments "i" as well so every
 *    iteration of it reduces the iterations of the outer for loop so there
 *    is no back-tracking.
 * Space: O(2n) -> O(n) linear. Duplicate storage of str in obj and new str.
 */
function rehash2(s) {
  const letterHashCounts = {};

  // This for loop could be a while loop. It doesn't increment up here because
  // we are incrementing inside it.
  for (let i = 0; i < s.length; ) {
    // Retrieve letter at current index then increment to the num after.
    let char = s[i++];
    let numStr = '';

    /**
     * Look ahead to find potentially multiple digits after letter.
     * parseInt returns NaN if it fails to parse to a number.
     * We can't simply check for a truthy parsed int because 0 is falsy.
     * We can't use typeof because typeof NaN is "number". This is why we use
     * not Not a Number to check if we parsed a number.
     */
    while (i < s.length && !isNaN(parseInt(s[i]))) {
      numStr += s[i++];
    }

    if (letterHashCounts.hasOwnProperty(char)) {
      letterHashCounts[char] += parseInt(numStr);
    } else {
      letterHashCounts[char] = parseInt(numStr);
    }
  }

  const alphabetized = Object.keys(letterHashCounts).sort();

  let newHash = '';

  for (let i = 0; i < alphabetized.length; i++) {
    const letter = alphabetized[i];
    newHash += letter + letterHashCounts[letter];
  }

  return newHash;
}


/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = 'abcabcbb';
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = 'bbbbb';
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = 'pwwkew';
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = 'dvadf';
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * Starting from each character, go forward as far as possible until a dupe is
 * found.
 * - Time: O(n^3) cubed, the .includes is the 2nd nested loop.
 * - Space: O(n) linear.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 */
function lengthOfLongestSubString(str) {
  let maxLen = 0;
  let subStr = '';

  for (let i = 0; i < str.length; i++) {
    const remainingLength = str.length - i;
    subStr = '';

    // if remaining chars left are fewer than current maxLen
    // it's not possible for there to be a longer subStr
    if (remainingLength < maxLen) {
      return maxLen;
    }

    for (let j = i; j < str.length; j++) {
      if (subStr.includes(str[j])) {
        break;
      } else {
        subStr += str[j];
      }
    }

    if (subStr.length > maxLen) {
      maxLen = subStr.length;
    }
  }
  return maxLen;
}

/**
 * Time: O(n^2) quadratic.
 * Space: O(n) linear.
 */
function lengthOfLongestSubString2(str) {
  let maxLen = 0;

  for (let i = 0; i < str.length; i++) {
    let count = 0;
    const seen = new Set();
    const remainingLength = str.length - i;

    // it's not possible for there to be a longer subStr
    if (remainingLength < maxLen) {
      return maxLen;
    }

    for (let j = i; j < str.length; j++) {
      let char = str[j];

      if (seen.has(char)) {
        break;
      } else {
        seen.add(char);
        count++;
      }
    }

    if (count > maxLen) {
      maxLen = count;
    }
  }
  return maxLen;
}

/**
 * Time: O(n) linear.
 * Space: O(n) linear.
 */
function lengthOfLongestSubString3(str) {
  const seenChars = {};
  let longest = 0;
  let startIndex = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (seenChars.hasOwnProperty(char) && startIndex <= seenChars[char]) {
      startIndex = seenChars[char] + 1;
    }

    seenChars[char] = i;
    const diff = i - startIndex + 1;

    if (diff > longest) {
      longest = diff;
    }
  }
  return longest;
}
























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