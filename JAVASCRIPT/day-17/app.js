//!     OBJECT.ASSIGN()

let std = {
    name : "abc",
    id : 68,
    skills : ["js", "react"],
}

let address = {
    doorNo : 300,
    location : "jspider thane",
}

let percentage = {
    English : 89,
    Maths : 90,
    Biology : 76,
    Chemistry : 68,
}

let x = Object.assign(std, address, percentage)
console.log(std)
console.log(x)
//console.log(address)

//! A rest parameter must be last in a parameter list

function demo(a,b,...x){
    console.log(a)
    console.log(b)
    console.log(x)

    console.log("sta.rt")
}
demo(10, 20, 30, 40, 50, 60)

//! spread operator

let str = "javascript"
console.log(...str)

let arr1 = [10,20,30,40,50]
console.log(...arr1)

let obj = {
    name : "aditya",
    id : 121
}
//console.log(...obj) //spread syntax requires

//console.log(...str)

let brr = [70, 80, 90, 100 ]////

console.log([...arr1 , ...brr])

//! Array Destructuring

let arr =[10, 20, 30, 40, 50]
console.log(arr[3])

//& A rest element must be last in a destructuring
const [q, y, ...z] = arr

console.log(x)
console.log(y)
console.log(z)

console.log([...arr, 70, 80]) //spread operator

//! Object destructuring

let id = 8000

let object = {
    neme : "sachin",
    id : 324,
    skills : "js",
    ad : {
        pinCode : 421202,
        area : "chennai",
    },
    percentage1 : 70,
}

// console.log(obj["percentage1"])
// console.log(obj.name)

let { percentage1, id : eID, ...c} = obj
console.log(percentage1)
console.log(id)
console.log(c)