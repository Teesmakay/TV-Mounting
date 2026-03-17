document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
  });
});
<script>
  window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".custom-navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
</script>
