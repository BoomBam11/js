let hide = document.querySelector(".hide")
let show = document.querySelector(".show")
let div = document.querySelector(".display-content")

// hide.addEventListener("click", (e) => {
//     //div.style.display = "none"
//     div.style.visibility = "hidden"
// })

// show.addEventListener("click", (e) => {
//     console.log("show")
//    // div.style.display = "block"
//     div.style.visibility = "visible"
// })

show.addEventListener("click", (e) => {
    let test = div.classList.toggle("active")
    if(test) show.innerHTML = "SHOW" 
    else show.innerHTML = "HIDE"
})