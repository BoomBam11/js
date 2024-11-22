//! fill

let arr = [10, 20, 30, 40, 50, 10, 54, 45, 21];
//arr.fill("str")
console.log(arr);

let arr2 = [10, 20, 30, 40, 50, 10, 54, 45, 21];
//arr2.fill("str",2,4)
console.log(arr2);

//indexOf()
let arr3 = [10, 20, 30, 40, 50, 10, 54, 45, 21];
arr3.indexOf(20);
arr3.indexOf(20, 2);

// flat()

let arr4 = [10, 20, ["man", "meh", [10, 20, ["man", "kumar"], 10], 100]];
console.log(arr4);

let r1=arr.flat()
let r2=r1.flat()
let r3=r2.flat()
let r4=r3.flat()


let r5=arr4.flat(Infinity)
console.log(r5);
