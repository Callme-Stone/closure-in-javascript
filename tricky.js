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

