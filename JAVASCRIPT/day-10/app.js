//! literal ways;

// var arr = [10, 20, 30];


//! using array constructor

// const ar = new Array(100, 200, 300);
// ar[0] = 100;
// ar[1] = 200;
// ar[2] = 300;
// console.log(ar);

//! using Array.of();

let a = Array.of(200, 300, 400);
console.log(a);

console.log(new Array(6));
console.log(Array.of(6));

//! PUSH

// let array = [10, 20];
// let r1 = array.push(100, "str", 10n);

// console.log(array);
// console.log(r1);
/
//! unshift

// let fruits = ["mango", "banana", "watermelon"];
// let r2 = fruits.unshift("pineapple", "apple");

// console.log(r2);
// console.log(fruits);

//! pop and shift

 let eName = ["sachin", "rohit", "dhoni", "hardik"];
 eName.pop();
 let r3 = eName.pop();
 console.log(eName);
 console.log(r3);

 let r4 = eName.shift();
 console.log(r4);
 console.log(eName);

//! Slice

// const c = [10, 20, 30, 40, 50, 60, 70];
// console.log(c.slice(4));
// let c1 = a.slice(2, 6);
// console.log(c1);
// console.log(c);

// console.log(c.slice(-4, -1));

// //! splice

let ar = [10, 20, 30];
let r5 = ar.splice(2, 0, 1000, 2000, 3000);
console.log(ar);
console.log(r5);

