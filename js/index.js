import Swiper from "../static/slider/script.js";

const headers = document.querySelectorAll(".section__header");
headers.forEach((header) => {
  header.addEventListener("click", (e) => {
    redirect("#" + e.target.parentElement.id);
  });
});

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

const exploreBtns = document.querySelectorAll(".explore-btn");

exploreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    redirect(btn.getAttribute("data-redirect"));
  });
});

const starRepoBtn = document.querySelector("#nav-star-github");

starRepoBtn.addEventListener("click", () => {
  redirect(starRepoBtn.getAttribute("data-redirect"));
});

if (localStorage.getItem("external-data") == "enabled") {

  document.querySelector(".latest-commit").classList.remove("fetch-disabled");

  fetch("https://api.github.com/repos/chill31/chill31.github.io")
    .then((res) => res.json())
    .then((data) => {
      const starAmount = data.stargazers_count;
      starRepoBtn.setAttribute("data-stars", starAmount);
    });

  fetch("https://api.github.com/repos/chill31/chill31.github.io/commits")
    .then((res) => res.json())
    .then((mainData) => {
      const latestCommit = mainData[0].commit;
      fetch(latestCommit.url)
        .then((res) => res.json())
        .then((data) => {
          const latestCommitSpan = document.querySelector(".write-commit");
          latestCommitSpan.textContent = mainData[0].commit.message;
          latestCommitSpan.setAttribute("href", data.html_url);
        });
    });

} else {
  document.querySelector(".latest-commit").classList.add("fetch-disabled");
}

document.querySelectorAll("button").forEach((btn) => {
  btn.classList.add("custom");
});
