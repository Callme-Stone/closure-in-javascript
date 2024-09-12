//Global Scope: when the variable is declared at the top

const scope = 2;

const testScope = () => {
  const b = 10
  console.log(scope+ b)
  
}
testScope();

let num = 5;
const testNum = () => {
  console.log(num)
  num= 10
  
}
testNum()
console.log(num)


// Local Scope: this is when variable is declared within a function

function localScope(){
  const name = "OG"
  const isPresent = true;
  const potBellied = true;

  console.log(name,isPresent, potBellied);
  
}
localScope()



const someFunction = () => {
  const name = "yemi";

  const anotherFunction = (a) => {
    console.log(name);
    return a*a;
  };
  console.log(anotherFunction(5));
  
};
someFunction()

//Hoisting
hoistedFunction()

function hoistedFunction(){
  console.log("i am hoisted");
  
}

//Closure:
// it is a variable that remembers its variable from its outer scope, even after  the outer function as return this concept allows the inner function to have access to the variables of outer function even after the outer function has finished execution.

let hello = "you"
function outerFunction(outerVariable){
  return 
  function innerFunction(innerVariable){
    console.log(`outer Variable: ${outerVariable}`)
    console.log(`inner Variable: ${innerVariable}`)
  }
  innerFunction()
}

outerFunction()

// const newFunction = outerFunction("outside")
// newFunction("inside");

const outer = () => {
  const outerVar = "Hello"
  const inner = () => {
    const innerVar = "Joor"
    console.log(outerVar, innerVar);
  }
  return inner()
  
} 

outer()


const innit = () => {
  const hobby = "basketball"
  const displayHobby = () => {
    console.log(hobby)
  }
  return displayHobby
}

const ans = innit()
ans()

function checkMate(){
  let name = "Oluwaseyi"
  console.log(`Outer Function is for ${name}`)

  function checking (){
    console.log(`The user is ${name}`)
  }
  return checking
}
const chess = checkMate()
chess()

const outerFn = () => {
  const example = "Anything"
  console.log(example)

  const innerFn = () => {
    console.log("I am inner function")

    const nestedInnerFn2 = () => {
      console.log("I am nested inner function")
    }
    return nestedInnerFn2
  }
  return innerFn

} 
outerFn()
// const out = outerFn()
// out()

//STRING IN DETAILS
const single = 'This is a string written inside of a single quote'
console.log(single)
const double = "This is a string written inside of a double quote"
console.log(double)
const backticks = `This is a string written inside of a backticks quote`
console.log(backticks)

// Example 1
const single1 = '${2+2}'
console.log(single1)

const double1 = "${2+2}"
console.log(double1)

const backticks1 = `${2+2}`
console.log(backticks1)

// Example 2 NB: String inside string
const greetings = "I'm Emmanuel"
console.log(greetings)

// Example 3
const greetings2 = `Hi, I'm John, but people call me "Johnny"`
console.log(greetings2)

// Escape character
const greeting2 = 'Hi, I\'m Teddy but people call me \'Teddy-A\' '
console.log(greeting2)

// String length 
// Example 4 NB: return the length of string
const name1 = "Emmanuel Teddy, Alimi Muaz"
console.log(name1.length)

// Example 4
const firstLetter = name1[4]
console.log(firstLetter)

const lastLetter = name1[name1.length-8]
console.log(lastLetter)

// Change string case
