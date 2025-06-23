const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }

  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }

  lastScroll = currentScroll;
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 && rect.bottom >= 0;
  }

  function handleScroll() {
    cards.forEach((card) => {
      if (isInViewport(card)) {
        card.classList.add("show");
      }
    });
  }

  handleScroll();
  window.addEventListener("scroll", handleScroll);

  const memberCards = document.querySelectorAll(".member-card");
  memberCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.querySelector(".shadow").style.opacity = "1";
    });
    card.addEventListener("mouseleave", function () {
      this.querySelector(".shadow").style.opacity = "0";
    });
  });
});

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
  document.querySelector(".hamburger").classList.toggle("active");
}
