import Swiper from "../static/slider/script.js";

const headers = document.querySelectorAll(".section__header:not(.no-click)");
headers.forEach((header) => {
  header.addEventListener("click", (e) => {
    redirect("#" + e.target.parentElement.id);
  });
});

const introHeader = document.querySelector(".section__intro .section__header");
const starContainer = document.querySelector(".star-container");
const seeMoreAnchor = document.querySelector(".anchor__seeMore");

const headerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        introHeader.classList.add("scroll");
        starContainer.classList.add("scroll");
        seeMoreAnchor.classList.add("scroll");
      } else {
        introHeader.classList.remove("scroll");
        starContainer.classList.remove("scroll");
        seeMoreAnchor.classList.remove("scroll");
      }
    });
  },
  {
    threshold: .5,
  }
);

headerObserver.observe(document.querySelector(".section__intro"));

const progressBars = document.querySelectorAll(".actual-progress");

const Skillobserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          for (let i = 0; i < progressBars.length; i++) {
            progressBars[i].classList.add("active");
            progressBars[i].style.width =
              progressBars[i].getAttribute("data-progress");
          }
        }, 250);
      } else {
        for (let i = 0; i < progressBars.length; i++) {
          progressBars[i].classList.remove("active");
          progressBars[i].style.width = "0";
        }
      }
    });
  },
  {
    threshold: 0.5,
  }
);

progressBars.forEach((bar) => {
  Skillobserver.observe(bar);
});

const bestEffects = {
  coverflow: "coverflow",
  cards: "cards",
  custom: {
    creative: "creative",
    effect: {
      prev: {
        // will set `translateZ(-400px)` on previous slides
        translate: [0, 0, -400],
        scale: 0.5,
        origin: "right bottom",
      },
      next: {
        // will set `translateX(100%)` on next slides
        translate: ["100%", 0, 0],
        scale: 0.5,
        origin: "left top",
      },
    },
  },
};

new Swiper(".swiper", {
  effect: bestEffects.custom.creative,
  creativeEffect: bestEffects.custom.effect,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelectorAll("button").forEach((btn) => {
  btn.classList.add("custom");
});
