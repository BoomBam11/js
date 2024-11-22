 // "use strict";
// console.log(this);
// console.log(this==window);

// //!window object if using

// function demo() {
//     console.log(this);
// }

// demo();

// //*
// let f1=function(){
//     console.log(this);
// }
// f1();

// let ar=()=>{
//     console.log(this);
// }
// ar();

// function f2() {
//     console.log(this);
//     let arr2=()=>{
//         console.log(this);

//     }
//     arr2();
// }
// f2();

// //! current creating object

// class Employee{
//     constructor(name,id){
//         this.name=name;
//         this.id=id;
//         console.log(this);
//     }
// }

// let e1=new Employee("xyz",123);
// console.log(e1);

// let name = "manish";
// let o = {
//   name: "sachin",
//   f1: function () {
//     console.log(this);
//   },
//   demo() {
//     console.log(this);
//     console.log(this.name);
//   },
//   ar: () => {
//     console.log("start");
//     console.log(this);
//     console.log(this.name);
//     console.log("End");
//   },

//   ar1:{
//     ar2: () => {
//         console.log("start");
//         console.log(this);
//         console.log(this.name);
//         console.log("End");
//       },
//   }
// };

// o.f1();
// o.demo();
// o.ar();
// o.ar1.ar2()





