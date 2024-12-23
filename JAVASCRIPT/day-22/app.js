//! Shallow Copy

let obj = {
    name : "abc",
    id : 120,
    skills : ["js", "react", "java"],
    add : {
        doorNo : 301,
        location : "Jspider Thane",
    },
}

//* by copying the object reference

let copy1 = obj
//obj.name = "sachin"
//console.log(copy1)
//console.log(obj)
//console.log(copy1 === obj)

//* by using Object.assign()

let copy2 = Object.assign({}, obj)
//console.log(copy2 === obj)
//obj.name = "sachin"
//obj.add.doorNo = 500
//console.log(copy2)

//* by using spread op
//let copy3 = {...obj}
//obj.name = "sachin"
//obj.skills[1] = "ruby"
//console.log(copy3)
//console.log(copy3 === obj)

//* for in loop

let copy4 = {}
for (let i in obj) copy4[i] = obj[i]
obj.name = "sachin"
obj.skills[1] = "ruby"
console.log(copy4)
console.log(copy4 === obj)

//*----------------------------------

//! deep copy

//* structuredClone()

let copy5 = structuredClone(obj)
//obj.id = 500
//obj.add.location = "Qspider thane"
//console.log(copy5)

//* using JSON.stringify and parse()

let copy6 = JSON.parse(JSON.stringify(obj))
obj.id = 500
obj.add.location = "Qspider thane"
console.log(copy6)