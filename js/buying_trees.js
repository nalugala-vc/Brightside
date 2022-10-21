var requestOptions = {
  method: "GET",
  redirect: "follow",
};
var url = new URL(window.location.href);
let params = new URLSearchParams(url.search);
var shopID = params.get('id')
fetch(`http://18.182.31.147/api/treeshop/${shopID}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    var trees = result["trees"];
    trees.forEach((element) => {
      console.log(element);

      var plantCard = document.createElement("div");
      plantCard.classList.add("popular");
      plantCard.innerHTML = `
    <div id="popular">
    <div id="plant">
        <img src="images/seedling2.jpg" alt="">
        <div id="specs">
            <h5>${element['category']}</h5>
            <p>${element["name"]}</p>
            <b>KES ${element['price']}</b>
        </div>
        <div id="cartt"><button><i class="fa-solid fa-cart-shopping"></i></button></div>
    </div>
</div>

        `;

      var plantContainer = document.querySelector(".popular-container");
      plantContainer.appendChild(plantCard);
    });
  })
  .catch((error) => console.log("error", error));
