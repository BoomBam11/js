let gp = document.querySelector("#gp");
let p = document.querySelector("#p");
let c = document.querySelector("#c");

document.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.eventPhase);
  console.log("document is clicked");
},false);

// ! true capturing phase
// ! false bubbling phase

gp.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log(e.eventPhase);
    console.log("grand parent is clicked");
  },
  false
);
p.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log(e.eventPhase);
    console.log("parent is clicked");
  },
  false
);
c.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    e.stopImmediatePropagation();
    console.log(e.eventPhase);
    console.log("child is clicked");
  },
  false
);

c.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation();
    console.log(e.eventPhase);
    console.log("child 2 is clicked");
  },
  false
);
