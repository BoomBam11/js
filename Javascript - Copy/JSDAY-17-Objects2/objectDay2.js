// ! Ways to create objects in js

// * using class and constructor

class Employee {
  static varStatic = "Static variable";
  varNonStatic = "NonStatic variable";
  constructor(name, id, skills) {
    this.eName = name;
    this.eId = id;
    this.eSkills = skills;
  }
  static staticMethod() {
    console.log("staticMethod " + this.name);
  }
  nonStaticMethod() {
    console.log("nonStaticMethod " + this.eName);
  }
}

let e1 = new Employee("manish", 100, ["js", "java"]);
console.log(e1);

//accessing static member
console.log(Employee.varStatic);
Employee.staticMethod();

//accessing nonStatic member
console.log(e1.varNonStatic);
e1.nonStaticMethod();

//* using constructor function

function Student(name,id,skills){
    this.name=name;
    this.id=id;
    this.skills=skills;
}

let s1=new Student("manish",200,["js1","java1"]);
console.log(s1);


//* using object reference

let obj=new Object();
obj.name="MAnish";
obj.id=123;
obj.skills=["java","js12"]

console.log(obj);
