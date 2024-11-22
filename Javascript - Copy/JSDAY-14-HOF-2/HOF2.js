//!ForEach

let arr = [10, 20, 30, 10, 50, 60];

// arr.forEach((val,index,ar)=>{
//     console.log(val);
//     console.log(index);
//     console.log(ar);

// })

console.log(arr.reduce((acc, cv) => acc + cv, 0));

console.log(arr.reduceRight((acc, cv) => acc + cv, 0));

let str = "javascript";

console.log(str.split("").reverse().join(""));


let r5=str.split("").reduceRight((acc,cr)=>acc+cr,"")
console.log(r5);
