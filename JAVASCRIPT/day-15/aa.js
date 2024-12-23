// LITERAL WAY

const student = {
    name : "Amaan Anasari" ,
    id : 200,
    skills : ["JS", "react"],
    address : {
        doorNo: 101,
        location: "jspider thane"
    },
    id : 400,
    demo : () => {
        console.log("demo function")
    },
    isMarried : false,
    children : "infinite",
    fan : "hardik pandya"
}
console.log(student.id)
console.log(student.address.doorNo)
student.demo()

console.log(student["children"])
student["demo"]()

// student.salary = 40000000000
student["salary"] = 40000

student.isMarried = true
student["children"] = 70

delete student["fan"]
console.log(student)
//*------------------------------------

//! class & constructor
//
class Employee {
static bonus = 300
    salary =40000
    constructor(id,name,skills){
        this.eId= id
        this.eName= name
        this.eSkills= skills
        console.log(this)
    }
    demo(){
        console.log("demo function")
    }
    static fn(){
        console.log("static function")
    }
}

Employee.fn()
console.log(Employee.bonus)

let e1 = new Employee(20, "sachin", ["java", "js"])
//console.log(e1)

let e2 = new Employee(200, "dhoni", ["react", "node"])
console.log(e2)