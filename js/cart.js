var myHeaders = new Headers();

function get_token() {
  var token = localStorage.getItem("Token");
  if(token ==null){
    window.location.href='auth.html'
  }
  else{
    return token
  }
} 

myHeaders.append(
  "Authorization",
  get_token()
);

var formdata = new FormData();
formdata.append("tree", "1");
formdata.append("quantity", "3");
formdata.append("longitude", "37");
formdata.append("latitude", "1");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("http://18.182.31.147/api/tree/order/", requestOptions)
  .then((response) =>
    response.json().then((result) => {
      var productList = document.querySelector(".cartitems")

      result.forEach((element) => {
        var cartCard = document.createElement("div");
        var tree = element["tree"];
        cartCard.innerHTML = `
    <div id="item">
    <div><img src="${tree["image"]}" alt=""></div>
    <div id="specs">
        <h5>${tree["category"]}</h5>
        <p>${tree["name"]}</p>
        <b>KES ${tree["price"]}</b>
    </div>
</div>
<div class="controls">
    <div class="remove">
        <div><i class="fa-solid fa-trash"></i>
        </div>&nbsp;<div>remove</div>
    </div>
    <div class="add">
        <button id="btn1"><i class="fa-solid fa-minus"></i></button>
        <input id="fel" type="number" name="" id="" placeholder="1" value='${element['quantity']}'>
        <button id="btn2"><i class="fa-solid fa-plus"></i></button>
    </div>
</div>
    
    `;
    productList.appendChild(cartCard);
      });
    })
  )
  .catch((error) => console.log(error));
 btn1=document.getElementById('btn1');
 btn2=document.getElementById('btn2');
 fiel=document.getElementById('fel');
var num=0;
btn1.onclick=()=>{
  num--;
fiel.innerText=num;

}
btn2.onclick=()=>{
  num++;
fiel.innerText=num

}