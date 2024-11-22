let p = document.getElementsByTagName("p");
console.log(p);

[...p].forEach((v, i) => console.log(v, i));

for (let i = 0; i < p.length; i++) {
  p[i].style.background = "lightblue";
  p[i].style.color = "#000";
  p[i].style.padding = "10px 20px";
}

let h2 = document.querySelector("#heading");
console.log(h2);
h2.innerHTML = "Hello World";
h2.innerText = "Hello World";

let section = document.querySelector("section");
console.log(section);

// section.innerHTML="<p id="idOne" >its paragraph</p>";

section.innerHTML = '<p id="idOne">its paragraph</p>';
// section.innerText="hi"

let para = document.querySelectorAll(".demo");
console.log(para);

para.forEach((ele, ind) => {
  console.log(ele, ind);
  ele.style.background = "LightYellow";
});

// for (let i = 0; i < para.length; i++) {
//     p[i].style.background="lightblue";
//     p[i].style.color='green';
//     p[i].style.padding="10px 20px"
// }

//Creating element

let article = document.createElement("article");
article.style.border = "black solid 1px";
article.innerHTML = "<h1>Article content</h1>";

section.append(article);

let m2 = document.getElementsByClassName("m2")[0];
console.log(m2);
// m2.innerHTML = `<div>its div</div>
// <h3>its h3</h3>
// <span>its span</span>`;

let c1 = document.createElement("div");
let c2 = document.createElement("h4");
let c3 = document.createElement("h3")

[c1, c2, c3].forEach((cr) => {
  cr.innerHTML = "hello";
});

m2.append(c1, c2, c3);
