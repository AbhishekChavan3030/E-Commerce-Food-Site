
document.addEventListener("DOMContentLoaded", () => {
    let getfood = JSON.parse(localStorage.getItem("food"));
    console.log(getfood);
  
    let container = document.getElementById("container");
  
    let foodId = localStorage.getItem("foodId");
  
    if (getfood && foodId) {
      let selectedFood = getfood.find((food) => food.id == foodId);
  
      if (selectedFood) {
        container.innerHTML = `
          <div id="card">
             <div id="image">
                <img src="${selectedFood.image}" alt="IMAGE">
             </div>
             <div id="details">
                <h1>${selectedFood.name}</h1>
                <h3>Cuisine: ${selectedFood.cuisine}</h3>
                <h3>MealType: ${selectedFood.mealType}</h3>
                <h3>Preparation Time in Minutes: ${selectedFood.prepTimeMinutes} Min</h3>
                <button id="addcart">Add to Cart</button>
                <button id="home">Back to Home</button>
             </div>
          </div>
        `;

        document.getElementById("addcart").addEventListener("click", () => {
            addToCart(selectedFood);
          });
    
          document.getElementById("home").addEventListener("click", () => {
            window.location.href = "./home.html";
          });
      }
    }
  });

  
function addToCart(food) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(food);
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product is added to cart");
  }
  
  