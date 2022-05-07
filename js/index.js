const skillsContainer = document.querySelector(".experience-and-things");
const buttonSwitch = document.querySelector(
  "button.show-skills#show-skills[data-show-skills]"
);

const progressBars = document.querySelectorAll(".actual-progress");

let btnContent = "Show Skills";
let shown;

buttonSwitch.addEventListener("click", () => {
  if (skillsContainer.classList.contains("hidden")) {
    btnContent = "Hide Skills";
    shown = true;
  }

  if (!skillsContainer.classList.contains("hidden")) {
    btnContent = "Show Skills";
    shown = false;
  }

  skillsContainer.classList.toggle("hidden");
  buttonSwitch.textContent = btnContent;

  if (shown === true) {
    for (let i = 0; i < progressBars.length; i++) {
      progressBars[i].classList.add("active");
      progressBars[i].style.width = progressBars[i].getAttribute("data-progress");
    }
  } else if (shown === false) {
    for (let i = 0; i < progressBars.length; i++) {
      progressBars[i].classList.remove("active");
      progressBars[i].style.width = "0";
    }
  }
});

/** LOCAL STORAGE NOTIFY POPUP  */

const localStorageNotifPopup = document.querySelector(".localStorage__notif");
const confirmButton = document.querySelector(".localStorage__confirm");
const image = document.querySelector(".localStorage__imgBrowser");


const {userAgent} = navigator;

if(userAgent.match(/edge|edg/i)){

  image.setAttribute("src", "/assets/img/edge.png");

} else if(userAgent.match(/firefox|fxios/i)){

  image.setAttribute("src", "/assets/img/firefox.png");

} else if(userAgent.match(/opr|opera/i)){

  image.setAttribute("src", "/assets/img/opera.png");

 }else if(userAgent.match(/chrome|chromium|crios/i)){

  image.setAttribute("src", "/assets/img/chrome.png");

} else if(userAgent.match(/safari/i)){

  image.setAttribute("src", "/assets/img/safari.png");

} else{
  image.setAttribute("src", "/assets/img/no-favicon.svg");
}

  if(localStorage.getItem("confirmed__localStorage") == "true") {

    localStorageNotifPopup.classList.add("confirmed__localStorage");

  } else if(localStorage.getItem("confirmed__localStorage") == "false") {

  localStorageNotifPopup.classList.remove("confirmed__localStorage");

  }

confirmButton.addEventListener("click", () => {

  localStorageNotifPopup.classList.add("confirmed__localStorage");
  localStorage.setItem("confirmed__localStorage", true);

});