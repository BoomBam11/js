//todo scope in JS

let a=100   //!script 
 b=300 //!script
var c=400   //~global

function demo(a,b){
    //! local scope
    let x="js"
    const y="java"
    var z="python"
    console.log(x,y,z)
    console.log(a,b)
}
demo(40,50)

{
    let p=200     //! block
    const q=300   //! block
    var r=900     //~ global
//console.log(p,q,r)
}
console.log(r)

//* ----------------------------------------------
//! NESTED FUNCTION

function demo(){
    console.log("demo function")
    let a=200;
    var b=300;
    console.log(a,b)

    function f1(){
        console.log(a) //closure --> Scope/memory allocation
        console.log("nested function")
        return "str"
    }
    f1()
}
demo()

function f2()
{
    let y=10
    console.log(y)  
    function inner(){
        console.log("nested function")
    }
    return inner
}
//f2()()
//let r=f2()
//r()

//*-----------------------------------------------

//! LEXICAL SCOPING OR SCOPE CHAINING

var y=300
function f8()
{
    //let y=500
    function f2(){
       // const y= 700
        console.log(y)
    }
    f2()
}
f8()

//! WINDOW OBJECT

console.log(window)
console.log(this)
console.log(window === this)
//window.alert("alert message")
//window.confirm("confirm message")

var z= 200
function f5(){
    var z=400
    console.log(z)
    console.log(this.z)
    //console.log(window.a)
}
f5()