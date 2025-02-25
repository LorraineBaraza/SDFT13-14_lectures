// let myName="John" 
// const currentYear= 2025
// let age= currentYear - 1999
// let isStudent = true
// let myAge= age
// let myage;
// let init;
// let audio1;
// let person4;



// myName= "Justina"


// console.log(myName)
// console.log(age)
// console.log(isStudent)
// console.log(myAge)

// var dogName="bingo"
// console.log(dogName)

//don't use underscore at the start of a variable name
//Don't use numbers at the start of a variable name
//Variable names are case sensitive
//Reserved Keywords:
//let, const, function, this, class, for, break, 
// case, continue, delete, do, while, else, if, catch
//debugger, switch, false, true, in, export, import, 
// try, catch, return, super

// DATA TYPES
// Primitive Data Types
// 1. Number
let myAge= 45;
console.log(typeof(myAge))
// 2. String
let myName= "John"
console.log(typeof(myName))
let myAddress= '123 Main Street'
console.log(typeof(myAddress))
// 3. Boolean
let test= 6<3
console.log(test)
console.log(typeof(test)) 
// 4. Undefined
let x;
console.log(x)
// 5. Null  (the difference between null and undefined)
//6. Symbol
//7. BigInt

//reference data types  
//Arrays
let colors= ['red', 'blue', 'green', true, 45, 'yellow', [1,2,3, ['a','b']]]
console.log(colors)
console.log(colors[0], colors[1], colors[2])
console.log(colors[3])
console.log(colors[6][1])
console.log(colors[6][3][1])

//Objects
let bruceDog= {
    name: "Billy",
    breed: "Bulldog",
    age: 3,
}

let princessDog= {
    name: "Bella",
    breed: "Poodle",
    age: 2,
}

console.log(bruceDog)
console.log(bruceDog.name)
console.log(princessDog["name"])

//Functions

//Static and Dynamic Typing
let myScore="85"

let myNewScore: number= "85"
