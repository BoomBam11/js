// ! window  object in js

console.log(window);

console.log(this);

console.log(window==this);

var a=100;
var b=200;

function f1(){
    var a=20;
    console.log(a);
    console.log(this.a);
    console.log(window.a);
}

f1();




