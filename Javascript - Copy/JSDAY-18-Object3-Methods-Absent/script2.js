let o1 = { name: "anis", id: "200" };
let address = { pinCode: 421023, location: "thane" };
let per = {
  percentage: 60,
};

let mergeObj = Object.assign(o1, address, per);
console.log(o1);
console.log(address);
console.log(mergeObj);

let n1 = { name: "xyz" };
let n2 = { name: "xyz" };

let a1 = [10, 20];
let a2 = [10, 20];

let f1 = () => {
  "arr";
};
let f2 = () => {
  "arr";
};

console.log(n1 === n2);
console.log(a1 === a2);
console.log(f1 === f2);
const ar = [10, 20];
ar[0] = 20;
console.log(ar);

const obj = {
  name: "abc",
};

obj.name = "xyz";
console.log(obj);
