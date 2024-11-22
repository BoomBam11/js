//! rest parameter 

function func1(a,b,...c) {
    console.log(a,b);
    console.log("start");
    console.log(c);
}
func1(10,20,10,20,30,40);


let str="Javascript";
let arr=[10,20,30,40];

console.log(...str);
console.log(...arr);


let a=[10,20,30,40]
let b=[10,20,30,40]
let c=[10,20,30,40]

console.log([...a,...b,...c]);
