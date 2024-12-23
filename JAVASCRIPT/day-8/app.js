//! USE STRICT

"use strict";
// a=10;
// console.log(a);

// function demo(a,a,b){
//     console.log(a+b);
// }
// demo(10, 20, 30);   

//* ----------------------------------------------

//! VARIABLE HOSTING
// var a
// let b
// const c /666

console.log("start");

console.log(a);
//console.log(b);

 var a=20
 let b=30
 const c=40

 console.log(a,b,c);

//! function HOSTING

demo()

function demo(){
    let c=400
    console.log(c);
    console.log("demo fun");
    return 100
}

// x()
// let x=() => "arr"
// y()
// var y= function (){
//  console.log("fn");
// }

//*-------------------------------------------------------

//! Immediate invoke fn expression  
// let n=30

// (function (a,b){
//     let d=30
//     console.log("IIFE")
//     console.log(a,b,d)
// })(10,20)

// (() => {
//     let a=300
//     console.log(a)
//     console.log("arr fn")
// })()

//* -----------------------------------------------------------

//! is NaN(a)  Number.isNAN()  

console.log(isNaN(100))
console.log(Number.isNaN(100))

console.log(isNaN(NaN))
console.log(Number.isNaN(NaN))

console.log(isNaN("100"))
console.log(Number.isNaN("100"))

console.log(isNaN("Str"))
console.log(Number.isNaN("str"))

console.log(isNaN(true))


