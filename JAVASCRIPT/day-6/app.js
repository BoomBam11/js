// console.log(10,20,30);

// document.write("WELCOME ALL")
// document.writeln("THANK YOU" )
// document.write("JAVASCRIPT")

// alert("alert popup")

// let res= confirm("are you 18+ ? do you want to continue")
// console.log(res)

// let age= prompt("enter your age")
// console.log(age)
// console.log(typeof age)

//! named function

function demo()
{
    console.log("demo function")
    return 200
}

console.log(demo())

//! function with expression

var fn=function (x,y){
    console.log(x,y)
    console.log("function with expression")
    return 10, 30
}
let r1= fn("s1", "s2")
console.log(r1)

//! arrow function

const arr=(a, b) => {
    console.log(a, b)
    return 100
}

console.log(arr("val 1" , "val 2"))

const a1= () => console.log("hello")
a1()

const a2= () => 20;
console.log(a2())

const a3= x => x;
console.log(a3(2000))


//! HIGHER ORDER FUNCTION

function fun1(x,y){
    console.log("HDF")
    x()
    console.log(y())
    console.log("end")
}

fun1(
    function(){
        console.log("call back fn")
    } ,
    () => "arr"
)