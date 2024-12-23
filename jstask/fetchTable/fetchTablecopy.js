let tbody = document.querySelector("tbody");
let container = document.getElementById("container");
let res = fetch("https://jsonplaceholder.typicode.com/users");
console.log(res);

res
  .then((responseObject) => {
    let finalData = responseObject.json();
    finalData
      .then((objArr) => {
        console.log(objArr);
        objArr.forEach((singleObj, index) => {
          setTimeout(() => {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.textContent = singleObj.id;
            let td2 = document.createElement("td");
            td2.textContent = singleObj.name;
            let td3 = document.createElement("td");
            td3.textContent = singleObj.username;
            let td4 = document.createElement("td");
            td4.textContent = singleObj.email;
            let td5 = document.createElement("td");
            td5.textContent = singleObj.phone;

            
            tr.append(td1, td2, td3, td4, td5);
            tbody.appendChild(tr);

            tr.style.transform = "translateX(150%)";
            setTimeout(() => {
              tr.style.transform = "translateX(0%)";
              tr.style.transition = "all 1s ease-in-out";
            }, 1000);
          }, index * 1000);
        });
      })
      .catch(() => {});
  })
  .catch(() => {});


  