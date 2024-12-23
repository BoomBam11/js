//* mouse Events     --------->

// let div = document.querySelector(".container")
// div.addEventListener("mouseover", (e) => {
//    console.log(e)
//    e.target.style.background = "#ccc"
// })

// div.addEventListener("mouseout", (e) => {
//   console.log(e)
//  e.target.style.background = "none"
// })

//* key Events     --------->
 let input = document.querySelector("#text")
 let textarea = document.querySelector("textarea")

// input.onkeyup = (e) =>{
//     console.log(e)
// }

// textarea.addEventListener("keyup", (e) =>{
//     console.log(e)
// })

// textarea.addEventListener("keydown", (e) =>{
//     console.log(e)
// })

 textarea.addEventListener("keypress", (e) => {
     console.log(e)
 })
