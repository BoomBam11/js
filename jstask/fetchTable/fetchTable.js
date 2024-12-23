let tbody = document.querySelector("tbody");
// console.log(tbody);
let container = document.getElementById("container");
let res = fetch("https://jsonplaceholder.typicode.com/users");
console.log(res);

res
  .then((responseObject) => {
    let finalData = responseObject.json();
    finalData
      .then((objArr) => {
        console.log(objArr);
        objArr.map((singleObj) => {
            tbody.innerHTML=tbody.innerHTML+ `<tr>
            <td>${singleObj.id}</td>
            <td>${singleObj.name}</td>
            <td>${singleObj.username}</td>
            <td>${singleObj.email}</td>
            <td>${singleObj.phone}</td>
          </tr>`;
        });
      })
      .catch(() => {});
  })
  .catch(() => {});


//   setInterval(() => {
    
//   }, 1000);