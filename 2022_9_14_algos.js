
/* 
  Given an array of objects, a searchFor string, and searchBy key that exists
  in the object return a new array of only those objects whose value for the
  given key starts with the given search string.
  You can assume the key will exist on the object and the value of that key
  will be a string.
  Bonus: make the search case insensitive.
  Bonus: re-write it with functional programming, using built in methods.
  Bonus: allow the search method to be provided as a parameter, e.g.,
      string methods: includes, startsWith, endsWith.
    - you can assume the searchMethod will be valid.
  This kind of algorithm can be used in react onChange as you type into a
  search bar to live-filter a list.
*/

const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
    },
    {
        firstName: 'Eddy',
        lastName: 'Lee',
    },
    {
        firstName: 'John',
        lastName: 'Fawn',
    },
    {
        firstName: 'Edward',
        lastName: 'Kim',
    },
];

const searchFor1 = 'Jo';
const searchBy1 = 'firstName';
const expected1 = [
    {
        firstName: 'John',
        lastName: 'Doe',
    },
    {
        firstName: 'John',
        lastName: 'Fawn',
    },
];

const searchFor2 = 'ohn';
const searchBy2 = 'firstName';
const expected2 = [];
// Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = 'Do';
const searchBy3 = 'lastName';
const expected3 = [
    {
        firstName: 'John',
        lastName: 'Doe',
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
    },
];

// Bonus
const searchFor4 = 'E';
const searchBy4 = 'lastName';
const searchMethod4 = 'includes';
const expected4 = [
    {
        firstName: 'John',
        lastName: 'Doe',
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
    },
    {
       0 firstName: 'Eddy',
        1 lastName: 'Lee',
    },
];

/**
 * Filters the given items based on the search criteria using a startsWith
 * search method.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items The items to be filtered.
 * @param {string} searchFor The value of the given key to search for.
 * @param {string} searchBy The key to search by.
 * @returns {Array<Objects>} The matched items.
 */
function functionalFilterByKey(items, searchFor, searchBy, searchMethod = "startsWith") {
    let array = []
    // whenever you use dot notation you can use bracket notation
    //Can't necessarily use dot notation when using bracket notation:
        //like integers/variables where key is in variable. [i]
        //it would literally look for .searchBy() but not the actual variable name for th ekey
    for (let item of items) {
        if (item[searchBy].toLowerCase()[searchMethod](searchFor.toLowerCase())) {
            array.push(item)
        }
    }
    return array;
}

//Neils
// function functionalFilterByKey(items, searchFor, searchBy, searchMethod = "startsWith") {
// return items.filter((item)=>
// item[searchBy].toLowerCase()[searchMethod](searchFor.toLowerCase())
// );
// }


// in React, need list to store original data, need to keep updating state, keep running .filter on whole list fo roriginal data
//This is when using it in search bar.

console.log(functionalFilterByKey(people, searchFor1, searchBy1))
console.log(functionalFilterByKey(people, searchFor2, searchBy2))
console.log(functionalFilterByKey(people, searchFor3, searchBy3))
console.log(functionalFilterByKey(people, searchFor4, searchBy4, searchMethod4))





/* 
Given an array of person objects with the following keys:
  firstName[string]
  lastName[string]
  friends[arr of friend objects]
  isSocialDistancing[bool]
  Friend object keys:
    firstName[string]
    lastName[string]
    isSocialDistancing[bool]
    hasCovid[bool]
  return a new array of the names of people (not friends) who are at high risk of infection
  A person is at high risk of catching the virus if they meet all the below criteria:
  1. not practicing social distancing
  2. have a friend who is not practicing social distancing whom hasCovid
  Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const friend1 = {
    firstName: 'Friend',
    lastName: 'One',
    isSocialDistancing: false,
    hasCovid: true,
};

const friend2 = {
    firstName: 'Friend',
    lastName: 'Two',
    isSocialDistancing: false,
    hasCovid: true,
};

const friend3 = {
    firstName: 'Friend',
    lastName: 'Three',
    isSocialDistancing: false,
    hasCovid: false,
};

const people = [
    {
        firstName: 'Person',
        lastName: 'One',
        isSocialDistancing: false,
        friends: [friend2, friend3],
    },
    {
        firstName: 'Person',
        lastName: 'Two',
        isSocialDistancing: true,
        friends: [friend2, friend1],
    },
    {
        firstName: 'Person',
        lastName: 'Three',
        isSocialDistancing: false,
        friends: [friend2, friend1],
    },
];

const expected = ['Person One', 'Person Three'];

/**
 * @typedef {Object} Friend
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 * @property {boolean} hasCovid
 *
 * @typedef {Object} Person
 * @property {Array<Friend>} friends
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 */

/**
 * Finds the people who are at risk of contracting Covid.
 * - Time O(?).
 * - Space O(?).
 * @param {Array<Person>} persons
 * @returns {Array<string>} An array of Person full names for those people who
 *    are at risk. A Person is at risk if:
 *    1. not practicing social distancing.
 *    2. have a friend who is not practicing social distancing whom hasCovid.
 */
function coronaVirusAtRisk(persons) { 
    const returnArray=[]
    for(const person of persons){
        if (person.isSocialDistancing) continue;
        let atRisk = false;
        for(const friend of person.friends){
            if(friend.hasCovid && !friend.isSocialDistancing){
                atRisk = true
            }
            if (atRisk) returnArray.push(person)
        }
        return returnArray
    }
}

/**
 * - Time O(?).
 * - Space O(?).
 */
function coronaVirusAtRiskFunctional(persons) { }

const functionalCoronaVirusRisk = (persons) =>
    persons
        .filter(
            (person) =>
                person.isSocialDistancing === false &&
                person.friends.findIndex(
                    (friend) => friend.isSocialDistancing === false && friend.hasCovid
                ) > -1
        )
        .map((person) => `${person.firstName} ${person.lastName}`);