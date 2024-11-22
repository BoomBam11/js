//! set objects

// let arr=["arr","str"];

// //* first way
// var s=new Set([10,"str",1n,false,false,10,{name:"abc"},[10,20],10,{name:"abc"},arr]);

// //* Two ways to add elements in set 

// //*second way

// // s.add(10);
// // s.add("str");
// // s.add({name:"manish"});
// // s.add(1n);
// // s.add(false)
// // s.add("str")
// // s.add({name:"abc"})
// s.delete(10);
// //s.delete(arr);
// console.log(s.has([10,20]));
// console.log(s.has(arr));
// console.log(s.size);

// // s.clear
// console.log(s);

// // converting array to set
// let ar=[10,20,30,40,"str",10n,10n,"str"];
// console.log(ar);


// let set1=new Set(ar);
// console.log([...set1]);
// console.log(Array.from(set1));








//* map

let a=[10,20];

let m=new Map([[10,"Number datatype"],[false,"boolean datatype"],[()=>"arr","function datatype"],["string","string datatype"],[10n,"bigInt"],[[10,20],"array datatype"],[false,"boolean datatype"],[10,20]])
console.log(m);

m.set(10,"Number datatype");
m.set(false,"boolean datatype");
m.set(()=>"str","arrow function");
m.set([10,20],"arr")
m.set([10,20],"array dattype");

console.log(m.get(a));
console.log(m.get([10,20]));

console.log(m.delete("string"));
console.log(m.delete(a));

// m.clear();

console.log(m.has(false));
console.log(m.size);

