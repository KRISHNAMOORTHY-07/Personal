// Toggle Menu
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav_toggle");
  const navMenu = document.getElementById("nav_menu");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Scroll Active Link
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      const navLink = document.querySelector(
        ".nav_menu a[href*=" + sectionId + "]"
      );

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink?.classList.add("active-link");
      } else {
        navLink?.classList.remove("active-link");
      }
    });
  });
});
