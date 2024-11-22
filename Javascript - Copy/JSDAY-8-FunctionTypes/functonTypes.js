//!Anonymous function

// function(){
//     console.log("anonymous function");
// }

//! Named function

function named() {
  console.log("Named Function ");
}
named();

//! function with expression

let x = function () {
  console.log("function with expression");
};
x();

// ! arrow function

let arr = () => {
  console.log("ARROW FUNCTION");
  return "str";
};
arr();

//! IIFE

var st1 = "Javascript";
((a, b) => {
  var st1 = "java";
  console.log("IIFE");
  console.log(st1);
  console.log(a, b);
})(10, 20);

//! HOF
function HOF(a, b) {
  console.log("hi");
  console.log("hi");
  console.log(a("Arrow function IN HOF"),b)
}

HOF((X)=>X,25)
