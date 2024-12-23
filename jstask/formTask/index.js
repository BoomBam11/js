let form = document.querySelector("form");
let obj = {};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let inputNode = document.querySelectorAll("div input");
  inputNode.forEach((ele) => (obj[ele.id] = ele.value));

  document.querySelector("#male").checked
    ? (obj["gender"] = "male")
    : (obj["gender"] = "female");

  console.log(obj);

  // let dataContainer = document.querySelector("#dataContainer");
  // Object.entries(obj).forEach(([ele1, ele2]) => dataContainer.innerHTML += `<span>${ele1} : ${ele2}</span> <br>`);
});
