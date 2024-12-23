//* variable
//*--------------------


var a=10;
console.log(a);
var a=100;
console.log(a);

// cannot redeclare block-scope variable 'b'
let b=20;
console.log(b);
//let b=200;
b=200;
console.log(b);

const c=30;
console.log(c);
//const c=300;
//c=300; Uncaught TypeError: Assignment to constant variable.


//&------------------------     

//var x;
//x=1000;
//console.log(x);

//let y;
//y=2000;
//console.log(y);

//const z;  //& 'const' declaration must be initialized

let q,w,e;