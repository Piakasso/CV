"use strict";

window.addEventListener("DOMContentLoaded", (event) => {
  const burger = document.querySelector(".header__burger");
  const mobileMenu = document.querySelector(".mobile__menu");
  const spanOfBurger = document.querySelector(".burger");
  const body = document.querySelector("body");
  const skills = document.querySelector(".skills__progressbars");
  const progressbars = document.querySelectorAll(".bar__progress span");

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
    threshold: 0.4,
  });
  sectionObserver.observe(skills);

  function animateProgressbars(entries, observe) {
    if (entries[0].isIntersecting) {
      progressbars.forEach((progressbar, i) => {
        progressbar.outerHTML = `
            <span id=bar${i + 1}></span>
        `;
      });
      sectionObserver.unobserve(skills);
    }
  }

  Fancybox.bind();
});
