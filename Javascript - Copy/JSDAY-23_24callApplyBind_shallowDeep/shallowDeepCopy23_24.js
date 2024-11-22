

let a = 10;
let b = a;
a = 100;
// console.log(a);
// console.log(b);

//! shallow copy

let o1 = {
  name: "Manish",
  id: 12,
  skill: ["js", "html"],
  isMarried: true,
  add: {
    loc: "london",
    home: 121,
  },
};

//* copying object reference
let copy1 = o1;

o1.id = 13;
console.log(copy1);

//!* using object.assign() method

let copy2 = Object.assign({}, o1);
o1.name = "Bunty";
o1.skill[0] = "bowler";

console.log(copy2);
console.log(copy2 == o1);

//* using for loop methods

let copy3 = {};
for (let ele in o1) {
copy3[ele]=o1[ele];
}
o1.name = "Bunty";
o1.skill[0] = "bowler";
console.log(copy3);
console.log(copy3 == o1);

// * using spread operator

let copy4={...o1}
o1.name = "Bunty";
o1.skill[0] = "bowler";
console.log(copy4);
console.log(copy4 == o1);







//*deep copy
let o2 = {
  name: "Manish",
  id: 12,
  skill: ["js", "html"],
  isMarried: true,
  add: {
    loc: "london",
    home: 121,
  },
};
//* two ways to deep copy

//* using structuredClone()

let copyObj = structuredClone(o2);
o2.name = "Manish Mehta";
console.log(copyObj);

//* using parse and stringify

let copyObjTwo = JSON.parse(JSON.stringify(o2));
o2.isMarried = false;
console.log(copyObjTwo);
