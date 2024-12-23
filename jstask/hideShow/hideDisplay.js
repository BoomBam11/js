let box = document.querySelector("#box");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
  box.classList.toggle("changeState");

  if (btn.textContent == "Hide") {
    btn.textContent = "Show";
  } else {
    btn.textContent = "Hide";
  }

  if (btn.textContent == "Show") {
    btn.style.animationName = "btnBeat2";
  } else {
    btn.style.animationName = "btnBeat";
  }
});
