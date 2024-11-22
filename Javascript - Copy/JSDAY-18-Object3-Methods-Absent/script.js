//!object static methods

const data = {
  name: "anis shah",
  id: 10,
  skills: ["js", "java", "spring", "hibernate"],
  address: {
    pincode: 421203,
    location: "thane",
  },
  job: "developer",
  fn: () => {
    console.log("hiii");
  },
};

data.fn();

Object.freeze(data); //!we can not add update delete
Object.seal(data); //!we can only update

data.id = 200;
data.subject = "react";
delete data.address;

console.log(Object.isFrozen(data));
console.log(Object.isSealed(data));

let k = Object.keys(data);
console.log(k);

let v = Object.values(data);
console.log(v);

let en = Object.entries(data);
console.log(en);

let n1 = 100;
let n2 = 100;
console.log(n1 === n2);

let o1 = { name: "xyz" };
let o2 = { name: "xyz" };
console.log(o1 === o2);
