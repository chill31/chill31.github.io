const nameHeader = document.querySelector(".name");
const btnGroup = document.querySelector(".btn-group");
const starButton = document.querySelector(".star-github");
const projectsButton = document.querySelector(".go-projects");
const briefPara = document.querySelector(".brief");
const descriptionPara = document.querySelector(".description"); 
const projectBox = document.querySelector(".project-box");

const headerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if(entry.isIntersecting) {
        nameHeader.classList.add("loaded");
        btnGroup.classList.add("loaded");
        starButton.classList.add("loaded");
        projectsButton.classList.add("loaded");

        setTimeout(() => {
          briefPara.classList.add("loaded");
        }, 450);

        setTimeout(() => {
          descriptionPara.classList.add("loaded");
        }, 900);

        setTimeout(() => {
          projectBox.classList.add("loaded")
        }, 1350);
      } else {
        // do nothing
      }

    })
  }
);

headerObserver.observe(nameHeader);