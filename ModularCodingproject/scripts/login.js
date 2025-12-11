document.getElementById("loginBtn").addEventListener("click", () => {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  let stored = JSON.parse(localStorage.getItem("user"));

  if (!stored) {
    alert("No user found! Please signup.");
    return;
  }

  if (stored.email === email && stored.password === pass) {
    localStorage.setItem("loggedIn", "true");
    alert("Login Successful!");
    window.location.href = "todos.html";
  } else {
    alert("Invalid Credentials!");
  }
});
