//*Attribute Methods

let h1 = document.querySelector("h1");
//console.log(h1);

h1.setAttribute("class", "heading");
h1.setAttribute("title", "tooltip");

let a = document.querySelector(".audio-mp3");
console.log(a);
a.setAttribute("controls", ""); //!null or empty string

var c = a.getAttribute("class");
console.log(c);

let para = document.querySelector(".para");
// para.removeAttribute("style");
para.removeAttribute("style")

let c1 = para.hasAttribute("style");
console.log(c1);





//* classlist methods

let p = document.getElementById("p1");
// p.setAttribute("class","demo");
// p.setAttribute("class","active");
// p.className="para";
// console.log(p);

p.classList.add("demo", "active", "para");

p.classList.remove("demo", "p1", "active");
console.log(p);

let r1 = p.classList.contains("para");
console.log(r1);

let h2 = document.querySelector("#head");
let res = h1.classList.toggle("demo");
console.log(res);

setInterval(() => h1.classList.toggle("heading"), 200);
setInterval(() => h1.classList.toggle("heading2"), 200);
