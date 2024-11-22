let form=document.querySelector("form");
let userName=document.querySelector("#username");
let password=document.querySelector("#password");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(userName.value);
    console.log(password.value);
})