//* Window.fetch

let data = window.fetch("./data.json");
console.log(data);
let div = document.querySelector(".container");

data.then(
    (d) => {
        let finalData = d.json();
        console.log(finalData);

        finalData.then(
            (val) => {
                val.map((v) => {
                    let {name, id} = v;
                    div.innerHTML +=
                   `  <h1>name : ${name}</h1>
                    <h2>id : ${id}</h2> ; `
                })
            },
            (e) => e
        );
    },
    
    (e) => console.log(e)
)