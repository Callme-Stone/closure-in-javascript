// let fruit = "apple";

// switch (fruit) {
//   case "banana":
//     console.log("i love eating banana")
//     break
//     case "orange":
//       console.log("i love eating orange");
//       break
//       case "mango":
//         console.log("i love eating mango");
//         break
//         default:
//         console.log("unknown fruit")
// }

// let age = "18";
// let canVote = (age >= 18) ? "Yes you can vote" : "No you cant vote"
// console.log(canVote);




  
  
  
// Function*********************************************************************************
  // JS function: it is a block of code design to perform a certain task
// Types of function:

// function declaration: creates a named function to start it.

// function functionName(){}

// eg:
// function greet(name){
//   console.log("hello", "+name + ");
//   }
 

  // Function expression: when you store a function in a variable

  // const functionName = function() {}

  // const functinName = function(){}


  
  // Arrow function(es6): provide more concise syntax to handle this key word differently compared to regular function 
//   const add = (a,b) => {
//     return a+b
//  }
//   console.log(add(5,4));
  

  // parameter are variable define in the function .
  // argument are values passed to the function when its called.

  // Function declaration eg:
// function sayHi(name){
//   console.log(`hello ${name}`);
  
// }
// sayHi("chapo")
// sayHi("soliu")
// sayHi("atew")

// const cohorts = (tutor,student) => {
//   const tutor1 = "jagun"
//   const tutor2 = "lai"
//   const student1 = "musa"
//   const student2 = "audu"
//   return console.log(`Mr. ${tutor1} is the tutor of the year, while Mr. ${student2} is part of the cohorts`);

// }
// cohorts()


// const tester = ()=> {
//   console.log(3+5)
  
  
// }
// tester()

// const logAge = (name,age) =>{
//   console.log(`${name} is ${age} years old.`);
  

// }
// logAge("joe",35)

// const select =() => {
//   const sentence = console.log("i love guns")
//   return sentence
  
  
// }
// select()

// let name2= "bebo" 

// const logName =() =>{
//   console.log(name2)
  

  
// }
// logName()
















// JS function : a block of codes designed to perform certain tasks, it is executed when it is called or invoked.

// function name() {
//   statement;
// }
// Types of functions:

// Function declaration:

//  function multiply(number){   //with parameter
//   return number*number
  
//  }
//  const result = multiply(5);
//  console.log(result);
 

function sum() {       //no parameter
  return 9+5
}
console.log(sum())


function subtraction(a,b) {    //function declaration with two parameters
  return a-b;
}
const subResult = subtraction(5,4);
console.log(subResult);

// assinging value to param

function division (c, d=7){
  return c/d;

}
console.log(division(21));

// Function Expression*********************************************
const greeting = function sayHi(name){
  console.log(`Hello ${name}`);
  
}
greeting("teddy")

//example
const addition= function sum(a,b){
  console.log(` ${2+5}`);
  
}
addition ()

//example
const testing = function sum(number){
  return number + number
}
console.log(testing(6))


//Arrow Function

const arrow = (x) => x*x;
console.log(arrow(4));

const example2 = (tutor, student) =>{
  const tutor1 = "OG";
  const tutor2 = "Teddy"

  const student1 = "Mubi";
  const student2 = "Rodi";

  return console.log(`Mr ${tutor2} is the tutor, while ${student1} is the gate-man`)

  
};
example2()



