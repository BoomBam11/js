//! setTimeout()  and setInterval()

let x = window.setTimeOut(
    function (a, ...b){
        console.log(a)
        console.log(b)
        console.log("setTimeOut")
    }, 4000, 30, 20, 10, 50, 40
)
console.log(x)
//*----------------------------------------

let y = window.setInterval(
    (v) => {
        console.log(v)
        document.write("setInterval" + <br/>)
    }, 1000,
    "javascript"
)
console.log(y)

//let res = false
//if (res) clearTimeout(x)

setTimeOut(() => {
 clearInterval(y)
 },10000)
//*----------------------------------------


//! this keyword in js  
//! 1.globally

"use strict"

var b = 200
console.log(this)
console.log(window === this)
console.log(this.b)

//~ inside the function(named)

function demo() {
    console.log(this)
}
demo()

//~ inside arrow function

function f1(){
    let arr = () => {
        console.log(this)
    }
    arr()
}
f1()

//~ inside the object inside the function(except arr)

let obj = {
    name : "sachin",
    id : 101,
    getName(){
        console.log(this.name)
    },
    arr: () => {
        console.log(this)
    },

}
obj.getName()
obj.arr()
