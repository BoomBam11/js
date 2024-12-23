//! number:

let n=200;
console.log(n);
console.log(typeof n);

let v=20.140;
console.log(typeof v);

//~ STRING:

let s1="hdgdjh9978657+!@$^";

console.log(s1);
console.log(typeof s1);
console.log(s1[1]);

let s2='javascript' 
console.log(typeof s2);

let s3=`java`;
console.log(typeof s3);
console.log("2+2");

console.log(s1.length);
console.log(`sum of 2 and 2 is ${2+2}`);
console.log(`string is ${s2}`);
console.log("sum of 2 and 2 is ${2+2}");
console.log("'hello' world");

//! boolean

let x=true;
console.log(typeof x);

let y=false;
console.log(typeof y);

//~ undefined:

let a;
console.log(a);
console.log(typeof a);

//! null

let o ={
    name: "abc",
    id: 120,
};

o=null;
console.log(typeof o);

//bigInt

let b=1000000000000000000000000n;
console.log(b);
console.log(typeof b);

let n1 =10n;
console.log(n1);

//! NaN

let n2 = 10 - "str";
console.log(n2);
console.log(typeof n2);
//--------------------------------------------------------------------------------------

//! TYPECASTING
//! IMPLICIT

console.log(10 + "10");  // number is converted into string
console.log("200" - 10);  // string is converted into number
console.log("str" - 400);  // NaN
console.log(100 / "10");  
console.log("5" * "5");
console.log(59 % "10");  