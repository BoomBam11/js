let div  = document.getElementsByClassName("container")[0]

// div.onclick = function() {
//     console.log("hello world")
//     div.style.background = "hotpink"
// }

// div.addEventListener("click", (e) => {
//     console.log(e)  //~ pointer event //~ event object
//      div.style.background = "yellow"
//      e.target.style.background= "green"
// })

let handleclick =  (e) =>{
    console.log(e)
    e.target.style.background= "green"
}