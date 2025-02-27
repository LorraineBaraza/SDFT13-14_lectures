// // let myName="John" 
// // const currentYear= 2025
// // let age= currentYear - 1999
// // let isStudent = true
// // let myAge= age
// // let myage;
// // let init;
// // let audio1;
// // let person4;



// // myName= "Justina"


// // console.log(myName)
// // console.log(age)
// // console.log(isStudent)
// // console.log(myAge)

// // var dogName="bingo"
// // console.log(dogName)

// //don't use underscore at the start of a variable name
// //Don't use numbers at the start of a variable name
// //Variable names are case sensitive
// //Reserved Keywords:
// //let, const, function, this, class, for, break, 
// // case, continue, delete, do, while, else, if, catch
// //debugger, switch, false, true, in, export, import, 
// // try, catch, return, super

// // DATA TYPES
// // Primitive Data Types
// // 1. Number
// let myAge= 45;
// console.log(typeof(myAge))
// // 2. String
// let myName= "John"
// console.log(typeof(myName))
// let myAddress= '123 Main Street'
// console.log(typeof(myAddress))
// // 3. Boolean
// let test= 6<3
// console.log(test)
// console.log(typeof(test)) 
// // 4. Undefined
// let x;
// console.log(x)
// // 5. Null  (the difference between null and undefined)
// //6. Symbol
// //7. BigInt

// //reference data types  
// //Arrays
// let colors= ["red", 'blue', 'green', true, 45, 'yellow', [1,2,3, ['a','b']]]
// console.log(colors)
// console.log(colors[0], colors[1], colors[2])
// console.log(colors[3])
// console.log(colors[6][1])
// console.log(colors[6][3][1])

// //Objects
// let bruceDog= {
//     name: "Billy",
//     breed: "Bulldog",
//     age: 3,
// }

// let princessDog= {
//     name: "Bella",
//     breed: "Poodle",
//     age: 2,
// }

// console.log(bruceDog)
// console.log(bruceDog.name)
// console.log(princessDog["name"])

// //Functions

// //Static and Dynamic Typing
// // let myScore="85"

// // let myNewScore: number= "85"


// //MATHS AND PROGRAMMING
// const myInteger= 5;
// const myFloat= 5.565555;

// console.log(typeof(myInteger))
// console.log(typeof(myFloat))

// const myFloatToTwoDecimalPlaces= myFloat.toFixed(2)
// console.log(myFloatToTwoDecimalPlaces)
// console.log(typeof(myFloatToTwoDecimalPlaces))
// let sum = Number(myFloatToTwoDecimalPlaces) + 5
// let newSum= myFloatToTwoDecimalPlaces + "5"
// console.log(sum)
// console.log(newSum)
// console.log(typeof(sum))

// let myNumber= "74"
// myNumber= Number(myNumber) + 3
// console.log(myNumber)

// //ARITHMETIC OPERATORS

// //Addition
// //subtraction
// //mulplication
// //division
// //modulus
// console.log(8 % 3)
// //exponentiation
// console.log(2 ** 3)
// console.log(Math.pow(2,3))

// const num1= 10;
// const num2= 3;

// 9 * num2 
// let result= num1 / num2
// console.log(result)


// (num1 + num2) * 8/2
// (num2 % 3) * num2

// let newNum= 5;
// newNum++ //newNum= newNum + 1
// newNum--

let a = 3;
let b = "3";

// a +=4 //a= a+4
// b -= 2 //b= b-2
// a *= 3 //a= a*3
// b /= 2 //b= b/2

//COMPARISON OPERATORS
// ==, ===, !=, !==, >, <, >=, <=
// == checks for equality of value
console.log(a == b)  //loose equality
console.log(a === b) //strict equality

// !== checks for inequality of value
console.log(a != b)  //loose inequality
console.log(a !== b) //strict inequality
//strict equality checks for equality of value and data type
console.log (console)


//LOGICAL OPERATORS

// &&, ||, !, ??, ?:
// && checks if both conditions are true
console.log(5 > 3 || 6 > 3 && 7 <3)
console.log(5 > 3 && 6 < 3 || 7<3)

// || checks if one of the conditions is true
console.log(5 > 3 || 6 > 3)
console.log(5 > 3 || 6 < 3)

// ! checks if the condition is false
console.log(!(5 > 3))
console.log(!(5 < 3))

// ?? checks for nullish values //nullish coalescing operator
let x= null; 
let y= x ?? "default value" //if x is null or undefined, y will be assigned the default value
console.log(y)

//truthy and falsy values
//Falsy values: 0, "", null, undefined, NaN, false
//Truthy values: everything else

console.log(!!true) //false
console.log(!!false) //true
console.log(!!0) //true
console.log(!!"") //true
console.log(!!null) //true
console.log(!!undefined) //true
console.log(!!NaN) //true
console.log(!!"Cat")

//Short-circuit evaluation
//if the first condition is true, the second condition is not evaluated
//if the first condition is false, the second condition is evaluated

//falsy && anything = falsy
//truthy && anything = anything
//truthy || anything = truthy
//falsy || anything = anything
//nonnullish ?? anything = nonnullish
//nullish ?? anything = anything

console.log(true || "Hello")

//ternary operator (conditional operator)
//condition ? value if true : value if false

let age= 1000000;
let message= age >= 18 ? "You can vote" : "You can't vote"
console.log(message)

const status= age>= 18 ? "adult" : "minor"
console.log(status)

//operator precedence
//1. ()
//2. ++, --, - (unary operators)    
//3. ** (exponentiation)
//4. *, /, % (multiplication, division, modulus)
//5. +, - (addition, subtraction)
//6. <, >, <=, >= (comparison)
//7. ==, ===, !=, !== (equality)
//8. && (logical AND)
//9. || (logical OR)