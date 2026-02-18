// let isDark = false;
let isDark = localStorage.getItem("isDark") === "true";
document.body.classList.toggle("dark", isDark);

const btn = document.getElementById("toggleBtn");

btn.addEventListener("click", function () {
  isDark = !isDark;
  document.body.classList.toggle("dark", isDark);
  localStorage.setItem("isDark", isDark); //persisting state
  console.log("Dark mode:", isDark);
});
