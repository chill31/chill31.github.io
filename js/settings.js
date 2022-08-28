function makePickr(elem, defaultClr) {
  return Pickr.create({
    el: elem, // so I don't get confused, this is element where I want color picker to be.
    theme: "classic", // theme, classic is good.
    default: defaultClr,

    swatches: [
      // some random colors given in the bottom so users can choose them instead of going over to the palette and choosing thousands of different combinations there.
      "rgba(244, 67, 54, 1)", // orange.
      "rgb(233, 30, 99)", // pinkish
      "rgb(156, 39, 176)", // purple,
      "rgb(103, 58, 183)", //  violet
      "rgb(63, 81, 181)", // darkblue
      "rgb(33, 150, 243)", // blue
      "rgb(3, 169, 244)", // skyblue
      "rgb(0, 188, 212)", // lightcyan
      "rgb(0, 150, 136)", // darkgreen
      "rgb(76, 175, 80)", // green
      "rgb(139, 195, 74)", // lightgreen
      "rgb(205, 220, 57)", // lime
      "rgb(255, 235, 59)", // yellow
      "rgb(255, 193, 7)", // darker yellow
      "rgb(202, 151, 0,)", // darker+ yellow
    ],
    components: {
      // what's included in the color picker.
      preview: true, //  shows a preview of the chosen color.
      opacity: true, // transparency slider.
      hue: true, // default colors slider .
      interaction: {
        // buttons and inputs
        hex: true, // hex(a) color scheme.
        rgba: true, // rgb(a) color scheme
        hsla: true, // hsl(a) color scheme.
        hsva: false, // hsv(a) color scheme.
        cmyk: false, // cmyk color scheme.
        input: true, // input where we can type in our own colors.
        cancel: true, // cancel button, cancels the color chosen and moves back to previous one and closes the palette.
        clear: true, // clears the color and closes the palette.
        save: true, // saves the color chosen and closes the palette.
      },
    },
  });
}

function makeChosen(element, allElements) {
  allElements.forEach((el) => el.removeAttribute("data-chosen"));
  element.setAttribute("data-chosen", "");
}

function removeChosen(allElements) {
  allElements.forEach((el) => el.removeAttribute("data-chosen"));
}

function makeActive(element, allElements) {
  allElements.forEach((el) => el.classList.remove("active"));
  element.classList.add("active");

  previousPage.removeAttribute("disabled");
}

function removeActive(allElements) {
  allElements.forEach((el) => el.classList.remove("active"));
}

const sideBarButtons = document.querySelectorAll(".sidebar-button");
sideBarButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selector = document.querySelector(
      `#${btn.getAttribute("data-redirect")}`
    );

    makeActive(selector, newPages);
    removeActive(subPages);
  });
});

const navigateToNew = document.querySelectorAll(".navigateTo.navNew");
const navigateToSub = document.querySelectorAll(".navigateTo.navSub");

navigateToNew.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selector = document.querySelector(
      `#${btn.getAttribute("data-redirect")}`
    );

    makeActive(selector, newPages);
  });
});

navigateToSub.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selector = document.querySelector(
      `#${btn.getAttribute("data-redirect")}`
    );

    makeActive(selector, subPages);
  });
});

const newPages = document.querySelectorAll(".newPage");

const subPages = document.querySelectorAll(".subPage");

const previousPage = document.querySelector(".previous-page");

previousPage.addEventListener("click", () => {
  let newActive = false;
  let subActive = false;

  newPages.forEach((page) => {
    if (page.classList.contains("active")) newActive = true;
    else if (!page.classList.contains("active")) return;
  });

  subPages.forEach((page) => {
    if (page.classList.contains("active")) subActive = true;
    else if (!page.classList.contains("active")) return;
  });

  if (newActive === true && subActive === false) {
    removeActive(newPages);
  }

  if (subActive === true) {
    removeActive(subPages);
  }
});

const allMainNav = document.querySelectorAll(".goMain");
const allSubNav = document.querySelectorAll(".goSub");

allMainNav.forEach((nav) => {
  nav.addEventListener("click", () => {
    removeActive(subPages);
    removeActive(newPages);
  });
});

allSubNav.forEach((nav) => {
  nav.addEventListener("click", () => {
    removeActive(subPages);
  });
});

/** Menu Placement Code */

const menuPlacementBtns = document.querySelectorAll(".menu-choose");
const leftMenuPlacement = document.querySelector("#choose-menu-left");
const rightMenuPlacement = document.querySelector("#choose-menu-right");

const currentMenuPlacement = localStorage.getItem("menu-placement");

switch (currentMenuPlacement) {
  case "right":
    makeChosen(rightMenuPlacement, menuPlacementBtns);
    break;
  case "left":
    makeChosen(leftMenuPlacement, menuPlacementBtns);
    break;
}

menuPlacementBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    makeChosen(btn, menuPlacementBtns);
    localStorage.setItem("menu-placement", btn.textContent.toLowerCase());
  });
});

/** Fonts code (normal & code fonts) */

const allNormalFonts = document.querySelectorAll(".font-normal");
const allCodeFonts = document.querySelectorAll(".font-code");

const quicksandFont = document.querySelector("#quicksand");
const ralewayFont = document.querySelector("#raleway");
const poppinsFont = document.querySelector("#poppins");
const montserratFont = document.querySelector("#montserrat");
const systemFont = document.querySelector("#system");

const normalFont = localStorage.getItem("normalFont");

switch (normalFont) {
  case "Quicksand":
    removeChosen(allNormalFonts);
    quicksandFont.setAttribute("data-chosen", "");
    break;
  case "Raleway":
    removeChosen(allNormalFonts);
    ralewayFont.setAttribute("data-chosen", "");
    break;
  case "Poppins":
    removeChosen(allNormalFonts);
    poppinsFont.setAttribute("data-chosen", "");
    break;
  case "System-UI":
    removeChosen(allNormalFonts);
    systemFont.setAttribute("data-chosen", "");
    break;
  case "Montserrat":
    removeChosen(allNormalFonts);
    montserratFont.setAttribute("data-chosen", "");
    break;
}

for (let i = 0; i < allNormalFonts.length; i++) {
  allNormalFonts[i].addEventListener("click", (e) => {
    removeChosen(allNormalFonts);
    allNormalFonts[i].setAttribute("data-chosen", "");

    localStorage.setItem("normalFont", e.target.textContent);
  });
}

const jetbrainsFont = document.querySelector("#jetbrains");
const firaFont = document.querySelector("#fira");
const robotoMonoFont = document.querySelector("#robotoMono");
const cascadiaCodeFont = document.querySelector("#cascadiaCode");
const browserFont = document.querySelector("#browser");

const codeFont = localStorage.getItem("codeFont");

switch (codeFont) {
  case "Jetbrains Mono":
    removeChosen(allCodeFonts);
    jetbrainsFont.setAttribute("data-chosen", "");
    break;

  case "FiraCode":
    removeChosen(allCodeFonts);
    firaFont.setAttribute("data-chosen", "");
    break;

  case "Roboto Mono":
    removeChosen(allCodeFonts);
    robotoMonoFont.setAttribute("data-chosen", "");

    break;
  case "Cascadia Code":
    removeChosen(allCodeFonts);
    cascadiaCodeFont.setAttribute("data-chosen", "");

    break;
  case "Monospace":
    removeChosen(allCodeFonts);
    browserFont.setAttribute("data-chosen", "");
}

for (let i = 0; i < allCodeFonts.length; i++) {
  allCodeFonts[i].addEventListener("click", (e) => {
    removeChosen(allCodeFonts);
    allCodeFonts[i].setAttribute("data-chosen", "");

    localStorage.setItem("codeFont", e.target.textContent);
  });
}

/** Projects Default Display Code  */

const allDisplayOptions = document.querySelectorAll(".display-choose");

const displaySlider = document.querySelector("#slider");
const displayGrid = document.querySelector("#grid");

const currentDisplay = localStorage.getItem("project-display");

allDisplayOptions.forEach((displayOption) => {
  if (displayOption.textContent == currentDisplay) {
    removeChosen(allDisplayOptions);
    displayOption.setAttribute("data-chosen", "");
  }
});

for (let i = 0; i < allDisplayOptions.length; i++) {
  allDisplayOptions[i].addEventListener("click", (e) => {
    removeChosen(allDisplayOptions);
    allDisplayOptions[i].setAttribute("data-chosen", "");

    localStorage.setItem("project-display", e.target.textContent);
  });
}

/** Custom Colors code now */

const pickr = makePickr(".p1", localStorage.getItem("accent-color"));

pickr.show();
setTimeout(() => {
  pickr.hide();
}, 100);

const pickr2 = makePickr(".p2", localStorage.getItem("accent-color-dark"));

pickr2.show();
setTimeout(() => {
  pickr2.hide();
}, 100);

const pickr3 = makePickr(".p3", localStorage.getItem("selection-color"));

pickr3.show();
setTimeout(() => {
  pickr3.hide();
}, 100);

const copy_btns = document.querySelectorAll(".pcr-copy");
const save_btns = document.querySelectorAll(".pcr-save");
const resColors = document.querySelectorAll(".pcr-result");
const cancelBtns = document.querySelectorAll(".pcr-cancel");
const resetToDefBtns = document.querySelectorAll(".pcr-default");

const clear_btns = document.querySelectorAll(".pcr-clear");
const save_copys = document.querySelectorAll(".pcr-save-copy");

const hexBtns = document.querySelectorAll(".type-hexa");
const rgbBtns = document.querySelectorAll(".type-rgba");
const hslBtns = document.querySelectorAll(".type-hsla");
const hsvBtns = document.querySelectorAll(".type-hsva");
const cmyBtns = document.querySelectorAll(".type-cmyk");

let clr = localStorage.getItem("accent-color") ?? "#2293fa";
let color_scheme;

hexBtns[0].addEventListener("click", () => {
  color_scheme = "hexa";
});

rgbBtns[0].addEventListener("click", () => {
  color_scheme = "rgba";
});

hsvBtns[0].addEventListener("click", () => {
  color_scheme = "hsva";
});

hslBtns[0].addEventListener("click", () => {
  color_scheme = "hsla";
});

cmyBtns[0].addEventListener("click", () => {
  color_scheme = "cmyk";
});

pickr.on("save", (...color) => {
  pickr.hide();

  if (color_scheme == "hexa") {
    clr = color[0].toHEXA().toString();
  } else if (color_scheme == "rgba") {
    clr = color[0].toRGBA().toString();
  } else if (color_scheme == "hsva") {
    clr = color[0].toHSVA().toString();
  } else if (color_scheme == "hsla") {
    clr = color[0].toHSLA().toString();
  } else if (color_scheme == "cmyk") {
    clr = color[0].toCMYK().toString();
  }

  document.body.style.setProperty("--a-clr", clr);
  localStorage.setItem("accent-color", clr);
});

save_copys[0].addEventListener("click", () => {
  save_btns[0].click();
  copyText(clr);
  notify("Copied the color to your clipboard!", "success");
});

save_btns[0].addEventListener("click", () => {
  clr = resColors[0].value;
  notify(
    `Successfully saved the color with color scheme "${color_scheme}"`,
    "success"
  );
});

clear_btns[0].addEventListener("click", () => {
  notify("Cleared the color", "info");
});

pickr.on("cancel", () => {
  pickr.hide();
});

copy_btns[0].addEventListener("click", () => {
  try {
    copyText(clr);
    notify("Successfully copied the color!", "success");
  } catch (e) {
    notify("there was an error while copying the color!", "error");
  }

  pickr.hide();
});

resetToDefBtns[0].addEventListener("click", () => {
  pickr.setColor("#2293fa");
  notify("Reset the Accent Color back to default", "info");
});

let clr2 = localStorage.getItem("accent-color-dark") ?? "#121417";
let color_scheme2;

hexBtns[1].addEventListener("click", () => {
  color_scheme2 = "hexa";
});

rgbBtns[1].addEventListener("click", () => {
  color_scheme2 = "rgba";
});

hsvBtns[1].addEventListener("click", () => {
  color_scheme2 = "hsva";
});

hslBtns[1].addEventListener("click", () => {
  color_scheme2 = "hsla";
});

cmyBtns[1].addEventListener("click", () => {
  color_scheme2 = "cmyk";
});

pickr2.on("save", (...color) => {
  pickr2.hide();

  if (color_scheme2 == "hexa") {
    clr2 = color[0].toHEXA().toString();
  } else if (color_scheme2 == "rgba") {
    clr2 = color[0].toRGBA().toString();
  } else if (color_scheme2 == "hsva") {
    clr2 = color[0].toHSVA().toString();
  } else if (color_scheme2 == "hsla") {
    clr2 = color[0].toHSLA().toString();
  } else if (color_scheme2 == "cmyk") {
    clr2 = color[0].toCMYK().toString();
  }

  document.body.style.setProperty("--a-clr-dark", clr2);
  localStorage.setItem("accent-color-dark", clr2);
});

save_copys[1].addEventListener("click", () => {
  save_btns[1].click();
  copyText(clr2);
  notify("Copied the color to your clipboard!", "success");
});

save_btns[1].addEventListener("click", () => {
  clr2 = resColors[1].value;
  notify(
    `Successfully saved the color with color scheme "${color_scheme2}"`,
    "success"
  );
});

clear_btns[1].addEventListener("click", () => {
  notify("Cleared the color", "info");
});

pickr2.on("cancel", () => {
  pickr2.hide();
});

copy_btns[1].addEventListener("click", () => {
  try {
    copyText(clr2);
    notify("Successfully copied the color!", "success");
  } catch (e) {
    notify("there was an error while copying the color!", "error");
  }

  pickr2.hide();
});

resetToDefBtns[1].addEventListener("click", () => {
  pickr2.setColor("#121417");
  notify("Reset the Dark Accent Color back to default", "info");
});

let clr3 = localStorage.getItem("selection-color") ?? "#00b6ff";
let color_scheme3;

hexBtns[2].addEventListener("click", () => {
  color_scheme3 = "hexa";
});

rgbBtns[2].addEventListener("click", () => {
  color_scheme3 = "rgba";
});

hsvBtns[2].addEventListener("click", () => {
  color_scheme3 = "hsva";
});

hslBtns[2].addEventListener("click", () => {
  color_scheme3 = "hsla";
});

cmyBtns[2].addEventListener("click", () => {
  color_scheme3 = "cmyk";
});

pickr3.on("save", (...color) => {
  pickr3.hide();

  if (color_scheme3 == "hexa") {
    clr3 = color[0].toHEXA().toString();
  } else if (color_scheme3 == "rgba") {
    clr3 = color[0].toRGBA().toString();
  } else if (color_scheme3 == "hsva") {
    clr3 = color[0].toHSVA().toString();
  } else if (color_scheme3 == "hsla") {
    clr3 = color[0].toHSLA().toString();
  } else if (color_scheme3 == "cmyk") {
    clr3 = color[0].toCMYK().toString();
  }

  document.body.style.setProperty("--selection-color", clr3);
  localStorage.setItem("selection-color", clr3);
});

save_copys[2].addEventListener("click", () => {
  save_btns[2].click();
  copyText(clr3);
  notify("Copied the color to your clipboard!", "success");
});

save_btns[2].addEventListener("click", () => {
  clr3 = resColors[2].value;
  notify(
    `Successfully saved the color with color scheme "${color_scheme3}"`,
    "success"
  );
});

clear_btns[2].addEventListener("click", () => {
  notify("Cleared the color", "info");
});

pickr3.on("cancel", () => {
  pickr3.hide();
});

copy_btns[2].addEventListener("click", () => {
  try {
    copyText(clr3);
    notify("Successfully copied the color!", "success");
  } catch (e) {
    notify("there was an error while copying the color!", "error");
  }

  pickr3.hide();
});

resetToDefBtns[2].addEventListener("click", () => {
  pickr3.setColor("#00b6ff");
  notify("Reset the Selection Color back to default", "info");
});


const shortcutToggle = document.querySelector(".shortcut-toggle");
const particleToggle = document.querySelector(".particles-toggle");

if (localStorage.getItem("shortcuts") == "enabled") {
  shortcutToggle.checked = true;
} else if (localStorage.getItem("shortcuts") == "disabled") {
  shortcutToggle.checked = false;
}

shortcutToggle.addEventListener("input", (e) => {
  if (e.target.checked) localStorage.setItem("shortcuts", "enabled");
  else localStorage.setItem("shortcuts", "disabled");
});

if (localStorage.getItem("particles") == "enabled") {
  particleToggle.checked = true;
} else if (localStorage.getItem("particles") == "disabled") {
  particleToggle.checked = false;
}

particleToggle.addEventListener("input", (e) => {
  if (e.target.checked) localStorage.setItem("particles", "enabled");
  else localStorage.setItem("particles", "disabled");
});

const particleAmtRange = document.querySelector(".particle-range");
const showParticleLabel = document.querySelector(".particle-amount-show");

const currentParticleAmt = Number(localStorage.getItem("particle-amount"));

particleAmtRange.value = currentParticleAmt;
showParticleLabel.textContent = currentParticleAmt;

particleAmtRange.addEventListener("input", (e) => {
  showParticleLabel.textContent = e.target.valueAsNumber;
});

particleAmtRange.addEventListener("change", (e) => {
  localStorage.setItem("particle-amount", e.target.valueAsNumber);
});

const notifToggle = document.querySelector(".notif-toggle");
const currentNotifSetting = localStorage.getItem("notifications");

switch (currentNotifSetting) {
  case "enabled":
    notifToggle.checked = true;
    break;
  case "disabled":
    notifToggle.checked = false;
    break;
}

notifToggle.addEventListener("input", (e) => {
  e.target.checked
    ? localStorage.setItem("notifications", "enabled")
    : localStorage.setItem("notifications", "disabled");
});

const motionToggle = document.querySelector(".motion-toggle");
const currentMotionSetting = localStorage.getItem("reduced-motion");

switch (currentMotionSetting) {

  case "enabled":
    motionToggle.checked = true;
    break;
  case "disabled":
    motionToggle.checked = false;
    break;

}

motionToggle.addEventListener("input", (e) => {
  e.target.checked ? localStorage.setItem("reduced-motion", "enabled") : localStorage.setItem("reduced-motion", "disabled");
});

const deleteAllBtn = document.querySelector(".deleteAll");
deleteAllBtn.addEventListener("click", () => {
  notify("Successfully cleared all data present on this website", "success");
  localStorage.clear();
});

document
  .querySelectorAll("button")
  .forEach((btn) => btn.classList.add("custom"));
