//! document.getElementById():

let h1 = document.getElementById("demo");
console.log(h1);

h1.style.background = "black";
h1.style.color = "white";

//& document.getElementByClassName():

let a = document.getElementsByClassName("active");
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(Array.isArray(a));
console.log([...a]);

let newArr = Array.from(a);
console.log(newArr);

let al = Array.prototype.slice.call(a);
console.log(al);

newArr.map((v) => {
  v.style.color = "white";
  v.style.background = "red";
});

let h = document.getElementsByTagName("h1");
console.log(h);

h[0].innerText = "javascript";
h[1].innerText = "java";
h[2].innerHTML = "node";

setTimeout(() => {
  h[2].innerHTML = "express";
}, 3000);

let div = document.getElementsByClassName("container");
div[0].innerHTML = "<h1> hello world</h1>";

//& document.querySelector():

let x = document.querySelector(".container");
console.log(x);

console.log(document.querySelector("h1"));

//& document.querySelectorALL():

let r1 = document.querySelectorAll(".container");
console.log(r1);
