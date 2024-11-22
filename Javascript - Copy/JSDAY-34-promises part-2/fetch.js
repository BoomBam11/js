let data = window.fetch("./jsonFile.json");
// console.log(data);
let div = document.getElementById("container");

data.then(
  (responseObject) => {
    let jsObj = responseObject.json();
    jsObj.then(
      (finalData) => {
        let { employee: e } = finalData;
        e.map((v, i, ar) => {
          console.log(v);
          container.innerHTML += `<h1>Name : ${v.name} </h1>
            <h1>ID: ${v.id}</h1>
            <h1>Sub: ${v.sub}</h1>
             <br> 
            `;
        });
      },
      (e) => {
        console.log("error", e);
      }
    );
  },
  (error) => {console.log(error);
  }
);
