//*key and value, both are converted into strings

//window.localStorage

console.log(localStorage);
console.log(window.sessionStorage);

localStorage.setItem("name","Manish");
localStorage.setItem("id",100);
localStorage.setItem("isMarried",true);
localStorage.setItem("skills",["batsman","fielding","bowling"]);
localStorage.setItem("add",JSON.stringify({"country":"India","State":"Delhi","city":"Anand Vihar"}));


console.log(typeof localStorage.getItem("name"));
console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("id"));
console.log(Boolean(localStorage.getItem("isMarried")));//to convert string to boolean
console.log(localStorage.getItem("skills").split(","));// to convert into array
console.log(JSON.parse(localStorage.getItem("add")));// to convert into object


// localStorage.removeItem("name")

// localStorage.clear()
console.log(localStorage);

//* session storage

window.sessionStorage.setItem("name","manish");
window.sessionStorage.setItem("id","510");
console.log(window.sessionStorage.getItem("name"));
sessionStorage.removeItem("name")
sessionStorage.clear();



