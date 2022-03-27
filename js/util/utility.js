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

    createdDiv.innerHTML = message;
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

/* context menu code. */

const createdContextMenu = document.createElement("div");
createdContextMenu.classList.add("wrapperContextMenu");
document.body.append(createdContextMenu);

createdContextMenu.innerHTML = `
<div class="content">
    <ul class="menu">
        <li class="item backHome">
            <span>Home</span>
        </li>
        <li class="item myFeed">
            <span>Feed</span>
        </li>
        <li class="item copylink">
            <span>Copy Link</span>
        </li>
        <li class="item myprojs">
            <span>My Projects</span>
        </li>
        <li class="item learndev">
            <span>Learn Webdev</span>
        </li>
        <li class="item opencog">
            <span>Open Settings</span>
        </li>
      </ul>
      <div class="normal">
         <ul class="menu">
          <li class="item reloadPage">
            <span>Reload Page</span>
          </li>
          <li class="item copyThing">
            <span>Copy</span>
          </li>
         </ul>
      </div>
</div>
`;

var mouseX;
var mouseY;

document.addEventListener("mousemove", (e) => {

  mouseX = e.pageX;
  mouseY = e.pageY;

});

function rmVis(emt) {
  emt.style.opacity = "0";
  emt.style.pointerEvents = "none";
  emt.style.height = "0";
  emt.style.width = "0";
}

function addVis(emt) {
  emt.style.opacity = "1";
  emt.style.pointerEvents = "all";
  emt.style.height = "inherit";
  emt.style.width = "22.5vw";
}

const contextMenu = document.querySelector(".wrapperContextMenu");

const customBtns = {
  goHome: document.querySelector(".backHome"),
  copyLink: document.querySelector(".copylink"),
  myProjects: document.querySelector(".myprojs"),
  learnWebdev: document.querySelector(".learndev"),
  openSettings: document.querySelector(".opencog"),
  // normal buttons now.
  reloadPage: document.querySelector(".reloadPage"),
  copyText: document.querySelector(".copyThing")
};

var selected;

window.addEventListener("contextmenu", (e) => {

  selected = getSelectionText();
  e.preventDefault();

  let _y = e.y + contextMenu.offsetHeight > window.innerHeight ? window.innerHeight - contextMenu.offsetHeight : e.y;
  let _x = e.x + contextMenu.offsetWidth > window.innerWidth ? window.innerWidth - contextMenu.offsetWidth : e.x;

 // contextMenu.style.left = `${e.x}px`;
 // contextMenu.style.top = `${e.y}px`;
 contextMenu.style.top = _y + "px";
 contextMenu.style.left = _x + "px";

  addVis(contextMenu);
});
document.addEventListener("click", () => rmVis(contextMenu));
document.addEventListener("keyup", (e) => {
  if (e.key.toLowerCase() === "escape") {
    rmVis(contextMenu);
  }
});

customBtns.goHome.addEventListener("click", () => {
  redirect("/");
});

customBtns.copyLink.addEventListener("click", () => {
  copyText(window.location.href);
  notify(`Successfully copied the link to this website`, "success");
});

customBtns.learnWebdev.addEventListener("click", () => {
  redirect("/Learn.html");
});

customBtns.myProjects.addEventListener("click", () => {
  redirect("/Projects.html");
});

customBtns.openSettings.addEventListener("click", () => {
  redirect("/Settings.html");
});

customBtns.reloadPage.addEventListener("click", () => {

  window.location.href = window.location.href;

})

customBtns.copyText.addEventListener("click", () => {

  copyText(selected);
  notify("Successfully copied the text.", "success");

});

/* big full page hamburger menu */


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

<div class="items-container">
  <h1 class="menu-item item-home">Home</h1>

  <h1 class="menu-item item-projects">Projects</h1>

  <h1 class="menu-item item-feed">Feed</h1>

  <h1 class="menu-item item-learn">Learn Webdev</h1>

  <h1 class="menu-item item-feedback">Feedback and Reviews</h1>

  <h1 class="menu-item item-settings">Settings</h1>
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
  feed: document.querySelector(".item-feed"),
  learnWebdev: document.querySelector(".item-learn"),
  reviews: document.querySelector(".item-feedback"),
  settings: document.querySelector(".item-settings")
};

hamMenuItems.home.addEventListener("click", () => {

  redirect("/");

});

hamMenuItems.projects.addEventListener("click", () => {

  redirect("/Projects.html")

});

hamMenuItems.feed.addEventListener("click", () => {

  redirect("/Feed.html");

});

hamMenuItems.learnWebdev.addEventListener("click", () => {

  redirect("/Learn.html")

});

hamMenuItems.reviews.addEventListener("click", () => {

  redirect("/Write.html");

});

hamMenuItems.settings.addEventListener("click", () => {

  redirect("/Settings.html");
  

});