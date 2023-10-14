"use strict";

window.addEventListener("DOMContentLoaded", (event) => {
  const burger = document.querySelector(".header__burger");
  const mobileMenu = document.querySelector(".mobile__menu");
  const spanOfBurger = document.querySelector(".burger");
  const body = document.querySelector("body");
  const skills = document.querySelector(".skills__progressbars");
  const progressbars = document.querySelectorAll(".bar__progress span");
  const scrollButton = document.querySelector(".main-block__scroll");
  const skillsPercent = [80, 87, 83, 75, 65];
  const works = document.querySelectorAll(".work__item");

  const skillsSection = document.querySelector(".skills");
  const anchors = document.querySelectorAll(".contacts__string");
  const sections = document.querySelectorAll("section");

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

  var typed = new Typed("#typed-strings", {
    strings: [
      "Hello World!^50 My name is V^300italii",
      "Hello World!^500 I'm Front^300end Developer!",
      "^500I'm expirienced in Java^150Script, ^350React, ^250Redux",
    ],
    smartBackspace: true,
    typeSpeed: 50,
    backSpeed: 30,
    startDelay: 200,
    backDelay: 700,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: "_",
  });

  works.forEach((work) => {
    work.addEventListener("mouseenter", (e) => {
      e.preventDefault();
      let workExtension = work.querySelector(".work__extension");

      workExtension.classList.add("onShowing");
    });
    work.addEventListener("mouseleave", (e) => {
      e.preventDefault();
      let workExtension = work.querySelector(".work__extension");

      workExtension.classList.remove("onShowing");
    });
  });

  scrollButton.addEventListener("click", (e) => {
    e.preventDefault();
    skillsSection.scrollIntoView({ behavior: "smooth" });
  });

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      sections.forEach((section) => {
        if (section.classList.contains(e.target.getAttribute("data-anchor"))) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
});
