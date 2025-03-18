// // // // // let myName="John" 
// // // // // const currentYear= 2025
// // // // // let age= currentYear - 1999
// // // // // let isStudent = true
// // // // // let myAge= age
// // // // // let myage;
// // // // // let init;
// // // // // let audio1;
// // // // // let person4;



// // // // // myName= "Justina"


// // // // // console.log(myName)
// // // // // console.log(age)
// // // // // console.log(isStudent)
// // // // // console.log(myAge)

// // // // // var dogName="bingo"
// // // // // console.log(dogName)

// // // // //don't use underscore at the start of a variable name
// // // // //Don't use numbers at the start of a variable name
// // // // //Variable names are case sensitive
// // // // //Reserved Keywords:
// // // // //let, const, function, this, class, for, break, 
// // // // // case, continue, delete, do, while, else, if, catch
// // // // //debugger, switch, false, true, in, export, import, 
// // // // // try, catch, return, super

// // // // // DATA TYPES
// // // // // Primitive Data Types
// // // // // 1. Number
// // // // let myAge= 45;
// // // // console.log(typeof(myAge))
// // // // // 2. String
// // // // let myName= "John"
// // // // console.log(typeof(myName))
// // // // let myAddress= '123 Main Street'
// // // // console.log(typeof(myAddress))
// // // // // 3. Boolean
// // // // let test= 6<3
// // // // console.log(test)
// // // // console.log(typeof(test)) 
// // // // // 4. Undefined
// // // // let x;
// // // // console.log(x)
// // // // // 5. Null  (the difference between null and undefined)
// // // // //6. Symbol
// // // // //7. BigInt

// // // // //reference data types  
// // // // //Arrays
// // // // let colors= ["red", 'blue', 'green', true, 45, 'yellow', [1,2,3, ['a','b']]]
// // // // console.log(colors)
// // // // console.log(colors[0], colors[1], colors[2])
// // // // console.log(colors[3])
// // // // console.log(colors[6][1])
// // // // console.log(colors[6][3][1])

// // // // //Objects
// // // // let bruceDog= {
// // // //     name: "Billy",
// // // //     breed: "Bulldog",
// // // //     age: 3,
// // // // }

// // // // let princessDog= {
// // // //     name: "Bella",
// // // //     breed: "Poodle",
// // // //     age: 2,
// // // // }

// // // // console.log(bruceDog)
// // // // console.log(bruceDog.name)
// // // // console.log(princessDog["name"])

// // // // //Functions

// // // // //Static and Dynamic Typing
// // // // // let myScore="85"

// // // // // let myNewScore: number= "85"


// // // // //MATHS AND PROGRAMMING
// // // // const myInteger= 5;
// // // // const myFloat= 5.565555;

// // // // console.log(typeof(myInteger))
// // // // console.log(typeof(myFloat))

// // // // const myFloatToTwoDecimalPlaces= myFloat.toFixed(2)
// // // // console.log(myFloatToTwoDecimalPlaces)
// // // // console.log(typeof(myFloatToTwoDecimalPlaces))
// // // // let sum = Number(myFloatToTwoDecimalPlaces) + 5
// // // // let newSum= myFloatToTwoDecimalPlaces + "5"
// // // // console.log(sum)
// // // // console.log(newSum)
// // // // console.log(typeof(sum))

// // // // let myNumber= "74"
// // // // myNumber= Number(myNumber) + 3
// // // // console.log(myNumber)

// // // // //ARITHMETIC OPERATORS

// // // // //Addition
// // // // //subtraction
// // // // //mulplication
// // // // //division
// // // // //modulus
// // // // console.log(8 % 3)
// // // // //exponentiation
// // // // console.log(2 ** 3)
// // // // console.log(Math.pow(2,3))

// // // // const num1= 10;
// // // // const num2= 3;

// // // // 9 * num2 
// // // // let result= num1 / num2
// // // // console.log(result)


// // // // (num1 + num2) * 8/2
// // // // (num2 % 3) * num2

// // // // let newNum= 5;
// // // // newNum++ //newNum= newNum + 1
// // // // newNum--

// // // let a = 3;
// // // let b = "3";

// // // // a +=4 //a= a+4
// // // // b -= 2 //b= b-2
// // // // a *= 3 //a= a*3
// // // // b /= 2 //b= b/2

// // // //COMPARISON OPERATORS
// // // // ==, ===, !=, !==, >, <, >=, <=
// // // // == checks for equality of value
// // // console.log(a == b)  //loose equality
// // // console.log(a === b) //strict equality

// // // // !== checks for inequality of value
// // // console.log(a != b)  //loose inequality
// // // console.log(a !== b) //strict inequality
// // // //strict equality checks for equality of value and data type
// // // console.log (console)


// // // //LOGICAL OPERATORS

// // // // &&, ||, !, ??, ?:
// // // // && checks if both conditions are true
// // // console.log(5 > 3 || 6 > 3 && 7 <3)
// // // console.log(5 > 3 && 6 < 3 || 7<3)

// // // // || checks if one of the conditions is true
// // // // console.log(5 > 3 || 6 > 3)
// // // // console.log(5 > 3 || 6 < 3)

// // // // ! checks if the condition is false
// // // // console.log(!(5 > 3))
// // // // console.log(!(5 < 3))

// // // // ?? checks for nullish values //nullish coalescing operator
// // // // let x= null; 
// // // // let y= x ?? "default value" //if x is null or undefined, y will be assigned the default value
// // // // console.log(y)

// // // //truthy and falsy values
// // // //Falsy values: 0, "", null, undefined, NaN, false
// // // //Truthy values: everything else

// // // // console.log(!!true) //false
// // // // console.log(!!false) //true
// // // // console.log(!!0) //true
// // // // console.log(!!"") //true
// // // // console.log(!!null) //true
// // // // console.log(!!undefined) //true
// // // // console.log(!!NaN) //true
// // // // console.log(!!"Cat")

// // // //Short-circuit evaluation
// // // //if the first condition is true, the second condition is not evaluated
// // // //if the first condition is false, the second condition is evaluated

// // // //falsy && anything = falsy
// // // //truthy && anything = anything
// // // //truthy || anything = truthy
// // // //falsy || anything = anything
// // // //nonnullish ?? anything = nonnullish
// // // //nullish ?? anything = anything

// // // // console.log(true || "Hello")

// // // //ternary operator (conditional operator)
// // // //condition ? value if true : value if false

// // // // let age= 1000000;
// // // // let message= age >= 18 ? "You can vote" : "You can't vote"
// // // // console.log(message)

// // // // const status= age>= 18 ? "adult" : "minor"
// // // // console.log(status)

// // // //operator precedence
// // // //1. ()
// // // //2. ++, --, - (unary operators)    
// // // //3. ** (exponentiation)
// // // //4. *, /, % (multiplication, division, modulus)
// // // //5. +, - (addition, subtraction)
// // // //6. <, >, <=, >= (comparison)
// // // //7. ==, ===, !=, !== (equality)
// // // //8. && (logical AND)
// // // //9. || (logical OR)
// // // //10. ?? (nullish coalescing)
// // // //11. ? : (ternary)
// // // //12. =, +=, -=, *=, /=, %= (assignment)
// // // //13. , (comma)
// // // //14. ! (logical NOT)
// // // //15. delete, typeof, void, yield, await (unary operators)
// // // //16. in, instanceof (binary operators)
// // // //17. new, super (new operator), ... (spread operator), ... (rest operator),

// // // //Control flow
// // //block statement
// // // {
// // //     statement1;
// // //     statement2;
// // // }


// // //while loop

// // // while(condition==true){
// // //     //execute statement
// // // }

// // //program1
// // // let x= 0; //global scope
// // // while (x < 10) {
// // //     let y= 1; //initialize
// // //     console.log(x)
// // //     x++
// // //     y++
// // //     console.log(y)
// // // }

// // // //program2
// // // let x= 0; //global scope
// // // let y= 1;
// // // while (x < 10) {
// // //     console.log(x)
// // //     x++
// // //     y++
// // //     console.log(y)
// // // }

// // //if else statement
// // // if (condition) {
// // //     //execute statement
// // // } else {
// // //     //execute statement
// // // }

// // //if (condition) {
// // //     //execute statement  
// // // } else if (condition) {
// // //     //execute statement
// // // } else if (condition) {
// // //     //execute statement  
// // // } else { 
// // //     //execute statement
// // // }

// // // if (condition){
// // //     //statement
// // // })

// // // if (){
// // //     //execute statement
// // // }

// // // let age= 1000000
// // // let message;
// // // if (age < 11) {
// // //     message= "You are a kid"
// // //     console.log(message)
// // // } else if(age>= 11 && age < 18) {
// // //     message= "You are a teenager"
// // //     console.log(message)  
// // // } else  {
// // //     message= "You are an adult"
// // //     console.log(message)
// // // }

// // //switch statement
// // // switch (expression) {
// // //     case label1:
// // //         //execute statement
// // //         break;
// // //     case label2:
// // //         //execute statement
// // //         break;
// // //     case label3:
// // //         //execute statement
// // //         break;
// // //     default:
// // //         //execute statement
// // // }

// // // let fruitType= "carrot"

// // // switch (fruitType){
// // //     case "apple":
// // //         console.log("Apple is red")
// // //         break;
// // //     case "banana":
// // //         console.log("Banana is yellow")
// // //         break;
// // //     case "orange":
// // //         console.log("Orange is orange")
// // //         break;
// // //     default:
// // //         console.log("I don't know the color of that fruit")
// // // }
// // // console.log("Is there any other color you'd like")

// // //error handling/exception handling
// // //try, catch, finally

// // // throw "Error404";
// // // throw "42"
// // // throw true;
// // // throw{
// // //     toString(){
// // //         return "I am an object"
// // //     }
// // // }

// // // let monthName;
// // // let month=100
// // // function getMonthName(month){
// // //     month-- //decrement by 1
// // //     const months= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// // //     if (months[month]){
// // //         console.log(months[month])
// // //         return months[month]
// // //     }else{
// // //     throw new Error("Invalid month number")
// // //     }
// // // };

// // // try{
// // //     monthName= getMonthName(month) //could throw an exception
// // // } catch (e){
// // //     monthName= "unknown"
// // //     console.log(e)
// // //     console.log(e.name)
// // //     console.log(e.message)
// // // } finally{
// // //     console.log(`The month name is  ${monthName}`)
// // // };


// // // const actors= ["jennifer", "keane"]

// // // actors[2]= "james"
// // // console.log(actors)
// // // actors=[] //this will throw an error because you can't reassign a constant variable

// // // 3===3.0
// // // 3=="3"
// // // 3==="3"

// // // 0 === "null" //false
// // // "hello"=== "Hello" //false
// // // "hello"== "Hello"

// // // var x = [1,2,3]   
// // // var y = x
// // // var z = y

// // // y === x
// // // z === x
// // // z === y

// // //ITERATIONS AND LOOPS
// // //for loop
// // // for (initialization; condition; increment/decrement){
// // //     //execute statement
// // // }

// // for (let step=1; step < 5; step++){
// //     console.log(`walking east ${step} step`)
// // }


// // //Do-while loop

// // // do {
// // //     //execute statement
// // // } while (condition);

// // // let i= 0;
// // // do {
// // //     i +=1;
// // //     console.log(i)
// // // } while (i < 5)

// // //While Loop

// // // while (condition){
// // //     //execute statement
// // // }

// // // let i=0;

// // // while (i < 5){
// // //     i +=1;
// // //     console.log(i);
// // // };

// // // let n=0; //counter variable
// // // let x=0; //1 , 3, 6
// // // while (n < 3){
// // //     n++;
// // //     x += n;
// // //     console.log(x)
// // // }

// // // while (true){
// // //     console.log("Hello world")
// // // }

// // //Break statement

// // // let x= 0;
// // // let z=0;
// // // labelCancelLoops: while (true){
// // //     console.log ("Outer loops: ", x); //9
    
// // //     x +=1; //10
// // //     z=1; //1
// // //     while (true){
// // //         console.log("Inner loops: ", z); //1, 2...9
// // //         z +=1; //2..10
// // //         if (z===10 && x===10){
// // //             break labelCancelLoops;
// // //         } else if (z===10){
// // //             break;
// // //         }
// // //     }
// // // }

// // // continue statement
// // // for (let i=0; i<10; i++){
// // //     if (i===3){
// // //         continue;
// // //     }
// // //     console.log(i)
// // // }

// // // let i= 0; //0,1,2,3,4,
// // // let n= 0;

// // // while (i < 5){
// // //     i++; //1,2,3,4
// // //     if (i===3){
// // //         continue;
// // //     }
// // //     n += i; //1, 3, 7, 12
// // //     console.log(n)
// // // }

// // // let i=0;
// // // let j=10;
// // // checkIandJ: while (i < 4){ 
// // //     console.log(i) //0
// // //     i +=1; //1
// // //     checkJ: while (j > 4){
// // //         console.log(j) //10, 9
// // //         j -=1; // 9, 8
// // //         if (j % 2===0){
// // //             continue checkJ;
// // //         }
// // //         console.log(j, " is odd")
// // //     }
// // //     console.log("i= ", i)
// // //     console.log("j= ", j)
// // // }

// // // For...of statement

// // // let arr= [3, 5, 7];

// // // for (let i=0; i<arr.length; i++){
// // //     console.log(arr[i])
// // // }

// // // const name= "james"
// // // for (let i=0; i<name.length; i++){
// // //     console.log(name[i])
// // // }

// // // for (let i of name){
// // //     console.log(i)  
// // // }
// // let arr=[3, 5, 7];

// // arr.new = "hello"

// // for (let i of arr){
// //     console.log(i)
// // }

// // for (let i in arr){
// //     console.log(i)
// // }

// // //For...in statement
// // // for (variable in object){
// // //     statement
// // // }
// // let car= {
// //     make: "Toyota",
// //     model: "Corolla",
// //     year: 2020
// // }

// // for (let key in car){
// //     console.log(key, car[key])
// // }

// // Functions
// //function declaration, function expression, arrow function

// // function functionName (parameter1, parameter2){
// //     //execute statement      
// // }

// // function sumNumbers (a,b){
// //     console.log(a + b)
// // }

// // const newResult=sumNumbers(3,5)
// // console.log(newResult)

// // function square (x){
// //   return x * x
// // }

// // const result= square(5)
// // console.log(result * 10)

// // const car= {
// //     make: "Toyota",
// //     model: "Corolla",
// //     year: 2020
// // }

// // function getCar(car){
// //     car.make= "Honda";
// // }

// // console.log(car.make)
// // getCar (car)
// // console.log(car.make)

// // function getArea(width, height){
// //     return width * height
   
// // }
// // getArea (5, 10)

// // let arr= [3, 5, 7]
// // function myFunc (arr){
// //     arr[0]= 100
// // }

// // console.log(arr[0])
// // myFunc(arr)
// // console.log(arr[0])

// // function addSquare (a,b){
// //     function square (x){
// //         return x * x
        
// //     }
// //     return square(a) + square(b)
    
// // }

// // addSquare (3, 4)

// //arguments are always passed by values
// //Code defined after the return statement will not be executed
// // arrow function do not have their own "this" value or arguments object
// // arrow functions and function declarations cannot call themselves recursively

// //Function Expression
// const square= function(num){
//     return num * num
// }

// // const factorial= function fac(n){
// //     return n < 2 ? 1 : n * fac(n-1)
// // }

// // console.log(factorial(3))

// function map (f,a){
//     const result= new Array(a.length)
//     for (let i=0; i<a.length; i++){
//         result[i]= f(a[i])
//     }

//     return result
// }

// const cubedFunc= function cubed(x){
//     return x * x * x
// }

// const numbers =[0, 1, 2, 5, 10]
// const cubedNumbers= map(cubedFunc, numbers);
// console.log(cubedNumbers)

// // let newFunc;

// // if (num===0){
// //     newFunc=function(car){
// //         car.make="Bugatti"
// //     };
// // }

// //Invoking functions
// function factorial (n){
//     if (n===0 || n===1){
//         return 1;
//     } else {
//         return n * factorial(n-1); 
//     }
// };
// console.log(factorial(1))
// console.log(factorial(2))
// console.log(factorial(3))
// console.log(factorial(4))
// console.log(factorial(5))

// function loop(x){
    
//     if (x>=10){
//         return;
//     }
//     loop (x + 1)
// }

// loop(0)

// //arrow functions
// const sum= (a,b) => a + b;

// const squares= x => x * x;

// const greet= () => "Hello world";

// const cubes= (x) => {
//     const result= x * x * x;
//     return result
// }

// console.log(sum(3,5))
// console.log(squares(5))
// console.log(greet())
// console.log(cubes(3))

// const a =["hydrogen", "helium", "lithium", "beryllium"];

// const a2= a.map(function(s){
//     return s.length
// })
// console.log(a2)

// const a3= a.map(s=>s.length)

// console.log(a3)

// //Function Parameters
// //default parameter and rest parameter

// // function multiply (a,b){
// //     b = typeof b != "undefined" ? b : 1;
// //     return a * b;
// // }

// // console.log(multiply(5))

// // function multiply(a, b=1){
// //     return a * b
// // }


// //rest parameters

// function multiply (multiplier, ...Args){
    
//     return Args.map(x=>multiplier * x)
// }

// const arr= multiply (2, 1, 2, 3,6,7,7,8)
// console.log(arr)

// //this value points to an object when a regular function is invoked as a method of that obejct

// function getThis(){
//     return this
// }

// const obj1= {name:"obj1"}

// obj1.getThis=getThis

// console.log(obj1)

// console.log(obj1.getThis())

// function Person(){
//     //The Person() constructor defines `this` as itself
//     const self= this
//     self.age=0;
    

//     setInterval(function growUp(){

//         self.age++;
//         // console.log(self)
//     }, 1000)
// console.log(self)
// }

// const p= new Person()
// console.log (p)

// //Indexed Collections
// const num= [1,4,5]
// const emp= new Array (6) 
// const emp2= new Array("john", "jude")
// emp[0]="Gina"
// emp[1]="Rina"
// emp[2]="Mina"
// emp[3]="Tina"
// console.log(emp)

// // const emp={
// //     0 : "Gina",
// //     1 : "Rina"
// // }
// const colors= ["blue", "gray", "white"]
// colors[3]= "red"
// colors[4]="purple"
// console.log(colors)
// for (let i=0; i<colors.length; i++){
//     console.log(colors[i])
// }

// const paragraphs= document.getElementsByTagName('p')
// for (let i=0; i< paragraphs.length; i++){
//     console.log(paragraphs[i])
// }

// for (let color in colors){
//     console.log(color)
// }
// colors.forEach(color=>console.log(color))

//Array methods
//CONCAT

// let myArr=["1", "2", "3"]
// let newArr=[1, 2, 3, true, null]

// let myArray= myArr.concat(newArr)

// console.log(myArray)

// //JOIN
// const list= myArr.join("-")
// const newList=newArr.join("*")
// console.log(newArr)
// console.log(newList)
// console.log(list)
// console.log(typeof(list))

//PUSH
// const result=newArr.push(4,5,6)
// console.log(newArr)
// console.log(result)

// //POP()
// const popedValue=newArr.pop()
// console.log(newArr)
// console.log(popedValue)

// //SHIFT
// const shiftValue=newArr.shift()
// console.log(newArr)
// console.log(shiftValue)

// //UNSHIFT
// const unshiftResult=newArr.unshift(1)
// console.log(newArr)
// console.log(unshiftResult)

// //SLICE
// const sliceValue=newArr.slice(1, newArr.length)
// console.log(newArr)
// console.log(sliceValue)

// //AT
// const atValue= newArr.at(-3)
// console.log(atValue)

//SPLICE
//modifies the content of an array
//removes existing elements
//replace existing elements
//adds new elemnt in place
//An array containing the deleted values

//splice (start) //if start > length of the array, nothing will be deleted the method will behave as an adding function
//splice (start, deletecount)
//splice (start, deletecount, item1)
//splice (start, deletecount, item1....ItemN)

// //Example 1
// const months= ["jan", "March", "April", "June"]
// const newResult=months.splice(0, 2, "feb")
// console.log(months)
// console.log(newResult)

// //Example 2
// const myFishes= ["angel", "clown", "mandarin", "sturgeon"]
// const removed= myFishes.splice(-2, 1, "drum", "delicious")

// console.log(myFishes) //[]
// console.log(removed) //[]

// //Reverse
// const reversed=myFishes.reverse()
// console.log(myFishes)
// console.log(reversed)

// //Flat()
// let numArr=[1,2,3,[4, 5,[6, 7,[8, 9]]]]
// numArr=numArr.flat(3)

// console.log(numArr)

// const myObj={
//     favoriteNumber: 42,
//     isDeveloper:true,
//     firstName: "Oh"
// }

// const propDesc= Object.getOwnPropertyDescriptor(myObj, "favoriteNumber")
// console.log(propDesc)
// const anotherObj={}
// Object.defineProperty(anotherObj, "fave", propDesc )
// console.log(Object.getOwnPropertyDescriptor(anotherObj, "fave"))

// console.log(anotherObj.fave)

// const newArray= new Array(3)
// console.log(newArray)

// let myList= [23, 42, 100] //3

// myList[14]="Hello"
// console.log(myList[9])
// console.log(myList.length)

//Sort()
// const myArray= ["Wind", "Rain", "Fire", "Air"]
// let sortedResult=myArray.sort()
// console.log(myArray)
// console.log(sortedResult)

// const sortFn= (a,b)=>{
//     if (a[a.length-1] < b[b.length-1]){
        // return -1; //means a should come before b
//     } else if (a[a.length-1] > b[b.length-1]){
//         return 1; // means that a shoud come after b
//     }
//     return 0
// };

// (a,b)=> a-b 
// const result= myArray.sort(sortFn)
// console.log(result)

// const array1= [1, 30, 4, 21, 1000]
// console.log(array1.sort())

// const numberArray=[40,1,5,200]; //1,5,40,200
// const numericStringArray=["80", "9", "700"]
// const mixedNumericArray=["80", "9", "700", 40,1,5,200]
                        
// function compareNumbers (a,b){
//     return a-b
// }

// 200,40,5, 1

// console.log(numberArray.sort())
// console.log(numberArray.sort(compareNumbers))

// console.log(numericStringArray.sort())
// console.log(numericStringArray.sort(compareNumbers))

// console.log(mixedNumericArray.sort())
// console.log(mixedNumericArray.sort(compareNumbers))

//Sorting Array of objects
// const items=[
//     {name: "Edward", value: 21},
//     {name: "Sharpe", value: 37},
//     {name: "And", value: 45},
//     {name: "The", value: -12},
//     {name: "Magnetic", value: 21},
//     {name: "Zeroes", value: 37},
// ]

// //sort by value
// items.sort((a,b)=> a.value-b.value)

// //sort by name
// items.sort((a,b)=>{
//     const nameA= a.name.toUpperCase()
//     const nameB= b.name.toUpperCase()
//     if(nameA < nameB){
//         return -1
//     } else if(nameA > nameB){
//         return 1
//     }
//     return 0;

// })

// //indexOf
// // const a=["a", "b", "c", "d", "a", "b"]

// // console.log(a.indexOf("b"))
// // console.log(a.indexOf("b", 2))
// // console.log(a.indexOf("z"))

// // //lastIndexOf() 
// // console.log(a.lastIndexOf("b", 4))

// // //forEach 
// // const arr= ["a", "b", "c"]

// arr.forEach(element=>{
//     console.log(element.toUpperCase())
// })

//map
// const mappedArr=arr.map(element=> element.toUpperCase())

// console.log(arr)
// console.log(mappedArr)

// const numbers= [1,4,9]
// const root= numbers.map(num=>Math.sqrt(num))
// console.log(root)

// const kvArray=[
//     {key:1, value:10},
//     {key:2, value:20},
//     {key:3, value:30}
// ]
// const reformatArray=kvArray.map(({key, value})=> ({[key]:value}));
// console.log(kvArray)
// console.log(reformatArray)

//Sort with Map
//traverse the array once
//extract the actual values used for sorting inot a temp arr
//sort the temp arr
//transverse the temp arr to achieve the right order

//the array to sort
// const data=["delta", "alpha", "charlie", "bravo"]

// const someSlowOps= value=> value.toUpperCase()

//temp arr hold obj position and sort value
// const mapped= data.map((v, i)=>{
//     return {i, value: someSlowOps(v)}
// })

// console.log
// console.log(mapped) //0000000

// //sort the mapp arr containing the reduced val
// const newMapped=mapped.sort((a,b)=>{
//     if(a.value<b.value){
//         return -1
//     } else if(a.value > b.value){
//         return 1
//     }
//     return 0
// })
// console.log(newMapped)

// //newMapped=Mapped

// const newResult= mapped.map((v)=>data[v.i])
// console.log(newResult)

// const numbers=[3, 1, 4, 1,5]
// // const mappedNum= numbers.map((e, i)=>{
// //     return {i, value: e * e}
// // })

// // console.log(mappedNum)
// const sorted=numbers.sort((a,b)=>a-b);
// console.log(sorted)
// sorted[0]=10
// console.log(numbers[0])



// const numbers= [3, -1, 1, 4, 1, 5, 9, 2, 6]
//                                             //  [3,1,4,1,5,9,2,6]
// const averaged= numbers.filter((num)=>num>0).map((num, idx,arr)=>{
    
//     const prev= arr[idx-1]
//     console.log(`Prev: ${prev}`)
//     const next= arr[idx + 1] 
//     console.log(`Next: ${next}`)
//     let count=1;
//     let total= num //1
//     console.log(`Total:${total}`)
//     if (prev !== undefined){
//         count++ 
//         console.log(`PrevCount: ${count}`)
//         total +=prev //4
//         console.log(`PrevTotal: ${total}`)
//     }

//     if(next !==undefined){
//         count++; //2
//         console.log(`NextCount: ${count}`)
//         total+=next //
//         console.log(`NextTotal: ${total}`)
//     }
//     const average= total/count
//     console.log(average)

//     return Math.round(average * 100)/100
// })

// console.log(averaged)




// //filter method
// const a1= ["19", 10, "20", 20, "30", 30]
// const a2= a1.filter((item)=> typeof item==="number")
// console.log(a2)

// //flatmap

// const a3= ["a", "b", "c"]
// const a4= a3.flatMap((item)=> [item.toUpperCase(), item.toLowerCase()])
// console.log(a4)

// //find
// const findNum=a1.find((item)=> typeof item==="number")
// console.log(findNum)

// //findLast
// const findLastItem=a1.findLast((item)=> typeof item ==="number")
// console.log(findLastItem)

// //findIndex
// const findNumIdx=a1.findIndex((item)=> typeof item==="number")
// console.log(findNumIdx)

// //findLastIndex
// const findLastItemIdx=a1.findLastIndex((item)=> typeof item ==="number")
// console.log(findLastItemIdx)

// //every()
// function isNumber (val){
//     return typeof val === "number"
// }

// console.log(a2.every(isNumber))

//some()

// console.log(a1.some(isNumber))

//reduce
//reduce(callback)
//reduce(callback, initialvalue)
//callbaclk(accumulator, currentval, currentindex, array)

// const a= [10, 20, 30, 40]

// const callbk=function(acc, curval){
//     console.log(acc)
//     console.log(curval)
//     return acc + curval
// }
// const total= a.reduce(callbk);

// console.log(total)

// const obj= [{x:1}, {x:2}, {x:3}]

// const sum= obj.reduce((acc, curval)=>acc+ curval.x, 0)
// console.log(sum)
// //const val= array.reduce((acc, curr)=> acc + curr, initialval)

// //let val=initialval
// //for (const cur of array){
// // val= val + cur}

// const names= ["Alicia", "Brian", "Bruce", "Laureen"]

// const countedNames= names.reduce((allNames,name)=>{
//     const currCount=Object.hasOwn(allNames,name)?allNames[name]:0
//     return{
//         ...allNames,
//         [name]: currCount +1
//     }
// }, {})

// //reduceRight()


// Multidimensional Arrays
// let activities= [
//     ["work", 9],
//     ["Eat", 1],
//     ["travel", 2],
//     ["gamble", 1],
//     ["Sleep", 9]
// ];

// console.table(activities)

// console.log(activities[0][1])

// activities.push(["study", 10])

// console.table(activities)

// activities.splice(1, 0, ["programming", 1])
// console.table(activities)

// activities.forEach(activity=>{
//     let percentage= ((activity[1]/24) *100).toFixed()
//     activity[2]= `${percentage} %`
// })

// console.table(activities)

// activities.pop()

// console.table(activities)

// activities.forEach(activity=>{
//     activity.pop(2)
// })

// console.table(activities)

// //Iterating over elements of the multidimensional array

// for (let i=0; i<activities.length; i++){

//     var innerArrayLength= activities[i].length

//     for (let j=0; j<innerArrayLength; j++){
//         console.log(`[${i} , ${j} ]= ${activities[i][j]}`)
//     }

// }
// console.log("--------FOREACH--------------")
// activities.forEach((activity)=>{
//     activity.forEach((item)=>{
//         console.log(item)
//     })
// })



// const a= new Array(4); //create an arr with length of 4
// console.log(a.length)

// for (let i=0; i<4; i++){
//     a[i]=new Array(4);
//     for (let j=0; j<4; j++){
//        console.log( a[i][j]= `[${i}, ${j}]`)
//     }
// }

//spread and rest operator, destruturing 

//spread in objects

// const obj1={ele: "bar", x:10};
// const obj2= {bar: "baz", y: 13}

// const mergedObj={x:41, ...obj1, ...obj2, y: 9}
// console.log(mergedObj)

// const isSummer=true;
// const fruits={
//     apple:10,
//     banana:5,

//     ...(isSummer?{watermelon:30}: {}),
// }

// console.log(fruits)
// // const clonedObj={...obj}
// // console.log(clonedObj)

// //rest parameter
// function sum(...theArgs){
//     let total= 0;
//     for (const arg of theArgs){
//         total +=arg
//     }
//     return total
// }

// console.log(sum(1,2,3))
// console.log(sum(1,2,3,5,6,6,7))

// //restrictions using rest
// //it has to be the last paramenter
// //a function definition can only have one rest parameter
// //trailing commas are not allowed afeter the rest parameter
// //the rest paarmeter cannot have a default value

// function myFun(a, b, ...manyMoreArgs){
//    console.log("a", a)
//    console.log("b", b)
//    console.log("manyMoreArgs", manyMoreArgs)
// }

// myFun("one", "two", "three", "four", "five", "six")


// //destructuring
// // let a, b, rest

// // [a,,b,...rest]=[10,20,30,40,50]
// // console.log(b)
// // console.log(rest)

// // const obj={prop1:x, prop2:y, prop3:z};

// // const {prop1:x, prop2:y,prop3:z }= obj

// //const x= obj.prop1

// //default value

// const [a=1]=[]
// console.log(a)
// const {b=console.log("hey there")}= {b:undefined}
// console.log(b)

// const {c=5}={c:null}
// console.log(c)

// const [first,...others]=[1,2,4]
// console.log(first)

// const {d, ...others2}={d:1, b:2, c:3}

// console.log(d)

// const foo=["one", "two", "three"]

// const [red, yellow, green, blue, purple]=foo;

// console.log(red)
// console.log(yellow)
// console.log(green)
// console.log(blue)
// console.log(purple)

// let varA= 1;
// let varB= 3;

// varA=varA+varB//4

// varB=varA-varB//1
// varA= varA- varB//3

// console.log(varA)
// console.log(varB)

// let myArray= [-12, -2, 55, 68, 80];

// // const temp= myArray[0]
// // myArray[0]=myArray[1]
// // myArray[1]=temp

// // console.log(myArray)

// [myArray[0], myArray[2]]=[myArray[2], myArray[0]]

// console.log(myArray)


// // [varA,varB]=[varB,varA]

// // console.log(varA)
// // console.log(varB)

// function f(){
//     return [1,3,4,5]
// }

// const [argA, ,argB]=f()
// console.log(argA)
// console.log(argB)

// const[singleVal]=f()
// console.log(singleVal)

// const newMap=new Map([
//    [1,2],
//    [3,4] 
// ]);
// const [j,k]= newMap

// console.log(j)
// console.log(k)

// // const obj= {0:"a", 1:"b", length: 2};

// // const [m,n]=obj

// //object destructuring

// const user={
//     id:2,
//     isVerified:true
// }

// const {id, isVerified}=user;
// console.log(id)
// console.log(user)

// const o={
//     p:42,
//     q:true
// }
// const {p:full, q:bar=true}= {p:42, q:true}

// console.log(full)
// console.log(bar)


// //destructuring nested objects 


// //destructuring nested arrays


//DOCUMENT OBJECT MODEL

// const table=document.querySelectorAll("table")
// console.log(table[0])
// console.log(table.item(1))
// alert(paragraph[0].nodeName)

console.log(document.title)

//Fundamental Data Types (DOM)

//Document
console.log(document)

//Node

//Element
document.createElement("p")

//NodeList

//Attr

//NamedNodeMap
console.log(NamedNodeMap)
console.log(HTMLTableElement)

const table= document.getElementById("table");

const tableAttr= table.attributes
console.log(tableAttr)

for (let i=0; i<tableAttr.length; i++){
        if (tableAttr[i].nodeName.toLowerCase()==="border"){
                table.border="3"
}
}

table.summary="note:increased border"

console.log(document)

//Core Interfaces

//document , window

// document.querySelector()
// document.querySelectorAll()
// document.createElement()
// Element.innerHTML()
// Element.setAttribute()
// Element.getAttribute()
// EventTarget.addEventListener()
// EventTarget.removeEventListener()
// HTMLElement.style
// Node.appendChild()
// window.onload()
// window.scrollTo()

const story= document.querySelector(".story")
console.log(story)
const setText= document.querySelector(".set-first-para")
const resetText=document.querySelector(".reset")

setText.addEventListener("click", ()=>{
        story.textContent="Twas a dark and beautiful night..."
        alert("paragraph content changed")
})

resetText.addEventListener("click", ()=>{
        story.textContent=""
        alert("first paragraph content cleared")
})

document.addEventListener("click", ()=>{
        alert("Don't do this")
})