const arr = [10, 20, 30, 40, 50, 60];
var [x, y, ...z] = arr;
console.log(x);
console.log(y);
console.log(z);
console.log(...z);

let obj = {
  name: "Manish",
  rollNumber: 21,
  isMarried: false,
  add: { city: "thane" },
  salary:1000000000
};

var salary=5000000;

var {name,add,...rem}=obj;
console.log(name);
console.log(add);
console.log(rem);
console.log(lastNAme);//undefined



