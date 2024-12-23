//~ CONSTRUCTOR FUNCTION

function Employee (name, id, skills){
    this.eName= name
    this.eId = id
    this.eSkills = skills
}

let e1 = new Employee("sachin", 200, ["SQL"])
console.log(e1)

let e2 = new Employee("dhoni", 100, ["JAJA"])
console.log(e2)
console.log(e2.eName)
console.log(e2["eName"])
//*-------------------------------------------

//~ OBJECT CONSTRUCTOR

let o1 = new Object()
o1.name = "Virat"
o1.id = 300
console.log(o1)
//*-------------------------------------------

//~ static methods in object

let obj = {
    name : "virat",
    id : 200,
    skills : ["js", "react"],
    isMarried : true,
    address : {
        location : "Delhi"
    }
}

//Object.freeze(obj)    -------> 1
//Object.seal(obj)    -------> 2

//obj.id = 90000
//obj.skills = ["java"]
//obj.salary = "1 lakh"
//delete obj.isMarried
//console.log(obj)

//let r1 = Object.isFrozen(obj)  -------> 3
//console.log(r1)

//let r2 = Object.isSealed(obj)   -------> 4
//console.log(r2)

let key = Object.keys(obj)
console.log(key)

let value = Object.values(obj)
console.log(value)

let e = Object.entries(obj)
console.log(e)
