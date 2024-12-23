//! document.CreateElement()

//let h1 = document.createElement("h1");
//console.log(h1);

//var p = document.createElement("p");
//p.innerHTML = "paragraph 2";

//let div = document.getElementsByClassName("container");

//h1.innerHTML = "hello world";
//div.appendChild(h1);
//div.append(h1, p);

//! Attribute methods

let h1= document.querySelector(".head");
console.log(h1);
h1.innerHTML = "hello world";
h1.setAttribute("title", "web technology");
h1.setAttribute("id", "heading");

h1.id = "heading";
let input = document.getElementsByTagName("input");

//~ App.js:11 Uncaught TypeError: Failed to execute
//~ 'setAttributes' on 'Elements': 2 arguments required, but only 1 present

for(let v of input){
    v.setAttribute("required", null);
}

let r1 = input[0].getAttribute("type");
console.log(r1);

let r2= input[0].getAttribute("class");
console.log(r2);

///input[1].removeAttribute("placeholder")

let r3 = input[1].hasAttribute("placeholder")
console.log(r3);

//! ClassList Property

 let div = document.querySelector("#demo")
// div.className = "figure"
// div.setAttribute("class", "shape")

 div.classList.add("demo", "d1", "active", "focus")
 div.classList.remove("d1", "active")

let p1= div.classList.contains("d1")
console.log(p1);

setInterval( () => {
    let test1 = div.classList.toggle("container");
    console.log(test1);
}, 1000);