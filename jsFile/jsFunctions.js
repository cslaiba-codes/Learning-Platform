function toggleTheme() {
  const body = document.body;
  body.dataset.theme = body.dataset.theme === "dark" ? "light" : "dark";
}

function toggleMenu() {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("open");
}

function validateLogin() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email === "" || pass === "") {
    alert("Please fill all fields");
    return false;
  }

  alert("Login Successful (Demo)");
  return true;
}