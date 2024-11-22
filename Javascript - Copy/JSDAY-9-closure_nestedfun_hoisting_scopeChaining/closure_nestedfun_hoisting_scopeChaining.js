//! nested function 

// var b=1000;
function f1() {
    let b=200;
    console.log("outer");
    var nested=function(){
        // const b=2300;
        console.log("nested function");
        console.log(b);
    }    
    nested();
    // return b;
}

f1();



// ! variable hoisting
// console.log(c);
// cant use before initialization

//var a=10;
// let c=30;
// const d=40;








