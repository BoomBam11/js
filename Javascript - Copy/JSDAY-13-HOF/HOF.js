let arr=[10,20,30,40,50,60];

//!find
let r1=arr.find((val,index,ar)=>{
    // return val==30;
    return val>20;
})
console.log(r1);

//!findIndex

console.log(arr.findIndex((val,index,ar)=>val==30));

//!filter

let filter1=arr.filter((val,index,ar)=>val>30)
console.log(filter1);

// !map

let map1=arr.map((val,index,arr)=>val+2);
console.log(map1);

//!some

let some1=arr.some((val,index,arr)=>val>40)
console.log(some1);

//!every

let every1=arr.every((val,index,ar)=>val>40)
console.log(every1);



