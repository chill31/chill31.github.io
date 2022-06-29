import Swiper from "../static/slider/script.js";

const headers = document.querySelectorAll(".section__header");
headers.forEach(header => {

    header.addEventListener("click", (e) => {
        redirect("#" + e.target.parentElement.id);
    });

});


const introSection = document.querySelector(".section__intro");
introSection.addEventListener("click", (e) => {
    if(e.target.classList.contains("section__header")) {
        return;
    }
    redirect("#skills");
});

const interItems = document.querySelectorAll(".item-inter");

const progressBars = document.querySelectorAll(".actual-progress");

const Skillobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    
    if(entry.isIntersecting) {
      setTimeout(() => {
        for (let i = 0; i < progressBars.length; i++) {
          progressBars[i].classList.add("active");
          progressBars[i].style.width = progressBars[i].getAttribute("data-progress");
        }
      }, 250);
    } else {
        for (let i = 0; i < progressBars.length; i++) {
          progressBars[i].classList.remove("active");
          progressBars[i].style.width = "0";
        }
    }

  });
}, {
  threshold: .5
}
);

progressBars.forEach(bar => {
    Skillobserver.observe(bar);
});

const bestEffects = {
  coverflow: 'coverflow',
  cards: 'cards',
  custom: 'creative'
}

new Swiper('.swiper', {
  effect: bestEffects.custom,
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
      scale: .5,
      origin: 'right bottom'
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['100%', 0, 0],
      scale: .5,
      origin: 'left top'
    },
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const exploreBtns = document.querySelectorAll(".explore-btn");

exploreBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    redirect(btn.getAttribute("data-redirect"));
  });
});