//! concat:

let x = [10, 20];
let y = [30, 40];
let z = [50, 60];

let r1 = x.concat(y, z);
console.log(r1);
console.log(x);

//! indexOf():

let a = [10, 20, 30, 40, 20, 10, 30];
let r2 = a.indexOf(20, 3);
console.log(r2);

//! lastindexOf:

let r3 = a.lastIndexOf(30, 5);
console.log(r3);

//!reverse:

let ar = [100, 90, 20, 40, 50, 30];
ar.reverse();
console.log(ar);

//! flat:

let v = [10, "str", [(30)[(true, [1000], false)], 90n], 40, 10n];
let r4 = v.flat(2);
console.log(r4);

//! includes():

let newAr = ["str", 10n, true, false, { name: "abc" }, 100, 200];
let r5 = newAr.includes(10n, 2);
let r6 = newAr.includes({ name: "abc" });

console.log(r5);
console.log(r6);

//! fill():

let ac = [10, 20, 30, 10, 40, 50];
ac.fill(10, 1, 5);
console.log(ac);

//~ Array Higher order function:

//! find:

let arc = [20, 10, 30, 40, 69, 56];
let fn = (v, i, arc) => {
  console.log(v);
  return v > 30;
};

let r7 = arc.find(fn);
console.log(r7);

let c = arc.findIndex((m, i, arc) => m > 40);
console.log(c);
