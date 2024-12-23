//! CLASS INHERITANCE

// class Person {
//     constructor(name)
//     {
//         this.name=name;
//     }
//     demo(){
//         console.log("demo function");
//     }
// }

// class Employee extends Person {
//     constructor(name, id, salary)
//     {
//         super(name);
//         this.id=id;
//         this.salary=salary;
//     }
// }


// let e1= new Employee("abc",121,3000)
// console.log(e1);
// e1.demo();

//* BY USING PROTOTYPE INHERITANCE


let arr = [10,20]
console.log(arr);
let obj = {name : "abc"};
console.log(obj);

let p = {
    name: "parent",
    getName() {
        console.log(this.name)
    },
};

let c = {name:"child"};
c.__proto__ = p;
c.getName();
console.log(c);