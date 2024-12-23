let x = require("./App.js");
console.log(x);

let { sum,sub,multiply,arr,obj} = x;
    console.log(sum(200,100));
    console.log(sub(1000,400));
    console.log(multiply(10,5));
    console.log(arr[0]); 
    console.log(obj.name); 

//**************----------------------------- */

// import add from "./App.js";
// console.log(add(300,500));
// console.log(add);
// console.log(add[0](300,500));

import {sum as add,sub,multiply} from "./App.js";

// console.log(sum(400,600));
// console.log(sub(400,600));
console.log(add(20,30));

