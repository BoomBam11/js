//* round
console.log(Math.round(12.2));
console.log(Math.round(12.5));
console.log(Math.round(12.9));

console.log(Math.round(-12.2));
console.log(Math.round(-12.5));
console.log(Math.round(-12.9));

//* ceil
console.log(Math.ceil(2.1));
console.log(Math.ceil(2.6));
console.log(Math.ceil(2.5));


console.log(Math.ceil(-2.1));
console.log(Math.ceil(-2.6));
console.log(Math.ceil(-2.5));

//* floor
console.log(Math.floor(10.4));
console.log(Math.floor(10.5));
console.log(Math.floor(10.9));


console.log(Math.floor(-10.4));
console.log(Math.floor(-10.5));
console.log(Math.floor(-10.9));

//*trunc
console.log(Math.trunc(15.0));
console.log(Math.trunc(15.5));
console.log(Math.trunc(15.6));

console.log(Math.trunc(-15.0));
console.log(Math.trunc(-15.5));
console.log(Math.trunc(-15.6));


//* max
console.log(Math.max(...[10,20,30,40,55,5]));

let a=[10,20,30,40,55,5];
console.log(Math.max(...a));

//*min
console.log(Math.min(...a));

// *Math.sqrt
let n=9;
console.log(Math.sqrt(n));

//* Math.pow
console.log(Math.pow(n,4));
console.log(n**4);


//!21st lecture
//*Random
console.log("Random");
console.log(Math.random());

//Formula (Max-Min)+Min
let rn=Math.random()*(9999-1000)+1000;
console.log(Math.trunc(rn));



