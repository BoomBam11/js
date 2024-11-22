let textArea = document.querySelector("#messages");

// textArea.addEventListener('keyup',(e)=>{
//     console.log(e);
//     console.log(e.target.value)
// },false)

// textArea.addEventListener("keydown", (e) => {
//   console.log(e);
//   console.log(e.target);
//   console.log(e.target.value);
// });

// textArea.addEventListener('keypress',(e)=>{
//     console.log(e)
//     console.log(e.target)
//     console.log(e.target.value)
// })

//* change background on keydown

let body = document.querySelector("body");

textArea.onkeydown = function () {
  let randomColor = `#${Math.floor(Math.random() * (9999 - 1000) + 1000)}`;
  console.log(randomColor);
  body.style.background=randomColor;  
};
