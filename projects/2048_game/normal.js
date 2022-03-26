import Grid from "./grid.js"
import Tile from "./tiles.js"

const gameBoard = document.getElementById("game-board")

const grid = new Grid(gameBoard)
grid.randomEmptyCell().tile = new Tile(gameBoard)
grid.randomEmptyCell().tile = new Tile(gameBoard)
setupInput()

function setupInput() {
  window.addEventListener("keydown", handleInput, { once: true })
}

async function handleInput(e) {
  switch (e.key) {
    case "ArrowUp":
      if (!canMoveUp()) {
        setupInput()
        return
      }
      await moveUp()
      break
    case "ArrowDown":
      if (!canMoveDown()) {
        setupInput()
        return
      }
      await moveDown()
      break
    case "ArrowLeft":
      if (!canMoveLeft()) {
        setupInput()
        return
      }
      await moveLeft()
      break
    case "ArrowRight":
      if (!canMoveRight()) {
        setupInput()
        return
      }
      await moveRight()
      break
    default:
      setupInput()
      return
  }

  grid.cells.forEach(cell => cell.mergeTiles())

  const newTile = new Tile(gameBoard)
  grid.randomEmptyCell().tile = newTile

  if (!canMoveUp() && !canMoveDown() && !canMoveLeft() && !canMoveRight()) {
    newTile.waitForTransition(true).then(() => {
      notify("Game ended, refresh the website to try again.", "info")
    })
    return
  }

  setupInput()
}

function moveUp() {
  return slideTiles(grid.cellsByColumn)
}

function moveDown() {
  return slideTiles(grid.cellsByColumn.map(column => [...column].reverse()))
}

function moveLeft() {
  return slideTiles(grid.cellsByRow)
}

function moveRight() {
  return slideTiles(grid.cellsByRow.map(row => [...row].reverse()))
}

function slideTiles(cells) {
  return Promise.all(
    cells.flatMap(group => {
      const promises = []
      for (let i = 1; i < group.length; i++) {
        const cell = group[i]
        if (cell.tile == null) continue
        let lastValidCell
        for (let j = i - 1; j >= 0; j--) {
          const moveToCell = group[j]
          if (!moveToCell.canAccept(cell.tile)) break
          lastValidCell = moveToCell
        }

        if (lastValidCell != null) {
          promises.push(cell.tile.waitForTransition())
          if (lastValidCell.tile != null) {
            lastValidCell.mergeTile = cell.tile
          } else {
            lastValidCell.tile = cell.tile
          }
          cell.tile = null
        }
      }
      return promises
    })
  )
}

function canMoveUp() {
  return canMove(grid.cellsByColumn)
}

function canMoveDown() {
  return canMove(grid.cellsByColumn.map(column => [...column].reverse()))
}

function canMoveLeft() {
  return canMove(grid.cellsByRow)
}

function canMoveRight() {
  return canMove(grid.cellsByRow.map(row => [...row].reverse()))
}

function canMove(cells) {
  return cells.some(group => {
    return group.some((cell, index) => {
      if (index === 0) return false
      if (cell.tile == null) return false
      const moveToCell = group[index - 1]
      return moveToCell.canAccept(cell.tile)
    })
  })
}



/*

||** UTILITY FUNCTIONS START NOW **||
||** UTILITY FUNCTIONS START NOW **||
||** UTILITY FUNCTIONS START NOW **||

*/



function getSelectionText() {
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
 * @param {string} redirectLocation
 */

function redirect(redirectLocation) {
  window.location.href = redirectLocation;
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
  copyText: document.querySelector(".copyThing"),
};

var selected;

window.addEventListener("contextmenu", (e) => {
  selected = getSelectionText();
  e.preventDefault();

  let _y =
    e.y + contextMenu.offsetHeight > window.innerHeight
      ? window.innerHeight - contextMenu.offsetHeight
      : e.y;
  let _x =
    e.x + contextMenu.offsetWidth > window.innerWidth
      ? window.innerWidth - contextMenu.offsetWidth
      : e.x;

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
});

customBtns.copyText.addEventListener("click", () => {
  copyText(selected);
  notify("Successfully copied the text.", "success");
});

// no functions, all files same code.

const check = document.getElementById("menu-check");

document.body.addEventListener("keydown", (event) => {
  if (event.key == "Escape") {
    check.checked = false;
  }
});

const createdMenu = document.createElement("nav");
createdMenu.setAttribute("role", "navigation");

createdMenu.innerHTML = `
            <div id="menuToggle">

                <input type="checkbox" id="menu-check" />

                <span></span>
                <span></span>
                <span></span>

                <ul id="menu" class="normal_pages_ul" style="border-radius: .25rem;">


                    <a href="/" class="menu-item">

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="house" class="menu-svg"
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="currentColor"
                                d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z">
                            </path>
                        </svg>
                        <li>Home</li>

                    </a>

                    <a href="/Projects.html" class="menu-item">

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="folder" class="menu-svg"
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                d="M464 96h-192l-64-64h-160C21.5 32 0 53.5 0 80V160h512V144C512 117.5 490.5 96 464 96zM0 432C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48V192H0V432z">
                            </path>
                        </svg>
                        <li>My Projects</li>

                    </a>

                    <a href="/Feed.html" class="menu-item">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="menu-svg">
                            <path
                                d="M384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM150.6 374.6C144.4 380.9 136.2 384 128 384s-16.38-3.121-22.63-9.371c-12.5-12.5-12.5-32.76 0-45.26C111.6 323.1 119.8 320 128 320s16.38 3.121 22.63 9.371C163.1 341.9 163.1 362.1 150.6 374.6zM249.6 383.9C249 383.1 248.5 384 247.1 384c-12.53 0-23.09-9.75-23.92-22.44C220.5 306.9 173.1 259.5 118.4 255.9c-13.22-.8438-23.25-12.28-22.39-25.5c.8594-13.25 12.41-22.81 25.52-22.38c77.86 5.062 145.3 72.5 150.4 150.4C272.8 371.7 262.8 383.1 249.6 383.9zM345 383.1C344.7 384 344.3 384 343.1 384c-12.8 0-23.42-10.09-23.97-23C315.6 254.6 225.4 164.4 119 159.1C105.8 159.4 95.47 148.3 96.02 135C96.58 121.8 107.9 111.2 121 112c130.7 5.469 241.5 116.3 246.1 246.1C368.5 372.3 358.3 383.4 345 383.1z" />
                        </svg>
                        <li>Feed</li>

                    </a>

                    <a href="/Write.html" class="menu-item">

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment-dots"
                            class="menu-svg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                d="M256 31.1c-141.4 0-255.1 93.12-255.1 208c0 49.62 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734c1.249 3 4.021 4.766 7.271 4.766c66.25 0 115.1-31.76 140.6-51.39c32.63 12.25 69.02 19.39 107.4 19.39c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM127.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S145.7 271.1 127.1 271.1zM256 271.1c-17.75 0-31.1-14.25-31.1-31.1s14.25-32 31.1-32s31.1 14.25 31.1 32S273.8 271.1 256 271.1zM383.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S401.7 271.1 383.1 271.1z">
                            </path>
                        </svg>
                        <li>Leave a review</li>

                    </a>

                    <a href="/Learn.html" class="menu-item">

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" class="menu-svg"
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path fill="currentColor"
                                d="M416 31.94C416 21.75 408.1 0 384.1 0c-13.98 0-26.87 9.072-30.89 23.18l-128 448c-.8404 2.935-1.241 5.892-1.241 8.801C223.1 490.3 232 512 256 512c13.92 0 26.73-9.157 30.75-23.22l128-448C415.6 37.81 416 34.85 416 31.94zM176 143.1c0-18.28-14.95-32-32-32c-8.188 0-16.38 3.125-22.62 9.376l-112 112C3.125 239.6 0 247.8 0 255.1S3.125 272.4 9.375 278.6l112 112C127.6 396.9 135.8 399.1 144 399.1c17.05 0 32-13.73 32-32c0-8.188-3.125-16.38-9.375-22.63L77.25 255.1l89.38-89.38C172.9 160.3 176 152.2 176 143.1zM640 255.1c0-8.188-3.125-16.38-9.375-22.63l-112-112C512.4 115.1 504.2 111.1 496 111.1c-17.05 0-32 13.73-32 32c0 8.188 3.125 16.38 9.375 22.63l89.38 89.38l-89.38 89.38C467.1 351.6 464 359.8 464 367.1c0 18.28 14.95 32 32 32c8.188 0 16.38-3.125 22.62-9.376l112-112C636.9 272.4 640 264.2 640 255.1z">
                            </path>
                        </svg>
                        <li>Learn web dev</li>

                    </a>

                    <div class="sep" id="sep1"></div>

                    <a href="/Settings.html" class="menu-item">

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gear" class="menu-svg"
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                            onClick="window.location.href='Settings.html'">
                            <path fill="currentColor"
                                d="M499.5 332c0-5.66-3.112-11.13-8.203-14.07l-46.61-26.91C446.8 279.6 448 267.1 448 256s-1.242-23.65-3.34-35.02l46.61-26.91c5.092-2.941 8.203-8.411 8.203-14.07c0-14.1-41.98-99.04-63.86-99.04c-2.832 0-5.688 .7266-8.246 2.203l-46.72 26.98C362.9 94.98 342.4 83.1 320 75.16V21.28c0-7.523-5.162-14.28-12.53-15.82C290.8 1.977 273.7 0 256 0s-34.85 1.977-51.48 5.461C197.2 7.004 192 13.76 192 21.28v53.88C169.6 83.1 149.1 94.98 131.4 110.1L84.63 83.16C82.08 81.68 79.22 80.95 76.39 80.95c-19.72 0-63.86 81.95-63.86 99.04c0 5.66 3.112 11.13 8.203 14.07l46.61 26.91C65.24 232.4 64 244 64 256s1.242 23.65 3.34 35.02l-46.61 26.91c-5.092 2.941-8.203 8.411-8.203 14.07c0 14.1 41.98 99.04 63.86 99.04c2.832 0 5.688-.7266 8.246-2.203l46.72-26.98C149.1 417 169.6 428.9 192 436.8v53.88c0 7.523 5.162 14.28 12.53 15.82C221.2 510 238.3 512 255.1 512s34.85-1.977 51.48-5.461C314.8 504.1 320 498.2 320 490.7v-53.88c22.42-7.938 42.93-19.82 60.65-34.97l46.72 26.98c2.557 1.477 5.416 2.203 8.246 2.203C455.3 431 499.5 349.1 499.5 332zM256 336c-44.11 0-80-35.89-80-80S211.9 176 256 176s80 35.89 80 80S300.1 336 256 336z">
                            </path>
                        </svg>
                        <li>Settings</li>

                    </a>

                </ul>
            </div>
`;

const topHeaderStrip = document.querySelector(".top-header-cnt");
if (!topHeaderStrip) {
  document.body.prepend(createdMenu);
} else if (topHeaderStrip) {
  topHeaderStrip.prepend(createdMenu);
}