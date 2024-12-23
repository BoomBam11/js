let container = document.querySelector("#container");

async function fetchData() {
  try {
    let data = await fetch(`https://dummyjson.com/products`);
    let finalData = await data.json();
    // console.log(finalData.products);
    // finalData.

    let { products } = finalData;
    console.log(products);
    products.map((e) => {
      let { thumbnail, title, price, rating, id, images } = e;
      // console.log(e.images[0]);

      let holder = document.createElement("div");
      holder.setAttribute("class", "holder");

      container.append(holder);

      let imgEle = document.createElement("img");
      imgEle.setAttribute("src", `${images[0]}`);
      // imgEle.setAttribute("src", `${thumbnail}`);

      let titleEle = document.createElement("span");
      titleEle.textContent = title;

      let priceEle = document.createElement("span");
      priceEle.textContent = `$${price}`;

      let ratingEle = document.createElement("span");

      ratingEle.textContent = `${"⭐".repeat(Math.round(rating))}`;

      let idEle = document.createElement("span");
      idEle.textContent = `${id}`;

      let btn = document.createElement("button");
      btn.textContent = "Buy now";
      holder.append(imgEle, titleEle, priceEle, ratingEle, idEle, btn);
    });
  } catch (error) {
    console.log("error");
  }
}

fetchData();
