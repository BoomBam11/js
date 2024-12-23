let a = document.getElementsByClassName("box")[0] //~  [0] ----> getElementsByClassName returns a HTMLCollection, which is an array-like object, not a single element.

a.addEventListener("click", (e) => {
    e.target.style.background=("yellow")
} )

let b = document.getElementsByClassName("mini")[0]

b.addEventListener("click", (e) => {
    e.stopPropagation()
    e.target.style.background=("green")
    
} )