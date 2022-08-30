// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

// Tesla
// Mercedes

// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);

// name is deleted and turned into the new variable so it gives nothing.
// the otherName will give Elon
// the name console log needs ot be removed to allow the othe rone to work...

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);

// person does not have a password variable so it won't work.
// the password is left at what it's value was set at. 

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second);
// console.log(first == third);

// 2 5 2
// the first one will read as 5
// the second console log will read as 2

// actually, it will read as false, and the second one will read as true.

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// key is already defined so that will not work.
// secondKey is already defined so that won't work
// if a value from secondKey is being console logged that will return that value at that index i.e. 1
// willThisWork will return 5.

//the first one returns value
//the second one just returns the whole array as it was originally

