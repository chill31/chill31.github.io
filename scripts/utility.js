document.head.innerHTML += `  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">`;

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
 * @param {*} text
 * @returns capitalized text
 */

function capitalize(text) {
  const words = text.split(" ");
  const newWords = [];

  words.forEach((word) => {
    const newWord = word[0].toUpperCase() + word.substring(1);
    newWords.push(newWord);
  });

  return newWords.join(" ");
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

/** IMPORTANT CODE **/

const newCreatedDiv = document.createElement("div");
newCreatedDiv.classList.add("home-button");

newCreatedDiv.innerHTML = `
  <i class="bi-house"></i>
`;

document.body.append(newCreatedDiv);

const homeButton = document.querySelector(".home-button");

homeButton.addEventListener("click", () => {
  redirect("/");
});
