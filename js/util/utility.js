/**
 * 
 * @param {*} m 
 * @returns {fixedMonth}
 */

function fixMonth(m){

  const fixMonthsMonths = [0, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return fixMonthsMonths[m];

}

/**
 * 
 * @param {*} d 
 * @returns {fixedDay}
 */

function fixDay(d){

  const fixDayDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return fixDayDays[d];

}

/**
 * 
 * @param {*} n 
 * @returns {formattedDate}
 */

function formatDate(n){
  
  switch(n){

      case 1:
          return "1st";
      case 2:
          return "2nd";
      case 3:
          return "3rd";
      case 21:
          return "21st";
      case 22:
          return "22nd";
      case 23:
          return "23rd";
      case 31:
          return "31st";
      default:
          return `${n}th`;

  }

}

/**
 * 
 * @returns {documentSelectedText}
 */

function getSelectionText(){

  if (document.getSelection) return document.getSelection().toString(); 
  
}

/**
 * @param {HTMLElement} elem
 * @param {string} fn
 * @param {string} elemClass
 */

function advancedClassHandler(elem, fn, elemClass) {
  if (fn.toLowerCase() == "add") {
    elem.classList.add(elemClass);
  } else if (fn.toLowerCase() == "remove") {
    elem.classList.remove(elemClass);
  }
}

/**
 * @param {HTMLElement} elem
 * @param {*} fn
 * @param {string} attr
 * @param {*} attrValue
 */

function advancedAttrHandler(elem, fn, attr, attrValue) {
  if (fn.toString().toLowerCase() == "add" || fn == 0) {
    elem.setAttribute(attr, attrValue);
  } else if (fn.toString().toLowerCase() == "remove" || fn == 1) {
    elem.removeAttribute(attr);
  }
}

/**
 * @fires window.location.href
 */

function refreshPage(){
  redirect(window.location.href);
}

/**
 * @param {URL} redirectLocation
 */

function redirect(redirectLocation) {

  window.location.href = redirectLocation;

}

/**
 * @param {URL} redirectLocation 
 */

function openNewPage(redirectLocation){
  parent.open(redirectLocation);
}

/**
 * @param {string} process
 * @param {*} element
 */

function getElement(process, element) {
  if (process.toString().toLowerCase() == "query" || process == 0) {
    return document.querySelector(element);
  } else if (process.toString().toLowerCase() == "id" || process == 1) {
    return document.getElementById(element);
  }
}

/**
 * @param {string} message
 * @param {string} type
 */

function notify(message, type, context) {
  let creat;
  if (
    document.getElementById("notification-area") === undefined ||
    document.getElementById("notification-area") === null
  ) {
    creat = document.createElement("div");
    creat.id = "notification-area";

    document.body.append(creat);
  } else {
    creat = document.getElementById("notification-area");
  }
  (() => {
    let createdDiv = document.createElement("div");
    let id = Math.random().toString(36).substring(2, 10);

    createdDiv.setAttribute("id", id);
    createdDiv.classList.add("notification", type);

    if (context) {
      createdDiv.classList.add("contextMenu");
    }

    createdDiv.innerHTML = `${message}\n<span class="notif notif-timer"></span>`;
    document.getElementById("notification-area").prepend(createdDiv);

    setTimeout(() => {
      var notifications = document
        .getElementById("notification-area")
        .getElementsByClassName("notification");
      for (let i = 0; i < notifications.length; i++) {
        if (notifications[i].getAttribute("id") == id) {
          notifications[i].remove();
          break;
        }
      }
    }, 5000);
  })();
}

/**
 * @param {*} text
 */

function copyText(text) {
  navigator.clipboard.writeText(text);
}

/** CREATING FULL SCREEN MENU */


const createdHamMenu = document.createElement("div");
createdHamMenu.classList.add("ham-menu");
createdHamMenu.id = "menu";

const toggleHamMenu = document.createElement("div");
toggleHamMenu.classList.add("toggle-menu");
toggleHamMenu.id = "toggle-menu";

toggleHamMenu.innerHTML = `
  <div class="span-c span-container">
    <span class="span menu-span menu-span1"></span>
    <span class="span menu-span menu-span2"></span>
    <span class="span menu-span menu-span3"></span>
  </div>
`;

document.body.prepend(toggleHamMenu);
document.body.prepend(createdHamMenu);

createdHamMenu.innerHTML = `

<div class="items-container" style="user-select: none">
  <h1 class="menu-item item-home item1">Home</h1>

  <h1 class="menu-item item-projects item2">Projects</h1>

  <h1 class="menu-item item-feedback item4">Feedback and Reviews</h1>

  <h1 class="menu-item item-settings item5">Settings</h1>
</div>

`;

const spanContainer_nope = document.querySelector(".span-c");
let _menuActive_ = false;

toggleHamMenu.addEventListener("click", () => {

  if(_menuActive_ === false){

    createdHamMenu.classList.add("active");
    _menuActive_ = true;

    spanContainer_nope.classList.add("active");

  } else if(_menuActive_){

    createdHamMenu.classList.remove("active");
    _menuActive_ = false;

    spanContainer_nope.classList.remove("active");

  }

});

const hamMenuItems = {
  home: document.querySelector(".item-home"),
  projects: document.querySelector(".item-projects"),
  reviews: document.querySelector(".item-feedback"),
  settings: document.querySelector(".item-settings")
};

hamMenuItems.home.addEventListener("click", () => {

  redirect("/");

});

hamMenuItems.projects.addEventListener("click", () => {

  redirect("/Projects.html")

});

hamMenuItems.reviews.addEventListener("click", () => {

  redirect("/Write.html");

});

hamMenuItems.settings.addEventListener("click", () => {

  redirect("/Settings.html");
  

});

if(!localStorage.getItem("normalFont")){
  localStorage.setItem("normalFont", "Quicksand");
}

if(!localStorage.getItem("codeFont")){
  localStorage.setItem("codeFont", "Jetbrains Mono");
}

document.body.style.setProperty(
  "--ff-primary",
  localStorage.getItem("normalFont")
);
document.body.style.setProperty(
  "--ff-primary-light",
  `${localStorage.getItem("normalFont")} Light`
);
document.body.style.setProperty(
  "--ff-primary-normal",
  `${localStorage.getItem("normalFont")} normal`
);
document.body.style.setProperty(
  "--ff-primary-medium",
  `${localStorage.getItem("normalFont")} Medium`
);
document.body.style.setProperty(
  "--ff-primary-semibold",
  `${localStorage.getItem("normalFont")} Semibold`
);
document.body.style.setProperty(
  "--ff-primary-bold",
  `${localStorage.getItem("normalFont")} Bold`
);

document.body.style.setProperty("--ff-code", localStorage.getItem("codeFont"));


const settingsCogIcon = document.querySelector(".gear-icon");

if(!settingsCogIcon){

  console.warn("[DEV] No settings icon found, terminating click process.\n\nYou do not need to pay attention to this.")

} else {

settingsCogIcon.addEventListener("click", () => {

  redirect("/Settings.html");

});

}

/** || inserting favicons || */

document.head.innerHTML += `
<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
`;

/** ADDING SHORTCUTS TO THE TOP OF THE SCREEN AFTER THE MENU  **/

const shortCutContainer = document.createElement("div");
shortCutContainer.classList.add("shortcut-menu");

shortCutContainer.innerHTML = `
  <a href="/">

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"/></svg>

  </a>

  <a href="/Projects.html">

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M512 144v288c0 26.5-21.5 48-48 48h-416C21.5 480 0 458.5 0 432v-352C0 53.5 21.5 32 48 32h160l64 64h192C490.5 96 512 117.5 512 144z"/></svg>

  </a>

  <a href="/Write.html">

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 31.1c-141.4 0-255.1 93.12-255.1 208c0 49.62 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734c1.249 3 4.021 4.766 7.271 4.766c66.25 0 115.1-31.76 140.6-51.39c32.63 12.25 69.02 19.39 107.4 19.39c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM127.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S145.7 271.1 127.1 271.1zM256 271.1c-17.75 0-31.1-14.25-31.1-31.1s14.25-32 31.1-32s31.1 14.25 31.1 32S273.8 271.1 256 271.1zM383.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S401.7 271.1 383.1 271.1z"/></svg>

  </a>

  <a href="/Settings.html">

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"/></svg>

  </a>
`

document.body.prepend(shortCutContainer);

if(!localStorage.getItem("shortcuts")) localStorage.setItem("shortcuts", "enabled");

if(localStorage.getItem("shortcuts") == "enabled"){
  shortCutContainer.classList.remove("disabled");
} else if(localStorage.getItem("shortcuts") == "disabled"){
  shortCutContainer.classList.add("disabled");
}

/** ADDING TEXT TO EACH PAGE IF IT'S TOO SMALL  */

const customHeader = document.createElement("custom-header");
customHeader.innerHTML = `
  Your Device Is Not Big Enough to View This Site

  <br>

  <small>
    (Maybe if you're on a desktop device, and this shows up, its probably because of too much zoom)
  </small>
`;

document.body.prepend(customHeader);