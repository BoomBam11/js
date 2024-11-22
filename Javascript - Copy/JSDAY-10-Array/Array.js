//! two types of array homogeneous and heterogeneous  

//? homogeneous
var arr=[1,2,3,4,5];
console.log(arr[-3]);

//? heterogeneous

const v=[null,200,1n,true,"js",[["a","b"],"React","node"],(e)=>e,function fun2(params) {return params;}];
console.log(v.length);
console.log(v[3]);
console.log(v[5][0][0]);
console.log(v[6]("Calling function inside array"))
console.log(v[7]("arguments"));
console.log(v[9]);
v[8]="Java";//we can add values like this 
v[3]=false;//we can update the values like this 


v[9]="manish";

delete v[1]; //! if we delete element from array using delete keyword then the size of array going to remail same   

console.log(v.length);
console.log(v);

