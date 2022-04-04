const skillsContainer = document.querySelector(".experience-and-things");
const buttonSwitch = document.querySelector("button.show-skills#show-skills[data-show-skills]");

const progressBars = document.querySelectorAll(".actual-progress");

let btnContent = "Show Skills";
let shown;

buttonSwitch.addEventListener("click", () => {

  if(skillsContainer.classList.contains("hidden")){
      btnContent = "Hide Skills";
      shown = true;
  }

  if(!skillsContainer.classList.contains("hidden")){
      btnContent = "Show Skills";
      shown = false;
  }

  skillsContainer.classList.toggle("hidden");
  buttonSwitch.textContent = btnContent;

  if(shown === true){

  for(let i = 0; i < progressBars.length; i++){

    progressBars[i].classList.add("active");
    progressBars[i].style.width = progressBars[i].getAttribute("data-progress");

  }

} else if(shown === false) {

  for (let i = 0; i < progressBars.length; i++) {

    progressBars[i].classList.remove("active");
    progressBars[i].style.width = "0";
    
  }

}

});