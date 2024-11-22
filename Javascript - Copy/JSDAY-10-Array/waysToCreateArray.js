console.log("# 3 ways to create an array ");

//!Literal way
console.log("Literal way");

var arr=[10,20,50,false,null];
console.log(arr.length);
console.log(typeof arr);

//!Using array constructor
console.log("Using array constructor");

let a=new Array(10);
// if there is only one argument of number datatype then it is treated as length of an array //!(if it is other than number, considered as element )
//and if there are more then 1 argument then it is treated as elements of array  

let b=new Array(10n,true,"str",[10,20])
console.log(b);





// ! Array.of
// let newArr=Array.of("10",20,1n,(e)=>e);
// console.log(newArr);

// let newArr2=Array.of(10); //! one argument will considered as element too 
// console.log(newArr2);

// let num=10;
// var obj={name:"abc"};

//! array is object too , so to check datatype we have static method from class Array i.e Array.of()
// console.log(Array.isArray(num));
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));

// console.log(typeof obj);
// console.log(typeof arr);

 