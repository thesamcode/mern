// console.log(hello);                                   
// var hello = 'world';                                 

// var hello
// console.log(hello);
// world

// var needle = 'haystack';
// test();
// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }

// the test function is hoisted so it returns the function results

// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// no function call so it simply states the value of brendan.

// var food = 'chicken';
// console.log(food);
// eat();
// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// function is hoisted so after the food variable is defined, it runs.
//the console log for the food in the function came after half-chicken but before it was turned into gone so it did not hoist or run gone.

// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// mean was defined as a variable as opposed to a function so it does not get hoisted
// That errror blocks the whole thing from continuning. 
// nothing happens in the generic function so the food variable is never created or defined. 
//And the initial console.log can't hoist it out of the function scope

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// dojo is not defined. But because it is defined in the function, and the function was hoisted and run, the variable got hoisted.
// So san jose was able to show up as the initial value.


