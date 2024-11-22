//*using event handler property

let div = document.querySelector(".container");
// console.log(div);

// div.onclick=function (e) {
//     console.log("hello");
//     console.log(e);
//     div.style.background="pink";
//     div.style.color="white";
// }

//*using adEventListener method

// div.addEventListener(
//   "click",
//   function (event) {
//     console.log(this);
//     this.classList.toggle("wow");
//   },
//   false
// );

//*using event attributes

let handleFunction=function(event) {
    console.log(event);
    div.classList.toggle("wow");
}







//*Mouse events

// div.addEventListener(
//   "mouseover",
//   function (e) {
//     console.log(e);
//     console.log(this);
//     div.style.background = "pink";
//     div.style.color = "white";
//   },
//   false
// );

// div.addEventListener(
//     "mouseout",
//     function (e) {
//       console.log(e);
//       console.log(this);
//       div.style.background = "red";
//       div.style.color = "white";
//     },
//     false
//   );
