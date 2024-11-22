//* call
let obj={
    name:"Manish",
    id:12
}

let fn=function(a,b){
    console.log("fn function");
    console.log(this);
    console.log(a,b);
}

fn.call(obj,10,20);


//! in arrow function it is not possible

let arr=()=>{
    console.log(this);
}

arr.call(obj)


//* 