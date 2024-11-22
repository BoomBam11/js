let form = document.querySelector(".form-control");
let range = document.getElementById("range");
let percentage = document.getElementById("percentage");

//* use of change
// range.addEventListener("change", function (e) {
// //    console.log(e.target.value)
//     percentage.textContent=e.target.value;
// });

//* use of input
range.addEventListener("input", function (e) {
  // console.log(e.target.value)
  percentage.textContent = e.target.value;
});

//* collecting form data inside object
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let formData = new FormData(form);
  let formDataObject = Object.fromEntries(formData);

  //*WITH USING getAll()
  //   formDataObject.courses = formData.getAll("courses1");
  //*WITHout USING getAll()
  let arr = [];
  let courseNode = document.getElementsByName("courses1");
  courseNode.forEach((ele) => {
    if (ele.checked) {
      arr.push(ele.value);
    }
  });
  console.log(arr);
  formDataObject.courses1 = arr;
  console.log(formDataObject);
});

//* changing body color at run time
let color = document.querySelector("#color");
let bd = document.querySelector("body");

color.addEventListener("input", function (e) {
  bd.style.backgroundColor = e.target.value;
});




//* adding checkbox element and removing if exists

let eleCont = document.querySelector("#courses1");
let checkEle = document.getElementsByName("courses1");
let ar1 = new Array();

eleCont.addEventListener("change", function (ele) {
  console.log(ele.target.value);
  let crValue = ele.target.value;
  if (ar1.includes(crValue)) {
    ar1.splice(ar1.indexOf(crValue), 1);
  } else {
    ar1.push(crValue);
  }
  console.log(ar1);
});
