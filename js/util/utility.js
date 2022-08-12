/**
 * @param {*} text
 * @returns reversed text
 */

function reverse(text) {
  const newString = text.split("");
  newString.reverse();
  return newString.join("");
}

/**
 *
 * @param {*} m
 * @returns fixed month
 */

function fixMonth(m) {
  const fixMonthsMonths = [
    0,
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return fixMonthsMonths[m];
}

/**
 *
 * @param {*} d
 * @returns fixed day
 */

function fixDay(d) {
  const fixDayDays = [
    0,
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return fixDayDays[d];
}

/**
 *
 * @param {*} n
 * @returns formatted date
 */

function formatDate(n) {
  switch (n) {
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
 * @param {*} text
 * @returns toggle case text
 */

function toggleCase(str) {
  return str
    .toUpperCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toLowerCase() + word.slice(1);
    })
    .join(" ");
}

/**
 *
 * @param {*} SOMESTR
 * @returns opposite case text
 */

function oppositeCase(SOMESTR) {
  let updatedText;

  for (let i = 0; i < SOMESTR.length; i++) {
    if (i % 2 == 0) {
      updatedText += SOMESTR[i].toUpperCase();
    } else if (i % 2 != 0) {
      updatedText += SOMESTR[i].toLowerCase();
    }
  }

  return updatedText.split("undefined")[1];
}

/**
 * @fires document.getSelection
 * @returns {documentSelectedText}
 */

function getSelectionText() {
  if (document.getSelection) return document.getSelection().toString();
}

/**
 * @fires window.location.href
 * @returns undefined
 */

function refreshPage() {
  redirect(window.location.href);
}

/**
 * @param {URL} redirectLocation
 * @returns undefined
 */

function redirect(redirectLocation) {
  window.location.href = redirectLocation;
}

/**
 * @param {URL} redirectLocation
 * @returns undefined
 */

function openNewPage(redirectLocation) {
  parent.open(redirectLocation);
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

  const preference = localStorage.getItem("notifications");

  if (preference == "enabled") {
    let createdDiv = document.createElement("div");
    let id = Math.random().toString(36).substring(2, 10);

    createdDiv.setAttribute("id", id);
    createdDiv.classList.add("notification", type);

    if (context) {
      createdDiv.classList.add("contextMenu");
    }

    createdDiv.innerHTML = `
<div class="cross">
  <span class="cross__spans span1"></span>
  <span class="cross__spans span2""></span>
</div>
${message}
<span class="notif notif-timer"></span>`;
    document.getElementById("notification-area").prepend(createdDiv);

    setTimeout(() => {
      let notifications = document
        .getElementById("notification-area")
        .getElementsByClassName("notification");
      for (let i = 0; i < notifications.length; i++) {
        if (notifications[i].getAttribute("id") == id) {
          notifications[i].remove();
          break;
        }
      }
    }, 5000);
    const notifCrosses = document.querySelectorAll(".notification .cross");
    notifCrosses.forEach((e) => {
      e.addEventListener("click", () => {
        e.parentElement.remove();
      });
    });
  } else {
    return;
  }
}

/**
 * @param {*} text
 */

function copyText(text) {
  navigator.clipboard.writeText(text);
}

/**
 * 
 * @param {*} options 
 * @returns {randomizedOption}
 */

function randomize(options) {

  const length = options.length;
  const randomOption = options[Math.floor(Math.random() * length)]; 

  return randomOption;

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
  <h1 class="menu-item item-home item1" data-redirect="/">Home</h1>

  <h1 class="menu-item item-projects item2" data-redirect="/projects/">Projects</h1>

  <h1 class="menu-item item-settings item3" data-redirect="/Settings.html">Settings</h1>
</div>

`;

const menuSpans = document.querySelector(".span-c");
let _menuActive_ = false;

toggleHamMenu.addEventListener("click", () => {
  createdHamMenu.classList.toggle("active");
  menuSpans.classList.toggle("active");
});

const allMenuHeaders = document.querySelectorAll(".menu-item");
allMenuHeaders.forEach(header => {
  header.addEventListener("click", () => {
    redirect(header.getAttribute("data-redirect"));
  });
});

if (!localStorage.getItem("normalFont")) {
  localStorage.setItem("normalFont", "Quicksand");
}

if (!localStorage.getItem("codeFont")) {
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
  <a href="/" data-redirect="Home" class="shortcut short-home">

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"/></svg>

  </a>

  <a href="/Projects.html" data-redirect="Projects" class="shortcut short-projects">

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M512 144v288c0 26.5-21.5 48-48 48h-416C21.5 480 0 458.5 0 432v-352C0 53.5 21.5 32 48 32h160l64 64h192C490.5 96 512 117.5 512 144z"/></svg>

  </a>

  <a href="/Settings.html" data-redirect="Settings" class="shortcut short-settings">

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"/></svg>

  </a>
`;

document.body.prepend(shortCutContainer);

if (!localStorage.getItem("shortcuts"))
  localStorage.setItem("shortcuts", "enabled");

if (localStorage.getItem("shortcuts") == "enabled") {
  shortCutContainer.classList.remove("disabled");
} else if (localStorage.getItem("shortcuts") == "disabled") {
  shortCutContainer.classList.add("disabled");
}

if (!localStorage.getItem("particles"))
  localStorage.setItem("particles", "enabled");
if (!localStorage.getItem("particle-amount"))
  localStorage.setItem("particle-amount", 20);

if (!localStorage.getItem("theme")) localStorage.setItem("theme", "Default");

if (!localStorage.getItem("project-display"))
  localStorage.setItem("project-display", "Slider");

if (!localStorage.getItem("accent-color")) {
  localStorage.setItem("accent-color", "#2293fa");
}

if (!localStorage.getItem("accent-color-dark")) {
  localStorage.setItem("accent-color-dark", "#121417");
}

if (!localStorage.getItem("selection-color")) {
  localStorage.setItem("selection-color", "#00b6ff");
}

if (!localStorage.getItem("top-bottom-background")) {
  localStorage.setItem("top-bottom-background", "#54c0eb");
}

if (!localStorage.getItem("menu-placement")) {
  localStorage.setItem("menu-placement", "left");
}

if (!localStorage.getItem("notifications")) {
  localStorage.setItem("notifications", "enabled");
}

if(!localStorage.getItem("external-data")) {
  localStorage.setItem("external-data", "enabled");
}

document.body.style.setProperty(
  "--a-clr",
  localStorage.getItem("accent-color")
);
document.body.style.setProperty(
  "--a-clr-dark",
  localStorage.getItem("accent-color-dark")
);
document.body.style.setProperty(
  "--selection-color",
  localStorage.getItem("selection-color")
);
document.body.style.setProperty(
  "--top-btm-bg",
  localStorage.getItem("top-bottom-background")
);

if(!localStorage.getItem("clr-picker-color")) {
  localStorage.setItem("clr-picker-color", "white");
}

document.body.classList.add(`menu-${localStorage.getItem("menu-placement")}`);
