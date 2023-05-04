"use strict";

window.addEventListener("DOMContentLoaded", (event) => {
  const burger = document.querySelector(".header__burger");
  const mobileMenu = document.querySelector(".mobile__menu");
  const spanOfBurger = document.querySelector(".burger");
  const body = document.querySelector("body");
  const skills = document.querySelector(".skills__progressbars");
  const progressbars = document.querySelectorAll(".bar__progress span");
  const skillsPercent = [60, 70, 80, 15, 45];

  //Activate burger

  function activateBurger() {
    burger.addEventListener("click", (e) => {
      e.preventDefault;
      mobileMenu.classList.toggle("active");
      spanOfBurger.classList.toggle("active");
      body.classList.toggle("lock");
    });
  }
  activateBurger();

  //Animate progressbar

  const sectionObserver = new IntersectionObserver(animateProgressbars, {
    threshold: 0.3,
  });
  sectionObserver.observe(skills);

  function animateProgressbars(entries, observe) {
    if (entries[0].isIntersecting) {
      progressbars.forEach((progressbar, i) => {
        let width = 1;
        let id = setInterval(frame, 15);
        function frame() {
          if (width >= skillsPercent[i]) {
            clearInterval(id);
          } else {
            width++;
            progressbar.style.width = width + "%";
          }
        }
      });
      sectionObserver.unobserve(skills);
    }
  }

  Fancybox.bind();
});
