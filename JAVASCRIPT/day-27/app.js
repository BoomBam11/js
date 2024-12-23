let gp = document.querySelector(".gp")
let p = document.querySelector(".p")
let c = document.querySelector(".c")

document.addEventListener("click", (e) => {
    //console.log(e)
    //console.log(e.eventPhase)
    console.log("document clicked")
}, false)

gp.addEventListener("click", (e) => {
    //console.log(e)
    //console.log(e.eventPhase)
    console.log("gp clicked")
}, false)

p.addEventListener("click", (e) => {
    //console.log(e)
    //console.log(e.eventPhase)
    console.log("p clicked")
}, {capture:true} )

c.addEventListener("click", (e) => {
    //console.log(e)
    //console.log(e.eventPhase)
    console.log("c clicked")
}, false)

