//! two type of casting
// 1) implicit casting
// 2) Explicit casting

//! 1) implicit casting

console.log(10 + "10"); // number is converted to string
console.log(10 - "10"); // string is converted to number
console.log(10 - "str");
console.log(10 * "10");
console.log(10 / "10");
console.log("100" % 10);

// explicit Casting

let num = 20.9873;
let x1 = parseInt(num);
let x2 = parseFloat(num);

console.log(x1);
console.log(x2);

let str = "javscript";

let z = parseFloat(str);
console.log(z);



// toString

let str2=121;
console.log(str2.toString());
console.log(typeof str2);


