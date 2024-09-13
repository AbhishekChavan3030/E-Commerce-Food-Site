// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector("form");

//     form.addEventListener("submit", function (event) {
//         event.preventDefault();

//         const username = form.user.value;
//         const password = form.password.value;

//         // const adminUsername = "admin";
//         // const adminPassword = "pass123";

//         if (username === adminUsername && password === adminPassword) {
//             alert("Login successful!");
//             window.location.href = "home.html";
//         } else {
//             alert("Invalid username or password. Please try again.");
//         }
//         form.reset();
//     });
// });

// function signup(){



function signup(event) {
    event.preventDefault();
    const form = document.getElementById("signupform");
    const name = form.fullname.value;
    const email = form.email.value;
    const mobile = form.mobile.value;
    const address = form.address.value;
    const username = form.user.value;
    const password = form.password.value;

    if (name && email && mobile && address && username && password) {
        let user = { name, email, mobile, address, username, password };

        localStorage.setItem("user", JSON.stringify(user));

        
        alert("Account Created! Please login now.");
        form.reset();
        document.getElementById("card1").style.display = "block";
        document.getElementById("card2").style.display = "none";
    } else {
        alert("Please fill all the fields.");
    }
}

function login(event) {
    event.preventDefault();
    const form = document.getElementById("loginform");
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
        const username = form.user.value;
        const password = form.password.value;

        if (username === storedUser.username && password === storedUser.password) {
            alert("Login successful!");
            window.location.href = "home.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
        form.reset();
    } else {
        alert("No user found. Please create an account first.");
    }
}

document.getElementById("createaccount").addEventListener("click", () => {
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "block";
});

document.getElementById("loginuser").addEventListener("click", () => {
    document.getElementById("card1").style.display = "block";
    document.getElementById("card2").style.display = "none";
});
