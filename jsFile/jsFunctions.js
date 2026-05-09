function toggleMenu() {
  document.querySelector("nav ul").classList.toggle("open");
}

function showAlert(message) {
  alert(message);
}

function validateLogin() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email === "" || pass === "") {
    alert("Please fill all fields");
    return false;
  }
  alert("Login Successful!");
  return true;
}
/*  ============================================================== */
function toggleTheme(){

  const current =
  document.documentElement.getAttribute("data-theme");

  if(current === "dark"){
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme","light");
  } else {
    document.documentElement.setAttribute("data-theme","dark");
    localStorage.setItem("theme","dark");
  }
}

window.onload = function(){
  const savedTheme = localStorage.getItem("theme");
  if(savedTheme === "dark"){
    document.documentElement.setAttribute("data-theme","dark");
  }
}
/*  ============================================================== */
function filterCourses(type) {
  const rows = document.querySelectorAll("#courseTable tbody tr");

  rows.forEach(row => {
    const status = row.getAttribute("data-status");

    if (type === "all" || status === type) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}