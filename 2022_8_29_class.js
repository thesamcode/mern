const numbers = [1,2,3,4,5];
const testScorePercentages = [95,77,40,63,85,90,70];
const persons = [
    { name: 'Rick', age:70},
    {name: 'Morty', age:14},
    {name:'Summer', age:17},
    {name: 'Beth', age:34},
];

const doubleNums = (nums) => {
    const doubledNums = [];

    for (let i=0; i<nums.length; i++){
        doubledNums.push(nums[i] * 2);
    }
    return doubledNums;
};

const tripleNums = (nums) => {
    const triplednums = [];

    for (let i=0; i<nums.length; i++){
        tripledNums.push(nums[i] * 3);
    }
    return tripledNums;

};

const doubledNums = numbers.map((n)=>n*2);
const tripledNums = numbers.map((n)=>n*2);

console.log(doubledNums)

const personnames = persons.map((person) => {
    if (person.name === 'Rick'){
        return 'GENIUS - ${person.age}';
    }
    else {
        return '$person.name} - ${person.age}'
    }
})