document.addEventListener("DOMContentLoaded", display);

function display() {
  let items = document.getElementById("container");
  let getCart = JSON.parse(localStorage.getItem("cart")) || [];

  items.innerHTML = "";
  let count = 0;

    let total = 0;


  if (getCart.length === 0) {
    items.innerHTML = `<p>Your Cart is Empty</p>`;
    return;
  }

  getCart.map((element, index) => {
    count++;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    
  
             <div id="image">
                    <img src="${element.image}" alt="IMAGE">
             </div>
             <div id="details">
                    <h1>Rs. ${element.caloriesPerServing}</h1>
                    <h2>${element.name}</h2>
                    <h3>Cuisine: ${element.cuisine}</h3>
                     <button onclick="removeCart(${index})">Remove</button>
                     
                     </div>
                    
        

        `;
    items.appendChild(card);
  });
}

function removeCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  display();
}

document.getElementById("home").addEventListener("click", () => {
  window.location.href = "./home.html";
});
