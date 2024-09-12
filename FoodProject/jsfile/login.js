document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = form.user.value;
        const password = form.password.value;

        const adminUsername = "admin";
        const adminPassword = "pass123";

        if (username === adminUsername && password === adminPassword) {
            alert("Login successful!");
            window.location.href = "home.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
        form.reset();
    });
});
