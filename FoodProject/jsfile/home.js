let food = [];
getFood();

function getFood() {
  fetch("https://dummyjson.com/recipes")
    .then((response) => response.json())
    .then((data) => {
      food = data.recipes;
      console.log(food);

      localStorage.setItem("food", JSON.stringify(food));
      fetchFood(food);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function fetchFood(food) {
  let output = "";
  food.forEach((element) => {
    output += `
        <div id="card">
             <div id="image">
                    <img src="${element.image}" alt="IMAGE">
             </div>
             <div id="details">
                    <h1>Rs. ${element.caloriesPerServing}</h1>
                    <h2>${element.name}</h2>
                    <h3>Cuisine: ${element.cuisine}</h3>
                    <button id="viewmore" onclick="viewMore(${element.id})">View More</button>
             </div>
        </div>
        `;
  });

  // Fixed typo: "conatainer" to "container"
  document.getElementById("container").innerHTML = output;
}

let search = document.getElementById("searchbar");
search.addEventListener("input", searchFood);

function searchFood(event) {
  let input = event.target.value.toLowerCase();
  let filterFood = food.filter((val) => {
    return (
      val.name.toLowerCase().includes(input) ||
      val.cuisine.toLowerCase().includes(input)
    );
  });
  fetchFood(filterFood);
}

function viewMore(foodID) {
  console.log(foodID);
  localStorage.setItem("foodId", foodID);
  window.location.href = "/viewMore.html";  
}

document.getElementById("cart").addEventListener("click", () => {
  window.location.href = "./cart.html";
});

const storedUser = JSON.parse(localStorage.getItem("user"));

document.getElementById("user").innerText =storedUser.name; 
document.getElementById("mobile").innerText ="Mobile - "+storedUser.mobile; 
document.getElementById("email").innerText ="Email - "+storedUser.email; 
document.getElementById("address").innerText ="Address - "+storedUser.address; 
document.getElementById("Logout").innerText= "LogOut";


function handleSelectChange() {
  const dropdown = document.getElementById("dropdwoncontent");
  const selectedValue = dropdown.value;

  if (selectedValue === "logout") {
    alert("You have logged out!");
    window.location.href = "./login.html";
  }
}