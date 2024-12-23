let data  = window.fetch("https://dumyjson.com/products");
let tbody = document.querySelector("tbody");

data.then(
    (d) => {
        d.json().then(
        ({products}) => {
            products.map( (v) => {
                let {id, thumbnail, title, description, price, rating} = v;
                tbody.innerHTML +=
               `  <tr>
                    <td>${id}</td>
                    <td><img src=${thumbnail} alt=${id}/> /</td>
                    <td>${title}</td>
                    <td>${description}</td>
                    <td>${price}</td>
                    <td>${rating}</td>//
                </tr> `
            })
        
        },
        (e)=> e

        );
    },
    
    (e) => (e)
)