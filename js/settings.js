function removeActive(allEl) {
  allEl.forEach((el) => el.removeAttribute("data-chosen"));
}

function makeActive(el, allEl) {

  removeActive(allEl);
  el.setAttribute("data-chosen", "");

}

const resetBtn = document.querySelector("button.reset");

resetBtn.addEventListener("click", () => {

  popify({
    short: true,
    icon: "question",
    closeOnBackground: true,
    closeOnEscape: true,
    headerContent: "Confirm Reset",
    subText: "Are you sure you want to reset all settings saved on this website? this cannot be undone.",
    buttons: [
      {
        text: "Cancel",
        closePopup: true,
        class: "popup-cancel",
        icon: "x-lg",
      },
      {
        text:  "Delete",
        closePopup: true,
        class: "popup-delete",
        icon: "trash",
        run: () => {
          notify("Cleared all settings.", "info");
          localStorage.clear();
        }
      }
    ],
  });

});

const search = document.querySelector(".search");
const headers = document.querySelectorAll(".setting-header");

search.addEventListener("input", (e) => {

  for(let i = 0; i < headers.length; i++) {

    if(headers[i].textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
      headers[i].parentElement.classList.remove("hide");
    } else {
      headers[i].parentElement.classList.add("hide");
    }

  }

});


// Menu Placement Code

const allMenuOptions = document.querySelectorAll(".choose-menu .choose-btn");
const leftOption = document.querySelector(".choose-btn#menu-left");
const rightOption = document.querySelector(".choose-btn#menu-right");

const menuSetting = localStorage.getItem("menu-placement");

switch (menuSetting.toLowerCase()) {

  case "left":
    makeActive(leftOption, allMenuOptions);
    break;

  case "right":
    makeActive(rightOption, allMenuOptions);
    break;

}

allMenuOptions.forEach((option) => {

  option.addEventListener("click", () => {

    makeActive(option, allMenuOptions);
    localStorage.setItem("menu-placement", option.textContent.toLowerCase().trim());

  });

});


// Fonts [normal] Code

const allNormalFonts = document.querySelectorAll(".choose-font-normal .choose-btn");
const ralewayFont = document.querySelector(".choose-btn#font-normal-raleway");
const poppinsFont = document.querySelector(".choose-btn#font-normal-poppins");
const systemFont = document.querySelector(".choose-btn#font-normal-system");

const fontNormalSetting = localStorage.getItem("normalFont");

switch (fontNormalSetting.toLowerCase()) {

  case "raleway":
    makeActive(ralewayFont, allNormalFonts);
    break;

  case "poppins":
    makeActive(poppinsFont, allNormalFonts);
    break;

  case "system-ui":
    makeActive(systemFont, allNormalFonts);
    break;

}

allNormalFonts.forEach((font) => {

  font.addEventListener("click", () => {
    makeActive(font, allNormalFonts);
    localStorage.setItem("normalFont", font.textContent.replaceAll(" ", "-").toLowerCase().trim());
  });

});


// Fonts [code] Code

const allCodeFonts = document.querySelectorAll(".choose-font-code .choose-btn");
const jetbrainsFont = document.querySelector(".choose-btn#font-code-jetbrains");
const cascadiaFont = document.querySelector(".choose-btn#font-code-cascadia");
const browserFont = document.querySelector(".choose-btn#font-code-browser");

const fontCodeSetting = localStorage.getItem("codeFont");

switch (fontCodeSetting.toLowerCase()) {

  case "jetbrains mono":
    makeActive(jetbrainsFont, allCodeFonts);
    break;

  case "cascadia code":
    makeActive(cascadiaFont, allCodeFonts);
    break;

  case "monospace":
    makeActive(browserFont, allCodeFonts);
    break;

}

allCodeFonts.forEach((font) => {

  font.addEventListener("click", () => {

    if(font.textContent.toLowerCase().trim() == "browser default") {

      makeActive(font, allCodeFonts);
      localStorage.setItem("codeFont", "monospace");

    } else {

      makeActive(font, allCodeFonts);
      localStorage.setItem("codeFont", font.textContent.toLowerCase().trim());

    }

  });

});


// Projects Display Code

const allDisplayOptions = document.querySelectorAll(".choose-project-display .choose-btn");
const sliderOption = document.querySelector("#projects-display-slider");
const gridOption = document.querySelector("#projects-display-grid");

const displaySetting = localStorage.getItem("project-display");

switch (displaySetting.toLowerCase()) {

  case "slider":
    makeActive(sliderOption, allDisplayOptions);
    break;

  case "grid":
    makeActive(gridOption, allDisplayOptions);
    break;

}

allDisplayOptions.forEach((option) => {

  option.addEventListener("click", () => {

    makeActive(option, allDisplayOptions);
    localStorage.setItem("project-display", option.textContent.toLowerCase().trim());

  });

});


// colors [accent];

const allAccentColors = document.querySelectorAll(".choose-accent .color");
const color1 = document.querySelector(".accent-color1");
const color2 = document.querySelector(".accent-color2");
const color3 = document.querySelector(".accent-color3");
const color4 = document.querySelector(".accent-color4");

const savedAccent = localStorage.getItem("accent-color");

switch (savedAccent.toLowerCase()) {

  case "#2293fa":
    makeActive(color1, allAccentColors);
    break;

  case "#4caf50":
    makeActive(color2, allAccentColors);
    break;

  case "#ffa039":
    makeActive(color3, allAccentColors);
    break;

  case "#fa8abb":
    makeActive(color4, allAccentColors);
    break;

  default:
    localStorage.setItem("accent-color", "#2293fa");
    makeActive(color1, allAccentColors);
    break;

}

allAccentColors.forEach((color) => {

  color.addEventListener("click", () => {
    localStorage.setItem("accent-color", color.getAttribute("data-color"));
    makeActive(color, allAccentColors);
  });

});


// dark accent code

const allDarkAccentColors = document.querySelectorAll(".choose-dark-accent .color");
const darkColor1 = document.querySelector(".dark-accent-color1");
const darkColor2 = document.querySelector(".dark-accent-color2");
const darkColor3 = document.querySelector(".dark-accent-color3");
const darkColor4 = document.querySelector(".dark-accent-color4");

const savedDarkAccent = localStorage.getItem("accent-color-dark");

switch (savedDarkAccent.toLowerCase()) {

  case "#121417":
    makeActive(darkColor1, allDarkAccentColors);
    break;

  case "#2e3b2f":
    makeActive(darkColor2, allDarkAccentColors);
    break;

  case "#4b443c":
    makeActive(darkColor3, allDarkAccentColors);
    break;

  case "#4d3d44":
    makeActive(darkColor4, allDarkAccentColors);
    break;

  default:
    localStorage.setItem("dark-accent-color", "#121417");
    makeActive(darkColor1, allDarkAccentColors);
    break;

}

allDarkAccentColors.forEach((color) => {

  color.addEventListener("click", () => {
    localStorage.setItem("accent-color-dark", color.getAttribute("data-color"));
    makeActive(color, allDarkAccentColors);
  });

});


// selection color code

const allSelectionColors = document.querySelectorAll(".choose-selection .color");
const selColor1 = document.querySelector(".selection-color1");
const selColor2 = document.querySelector(".selection-color2");
const selColor3 = document.querySelector(".selection-color3");
const selColor4 = document.querySelector(".selection-color4");

const savedSelColor = localStorage.getItem("selection-color");

switch (savedSelColor.toLowerCase()) {

  case "#00b6ff":
    makeActive(selColor1, allSelectionColors);
    break;

  case "#88e68c":
    makeActive(selColor2, allSelectionColors);
    break;

  case "#deaa72":
    makeActive(selColor3, allSelectionColors);
    break;

  case "#f4b4d0":
    makeActive(selColor4, allSelectionColors);
    break;

  default:
    localStorage.setItem("selection-color", "#00b6ff");
    makeActive(selColor1, allSelectionColors);
    break;

}

allSelectionColors.forEach((color) => {

  color.addEventListener("click", () => {
    localStorage.setItem("selection-color", color.getAttribute("data-color"));
    makeActive(color, allSelectionColors);
  });

});


// reduced motion code

const reducedMotionInput = document.querySelector(".motion-input");
const savedMotionSetting = localStorage.getItem("reduced-motion");

switch (savedMotionSetting.toLowerCase()) {

  case "enabled":
    reducedMotionInput.checked = true;
    break;

  case "disabled":
    reducedMotionInput.checked = false;
    break;

}

reducedMotionInput.addEventListener("input", () => {

  reducedMotionInput.checked == true ? localStorage.setItem("reduced-motion", "enabled") : localStorage.setItem("reduced-motion", "disabled");

});

// borders appearance code

const allBorderOptions = document.querySelectorAll(".choose-borders .choose-btn");
const roundOption = document.querySelector("#border-round");
const sharpOption = document.querySelector("#border-sharp");

const borderSetting = localStorage.getItem("border-type");

switch (borderSetting.toLowerCase()) {

  case "round":
    makeActive(roundOption, allBorderOptions);
    break;

  case "sharp":
    makeActive(sharpOption, allBorderOptions);
    break;

}

allBorderOptions.forEach((option) => {

  option.addEventListener("click", () => {

    makeActive(option, allBorderOptions);
    localStorage.setItem("border-type", option.textContent.toLowerCase().trim());

  });

});


// shortcuts code

const shortcutInput = document.querySelector(".shortcut-input");
const shortcutSetting = localStorage.getItem("shortcuts");

switch (shortcutSetting) {

  case "enabled":
    shortcutInput.checked = true;
    break;

  case "disabled":
    shortcutInput.checked = false;
    break;

}

shortcutInput.addEventListener("input", () => {

  shortcutInput.checked == true ? localStorage.setItem("shortcuts", "enabled") : localStorage.setItem("shortcuts", "disabled");

});


// notifications code

const notifInput = document.querySelector(".notifications-input");
const notifSetting = localStorage.getItem("notifications");

switch (notifInput) {

  case "enabled":
    notifInput.checked = true;
    break;

  case "disabled":
    notifInput.checked = false;
    break;

}

notifInput.addEventListener("input", () => {

  notifInput.checked == true ? localStorage.setItem("notifications", "enabled") : localStorage.setItem("notifications", "disabled");

});