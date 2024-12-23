//! date object

let date = new Date()
//console.log(date)

//! non-static method

console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())

//console.log(date.getHours())
//console.log(date.getMinutes())
//console.log(date.getSeconds())
//console.log(date.getMilliseconds())

//! set the date and time

let y = new Date()
y.setFullYear(2000, 2, 10)
//y.setMonth(2, 10)
//y.setDate(10)

y.setHours(10, 30, 59, 68)
//y.setMinutes(10)
//y.setSecond(59)
//y.setMilliseconds(619)
console.log(y)


//! Math static method 

console.log(Math.round(10.4))
console.log(Math.round(1.5))
console.log(Math.round(-1.5))

console.log(Math.ceil(2.3))
console.log(Math.ceil(-4.5))

console.log(Math.floor(3.9))
console.log(Math.floor(-3.1))

console.log(Math.trunc(-10.5))
console.log(Math.trunc(20.9))

console.log(Math.random())

let randomNumber = Math.random() + (9999 - 1000) + 1000
console.log(Math.trunc(randomNumber))

let r1 = Math.max(20, 30, 10, 50, 70, 86, 25, 68)
console.log(r1)

let r2 = Math.max()
console.log(r2)

let r3 = Math.min(40, 20, 10, 44, 89)
console.log(r3)

let r4 = Math.min()
console.log(r4)

let v = [30, 100, 22, 33, 42]
//console.log(Math.max(v))  -------->// NaN

console.log(Math.max(...v))
console.log(Math.min(...v))

console.log(Math.sqrt(81))
console.log(Math.cbrt(125))
console.log(Math.pow(10, 4))
console.log(10 ** 4)

//! arguments objects
function demo(){
    console.log(arguments) //return argument object
    console.log(Array.isArray(arguments))
    console.log([...arguments])
    console.log("demo fn")
}
demo(10, 20, 30, 40, 50, 60)


//"use strict"  -----> example

//let arguments = "str"
//console.log(arguments) 