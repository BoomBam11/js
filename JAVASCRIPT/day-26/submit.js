let username = document.querySelector("#username")
let password = document.querySelector("#password")
let form = document.querySelector(".form-control")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    //console.log(e)
    console.log(username.value)
    console.log(password.value)
    username.value = ""
    password.value = ""
})