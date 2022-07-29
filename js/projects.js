import Swiper from "../static/slider/script.js";

const gridBtn = document.querySelector("#grid");
const gridCardContainer = document.querySelector(".grid-view > .card-container");

const cardsContainer = document.querySelector(".swiper-wrapper");
const gridSearchInput = document.querySelector("#search-projects-input");

gridBtn.addEventListener("click", () => {
  document.body.classList.toggle("grid");
  gridBtn.classList.toggle("selected");
});

const displayMode = localStorage.getItem("project-display");

if(displayMode == "Grid") {
  gridBtn.click();
}

fetch("/assets/web/projects.json").then(res => res.json()).then(data => {

  const projects = data.projects;

  const anchorOptions = [
    "Visit Project",
    "Check out Project",
    "Try the Project",
  ]

  for(let i = 0; i < projects.length; i++) {

      const createdCard = document.createElement("div");
      createdCard.classList.add("swiper-slide");
  
      createdCard.innerHTML = `
    <h2 class="card-header">${projects[i].title}</h2>

    <p class="card-brief">${projects[i].description}</p>

    <a class="card-visit" href="${projects[i].location}">${randomize(anchorOptions)}</a>
      `;
  
      cardsContainer.append(createdCard);

      const gridCard = document.createElement("div");
      gridCard.classList.add("grid-card");

      gridCard.innerHTML = `
      <h2 class="grid-card-header">${projects[i].title}</h2>
  
      <p class="grid-card-brief">${projects[i].description}</p>
  
      <a class="grid-card-visit" href="${projects[i].location}">${randomize(anchorOptions)}</a>
      `;

      gridCardContainer.append(gridCard);

  }

  let swiper = new Swiper(".swiper", {
    effect: 'coverflow',
    loop: true,
    focusableElements: 'button, input, svg, img, span',

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  addEventListener("keydown", (e) => {

    switch (e.key) {
      case "ArrowLeft":
        if(!document.body.classList.contains("grid")) {
          swiper.slidePrev();
        }
        break;
      
      case "ArrowRight":
        if(!document.body.classList.contains("grid")) {
          swiper.slideNext();
        }
        break;
    
      case "ArrowDown":
        if(document.body.classList.contains("grid")) {
          window.scrollBy(0, 500);
        }
      
        break;
      
      case "ArrowUp":
        if(document.body.classList.contains("grid")) {
          window.scrollBy(0, -500)
        }
    }

  });

  const allGridCardsHeader = document.querySelectorAll(".grid-card-header");

  gridSearchInput.addEventListener("input", (e) => {
    for(let i = 0; i < allGridCardsHeader.length; i++) {
      if(allGridCardsHeader[i].textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
        allGridCardsHeader[i].parentElement.classList.remove("no-search");
      } else {
        allGridCardsHeader[i].parentElement.classList.add("no-search");
      }
    }
  });

});

document.querySelectorAll("button").forEach(btn => btn.classList.add("custom"));