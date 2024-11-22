"use strict";
a=10;
console.log(a);//ReferenceError: a is not defined


function demo(a,b,b) {  //SyntaxError: Duplicate parameter name not allowed in this context
    console.log(a+b);
}

demo(10,20,30);