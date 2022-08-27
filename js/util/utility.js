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
    "Sunday",
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

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
  </svg>

  </a>

  <a href="/Projects.html" data-redirect="Projects" class="shortcut short-projects">

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
  </svg>

  </a>

  <a href="/Settings.html" data-redirect="Settings" class="shortcut short-settings">

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
    </svg>

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

if(!localStorage.getItem("reduced-motion")) {
  localStorage.setItem("reduced-motion", "enabled");
}

if(!localStorage.getItem("clr-picker-color")) {
  localStorage.setItem("clr-picker-color", "white");
}

if(localStorage.getItem("reduced-motion") == "enabled") {
  document.body.classList.remove("no-motion");
} else {
  document.body.classList.add("no-motion");
}

document.body.classList.add(`menu-${localStorage.getItem("menu-placement")}`);
