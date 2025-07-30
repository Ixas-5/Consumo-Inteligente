document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const menu = document.querySelector(".menu");
  const links = document.querySelectorAll(".menu li a");

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
});