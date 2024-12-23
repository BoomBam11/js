//! call, apply, bind

let std = {
    name : "sachin",
    id : 101,
    skills : ["js", "java"],
}

function demo(a, ...c){
    console.log(a)
    console.log(c)
    console.log("start")
    console.log(this)

}

//demo.call(std, 10, 20, 30, 40, 50)
//demo.apply(std, [10, 20, 30, 40, 50])

//let res = demo.bind(std)
//res(10, 20, 30, 40)

let newObj = {
    name : "virat",
    getName(){
        console.log(this.name)
        console.log(this)
    },
}
newObj.getName.bind(std)()

function* demo() {
    console.log("start")
    console.log("first")
    let x = 100
    yield x
    console.log("second")
    let str = "js"
    console.log(str)
    yield "java"
    console.log("third")
    let c = 1000
    yield 1000
    console.log("end")
    return "final"
}
let x = demo()
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())