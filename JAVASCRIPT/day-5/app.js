//! FUNCTION

function demo(a,b){
    console.log(a,b)
    console.log("hello")
    console.log("hi")
    console.log("bye")
}
// demo(10,20)
// demo(10n , "js")
// demo()

function f2(x="val 1" , y="val 2"){
    console.log("welcome")
    console.log(x)
    console.log(y)
}
// f2(20,10)
// f2()


//~ RETURN STATEMENT AND RETURN TYPE:
function f1(p,q){
    let x= 90
    console.log("f1 function")
    console.log(x)
   return p+q
}
// let r1= f1(100,200)
// console.log(r1)
// console.log(f1(100,200))

function f3(e,f){
    let x= 90
    console.log("f3 function")
   return 10,20,30,e,f
}
let r2=f3(100,300)
console.log(r2)


//& EXPLICIT TYPECASTING
let n1= "200.453"
let r1= parseInt(n1)
console.log(r1)
console.log(typeof r1)

let n2="str"
console.log(parseInt(n2))

let r3=parseFloat(n1)
console.log(r3)