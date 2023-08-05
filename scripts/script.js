const nameHeader = document.querySelector(".name");
const btnGroup = document.querySelector(".btn-group");
const gitButton = document.querySelector(".github");
const newSiteBtn = document.querySelector(".go-projects");
const briefPara = document.querySelector(".brief");
const descriptionPara = document.querySelector(".description"); 

const headerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if(entry.isIntersecting) {
        nameHeader.classList.add("loaded");
        btnGroup.classList.add("loaded");
        gitButton.classList.add("loaded");
        newSiteBtn.classList.add("loaded");

        setTimeout(() => {
          briefPara.classList.add("loaded");
        }, 450);

        setTimeout(() => {
          descriptionPara.classList.add("loaded");
        }, 900);
      }
    })
  }
);

headerObserver.observe(nameHeader);