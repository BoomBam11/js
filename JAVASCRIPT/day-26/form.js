let form = document.querySelector(".form-control")
let percentage = document.querySelector("#percentage")
let span= document.querySelector(".span-1")

percentage.addEventListener("input", (e) =>{
    span.innerHTML = percentage.value
})

// percentage.addEventListener("change", (e) =>{
//     console.log(e)
//     span.innerHTML = percentage.value
// })

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let data = new FormData(form)
    let finalData = Object.fromEntries(data)
    let skillsRes = data.getAll("skills")
    finalData.skills = skillsRes
    console.log(finalData)
})