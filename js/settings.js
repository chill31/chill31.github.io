const fontNav = document.querySelector("#fonts");
const shortcutNav = document.querySelector("#shortcuts");
const particleNav = document.querySelector("#particles");
const colorNav = document.querySelector("#customColor");
const themeNav = document.querySelector("#theme");
const dangerNav = document.querySelector("#danger");

const allPages = document.querySelectorAll(".gotoPage");

const fontPage = document.querySelector("#fontPage");
const shortcutPage = document.querySelector("#shortcutPage");
const particlePage = document.querySelector("#particlePage");
const colorPage = document.querySelector("#colorPage");
const themePage = document.querySelector("#themePage");
const dangerPage = document.querySelector("#dangerPage");

const backHomeIcons = document.querySelectorAll(".back-home-svg");

function removeChosen(allElem) {
  allElem.forEach(e => e.removeAttribute("data-chosen"));
}

const deletAllBtn = document.querySelector(".deleteAllBtn");
deletAllBtn.addEventListener("click", () => {
  localStorage.clear();
  notify("Reset all Settings back to default. Refresh or visit another page to see the changes.", "info");
});

backHomeIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    allPages.forEach(p => p.classList.remove("active"));
  });
});

const delay = 130;

function makeActive(e) {
  setTimeout(() => {
    e.classList.add("active");
  }, delay)
}

fontNav.addEventListener("click", () => {
  makeActive(fontPage);
});

shortcutNav.addEventListener("click", () => {
  makeActive(shortcutPage);
});

particleNav.addEventListener("click", () => {
  makeActive(particlePage);
});

colorNav.addEventListener("click", () => {
  makeActive(colorPage);
});

themeNav.addEventListener("click", () => {
  makeActive(themePage);
});

dangerNav.addEventListener("click", () => {
  makeActive(dangerPage);
});

const allNormalFonts = document.querySelectorAll(".font-normal");
const allCodeFonts = document.querySelectorAll(".font-code");

const quicksandFont = document.querySelector("#quicksand");
const ralewayFont = document.querySelector("#raleway");
const poppinsFont = document.querySelector("#poppins");
const systemFont = document.querySelector("#system");

const normalFont = localStorage.getItem("normalFont");

switch(normalFont) {

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

}

for (let i = 0; i < allNormalFonts.length; i++) {
  allNormalFonts[i].addEventListener("click", (e) => {
    removeChosen(allNormalFonts);
    allNormalFonts[i].setAttribute("data-chosen", "");
    
    localStorage.setItem("normalFont", e.target.textContent);
    
  });
};

const jetbrainsFont = document.querySelector("#jetbrains");
const firaFont = document.querySelector("#fira");
const consolasFont = document.querySelector("#consolas");

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
    
  case "Consolas":
    removeChosen(allCodeFonts);
    consolasFont.setAttribute("data-chosen", "");
    break;
}

for (let i = 0; i < allCodeFonts.length; i++) {
  allCodeFonts[i].addEventListener("click", (e) => {
    removeChosen(allCodeFonts);
    allCodeFonts[i].setAttribute("data-chosen", "");
    
    localStorage.setItem("codeFont", e.target.textContent);
  });
}

const shortcutToggle = document.querySelector(".shortcut-toggle");
const particleToggle = document.querySelector(".particles-toggle");

if (localStorage.getItem("shortcuts") == "enabled") {
  shortcutToggle.checked = true;
} else if (localStorage.getItem("shortcuts") == "disabled") {
  shortcutToggle.checked = false;
}

shortcutToggle.addEventListener("input", (e) => {
  
  if(e.target.checked) localStorage.setItem("shortcuts", "enabled");
  else localStorage.setItem("shortcuts", "disabled");
  
});

if(localStorage.getItem("particles") == "enabled") {
  particleToggle.checked = true;
} else if(localStorage.getItem("particles") == "disabled") {
  particleToggle.checked = false;
}

particleToggle.addEventListener("input", (e) => {

  if (e.target.checked) localStorage.setItem("particles", "enabled");
  else localStorage.setItem("particles", "disabled");

});

const allThemes = document.querySelectorAll(".theme-choose");

const themeDefault = document.querySelector(".theme-default");
const themeForest = document.querySelector(".theme-forest");
const themeDull = document.querySelector(".theme-dull");
const themeMist = document.querySelector(".theme-mist");
const themeUnderworld = document.querySelector(".theme-underworld");

const currentTheme = localStorage.getItem("theme");
console.log(currentTheme);

/*

switch (currentTheme) {
  
  case themeDefault.textContent:
    removeChosen(allThemes);
    themeDefault.setAttribute("data-chosen", "");
    break;
  case themeForest.textContent:
    removeChosen(allThemes);
    themeForest.setAttribute("data-chosen", "");
    break;
  case themeDull.textContent:
    removeChosen(allThemes);
    themeDull.setAttribute("data-chosen", "");
    break;
  case themeDull.textContent:
    removeChosen(allThemes);
    themeUnderworld.setAttribute("data-chosen", "");
    break;
  case themeMist.textContent:
    removeChosen(allThemes);
    themeMist.setAttribute("data-chosen", "");
    break;
  
}

*/

allThemes.forEach(theme => {
  if(theme.textContent == currentTheme) {
    removeChosen(allThemes);
    theme.setAttribute("data-chosen", "");
  }
})

themeDefault.addEventListener("click", (e) => {
  
  localStorage.setItem("accent-color", "#2293fa");
  localStorage.setItem("accent-color-dark", "#121417");
  localStorage.setItem("selection-color", "#00b6ff");
  localStorage.setItem("top-bottom-background", "#54c0eb");
  
  removeChosen(allThemes);
  e.target.setAttribute("data-chosen", "");
  
  localStorage.setItem("theme", e.target.textContent);
  
});

themeForest.addEventListener("click", (e) => {
  
  localStorage.setItem("accent-color", "#53d458");
  localStorage.setItem("accent-color-dark", "#253525");
  localStorage.setItem("selection-color", "#77de7c");
  localStorage.setItem("top-bottom-background", "#2eea36");
  
  removeChosen(allThemes);
  e.target.setAttribute("data-chosen", "");
  
  localStorage.setItem("theme", e.target.textContent);
  
})

themeDull.addEventListener("click", (e) => {
  
  localStorage.setItem("accent-color", "#eac75d");
  localStorage.setItem("accent-color-dark", "#27251f");
  localStorage.setItem("selection-color", "#FFD862");
  localStorage.setItem("top-bottom-background", "#ffbf00");
  
  removeChosen(allThemes);
  e.target.setAttribute("data-chosen", "");
  
  localStorage.setItem("theme", e.target.textContent);
  
});

themeMist.addEventListener("click", (e) => {
  
  localStorage.setItem("accent-color", "#c54bda");
  localStorage.setItem("accent-color-dark", "#1c171d");
  localStorage.setItem("selection-color", "#e967ff");
  localStorage.setItem("top-bottom-background", "#db0bff");
  
  removeChosen(allThemes);
  e.target.setAttribute("data-chosen", "");
  
  localStorage.setItem("theme", e.target.textContent);
  
})

themeUnderworld.addEventListener("click", (e) => {
  
  localStorage.setItem("accent-color", "#ff3b3b");
  localStorage.setItem("accent-color-dark", "#171212");
  localStorage.setItem("selection-color", "#ff0000");
  localStorage.setItem("top-bottom-background", "#EB5454");
  
  removeChosen(allThemes);
  e.target.setAttribute("data-chosen", "");
  
  localStorage.setItem("theme", e.target.textContent);
  
});
// color picker code starts now.

const pickr = Pickr.create({
  el: '.p1', // so I don't get confused, this is element where I want color picker to be.
  theme: 'classic', // theme, classic is good.
  default: localStorage.getItem("accent-color"),

  swatches: [ // some random colors given in the bottom so users can choose them instead of going over to the palette and choosing thousands of different combinations there.
      'rgba(244, 67, 54, 1)', // orange.
      'rgb(233, 30, 99)', // pinkish
      'rgb(156, 39, 176)', // purple,
      'rgb(103, 58, 183)', //  violet
      'rgb(63, 81, 181)', // darkblue
      'rgb(33, 150, 243)', // blue
      'rgb(3, 169, 244)', // skyblue
      'rgb(0, 188, 212)', // lightcyan
      'rgb(0, 150, 136)', // darkgreen
      'rgb(76, 175, 80)', // green
      'rgb(139, 195, 74)', // lightgreen
      'rgb(205, 220, 57)', // lime
      'rgb(255, 235, 59)', // yellow
      'rgb(255, 193, 7)', // darker yellow
      'rgb(202, 151, 0,)' // darker+ yellow
  ],
  components: { // what's included in the color picker.
      preview: true, //  shows a preview of the chosen color.
      opacity: true, // transparency slider.
      hue: true, // default colors slider .
      interaction: { // buttons and inputs
          hex: true, // hex(a) color scheme.
          rgba: true, // rgb(a) color scheme
          hsla: true, // hsl(a) color scheme.
          hsva: false, // hsv(a) color scheme.
          cmyk: false, // cmyk color scheme.
          input: true, // input where we can type in our own colors.
          cancel: true, // cancel button, cancels the color chosen and moves back to previous one and closes the palette.
          clear: true, // clears the color and closes the palette.
          save: true, // saves the color chosen and closes the palette.
      }
  },
});

pickr.show();
setTimeout(() => {
  pickr.hide();
}, 100);

const pickr2 = Pickr.create({
  el: '.p2',
  theme: 'classic',
  default: localStorage.getItem("accent-color-dark"),

  swatches: [ // some random colors given in the bottom so users can choose them instead of going over to the palette and choosing thousands of different combinations there.
  'rgba(244, 67, 54, 1)', // orange.
  'rgb(233, 30, 99)', // pinkish
  'rgb(156, 39, 176)', // purple,
  'rgb(103, 58, 183)', //  violet
  'rgb(63, 81, 181)', // darkblue
  'rgb(33, 150, 243)', // blue
  'rgb(3, 169, 244)', // skyblue
  'rgb(0, 188, 212)', // lightcyan
  'rgb(0, 150, 136)', // darkgreen
  'rgb(76, 175, 80)', // green
  'rgb(139, 195, 74)', // lightgreen
  'rgb(205, 220, 57)', // lime
  'rgb(255, 235, 59)', // yellow
  'rgb(255, 193, 7)', // darker yellow
  'rgb(202, 151, 0,)' // darker+ yellow
],
components: { // what's included in the color picker.
  preview: true, //  shows a preview of the chosen color.
  opacity: true, // transparency slider.
  hue: true, // default colors slider .
  interaction: { // buttons and inputs
      hex: true, // hex(a) color scheme.
      rgba: true, // rgb(a) color scheme
      hsla: true, // hsl(a) color scheme.
      hsva: false, // hsv(a) color scheme.
      cmyk: false, // cmyk color scheme.
      input: true, // input where we can type in our own colors.
      cancel: true, // cancel button, cancels the color chosen and moves back to previous one and closes the palette.
      clear: true, // clears the color and closes the palette.
      save: true, // saves the color chosen and closes the palette.
  }
},
});

pickr2.show();
setTimeout(() => {
  pickr2.hide();
}, 100);

const pickr3 = Pickr.create({
  el: '.p3', // so I don't get confused, this is element where I want color picker to be.
  theme: 'classic', // theme, classic is good.
  default: localStorage.getItem("selection-color"),

  swatches: [ // some random colors given in the bottom so users can choose them instead of going over to the palette and choosing thousands of different combinations there.
      'rgba(244, 67, 54, 1)', // orange.
      'rgb(233, 30, 99)', // pinkish
      'rgb(156, 39, 176)', // purple,
      'rgb(103, 58, 183)', //  violet
      'rgb(63, 81, 181)', // darkblue
      'rgb(33, 150, 243)', // blue
      'rgb(3, 169, 244)', // skyblue
      'rgb(0, 188, 212)', // lightcyan
      'rgb(0, 150, 136)', // darkgreen
      'rgb(76, 175, 80)', // green
      'rgb(139, 195, 74)', // lightgreen
      'rgb(205, 220, 57)', // lime
      'rgb(255, 235, 59)', // yellow
      'rgb(255, 193, 7)', // darker yellow
      'rgb(202, 151, 0,)' // darker+ yellow
  ],
  components: { // what's included in the color picker.
      preview: true, //  shows a preview of the chosen color.
      opacity: true, // transparency slider.
      hue: true, // default colors slider .
      interaction: { // buttons and inputs
          hex: true, // hex(a) color scheme.
          rgba: true, // rgb(a) color scheme
          hsla: true, // hsl(a) color scheme.
          hsva: false, // hsv(a) color scheme.
          cmyk: false, // cmyk color scheme.
          input: true, // input where we can type in our own colors.
          cancel: true, // cancel button, cancels the color chosen and moves back to previous one and closes the palette.
          clear: true, // clears the color and closes the palette.
          save: true, // saves the color chosen and closes the palette.
      }
  },

});

pickr3.show();
setTimeout(() => {
  pickr3.hide();
}, 100);

const pickr4 = Pickr.create({
  el: '.p4', // so I don't get confused, this is element where I want color picker to be.
  theme: 'classic', // theme, classic is good.
  default: localStorage.getItem("top-bottom-background"),

  swatches: [ // some random colors given in the bottom so users can choose them instead of going over to the palette and choosing thousands of different combinations there.
      'rgba(244, 67, 54, 1)', // orange.
      'rgb(233, 30, 99)', // pinkish
      'rgb(156, 39, 176)', // purple,
      'rgb(103, 58, 183)', //  violet
      'rgb(63, 81, 181)', // darkblue
      'rgb(33, 150, 243)', // blue
      'rgb(3, 169, 244)', // skyblue
      'rgb(0, 188, 212)', // lightcyan
      'rgb(0, 150, 136)', // darkgreen
      'rgb(76, 175, 80)', // green
      'rgb(139, 195, 74)', // lightgreen
      'rgb(205, 220, 57)', // lime
      'rgb(255, 235, 59)', // yellow
      'rgb(255, 193, 7)', // darker yellow
      'rgb(202, 151, 0,)' // darker+ yellow
  ],
  components: { // what's included in the color picker.
      preview: true, //  shows a preview of the chosen color.
      opacity: true, // transparency slider.
      hue: true, // default colors slider .
      interaction: { // buttons and inputs
          hex: true, // hex(a) color scheme.
          rgba: true, // rgb(a) color scheme
          hsla: true, // hsl(a) color scheme.
          hsva: false, // hsv(a) color scheme.
          cmyk: false, // cmyk color scheme.
          input: true, // input where we can type in our own colors.
          cancel: true, // cancel button, cancels the color chosen and moves back to previous one and closes the palette.
          clear: true, // clears the color and closes the palette.
          save: true, // saves the color chosen and closes the palette.
      }
  },

});

pickr4.show();
setTimeout(() => {
  pickr4.hide();
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

  if(color_scheme == "hexa"){
      clr = color[0].toHEXA().toString();
  } else if(color_scheme == "rgba"){
      clr = color[0].toRGBA().toString();
  } else if(color_scheme == "hsva"){
      clr = color[0].toHSVA().toString();
  } else if(color_scheme == "hsla"){
      clr = color[0].toHSLA().toString();
  } else if(color_scheme == "cmyk"){
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
  notify(`Successfully saved the color with color scheme "${color_scheme}"`, "success");
});

clear_btns[0].addEventListener("click", () => {

  notify("Cleared the color", "info")

})

pickr.on("cancel", () => {
  pickr.hide();
});

copy_btns[0].addEventListener("click", () => {
  
  try {
      copyText(clr);
      notify("Successfully copied the color!", "success");
  } catch(e){
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

  if(color_scheme2 == "hexa"){
      clr2 = color[0].toHEXA().toString();
  } else if(color_scheme2 == "rgba"){
      clr2 = color[0].toRGBA().toString();
  } else if(color_scheme2 == "hsva"){
      clr2 = color[0].toHSVA().toString();
  } else if(color_scheme2 == "hsla"){
      clr2 = color[0].toHSLA().toString();
  } else if(color_scheme2 == "cmyk"){
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
  notify(`Successfully saved the color with color scheme "${color_scheme2}"`, "success");
});

clear_btns[1].addEventListener("click", () => {

  notify("Cleared the color", "info")

});

pickr2.on("cancel", () => {
  pickr2.hide();
});

copy_btns[1].addEventListener("click", () => {
  
  try {
      copyText(clr2);
      notify("Successfully copied the color!", "success");
  } catch(e){
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

  if(color_scheme3 == "hexa"){
      clr3 = color[0].toHEXA().toString();
  } else if(color_scheme3 == "rgba"){
      clr3 = color[0].toRGBA().toString();
  } else if(color_scheme3 == "hsva"){
      clr3 = color[0].toHSVA().toString();
  } else if(color_scheme3 == "hsla"){
      clr3 = color[0].toHSLA().toString();
  } else if(color_scheme3 == "cmyk"){
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
  notify(`Successfully saved the color with color scheme "${color_scheme3}"`, "success");
});

clear_btns[2].addEventListener("click", () => {

  notify("Cleared the color", "info")

});

pickr3.on("cancel", () => {
  pickr3.hide();
});

copy_btns[2].addEventListener("click", () => {
  
  try {
      copyText(clr3);
      notify("Successfully copied the color!", "success");
  } catch(e){
      notify("there was an error while copying the color!", "error");
  }

  pickr3.hide();

});

resetToDefBtns[2].addEventListener("click", () => {
  pickr3.setColor("#00b6ff");
  notify("Reset the Selection Color back to default", "info");
});

let clr4 = localStorage.getItem("top-bottom-background") ?? "#54c0eb";
let color_scheme4;

hexBtns[3].addEventListener("click", () => {
  color_scheme4 = "hexa";
});

rgbBtns[3].addEventListener("click", () => {
  color_scheme4 = "rgba";
});

hsvBtns[3].addEventListener("click", () => {
  color_scheme4 = "hsva";
});

hslBtns[3].addEventListener("click", () => {
  color_scheme4 = "hsla";
});

cmyBtns[3].addEventListener("click", () => {
  color_scheme4 = "cmyk";
});

pickr4.on("save", (...color) => {
  pickr4.hide();

  if(color_scheme4 == "hexa"){
      clr4 = color[0].toHEXA().toString();
  } else if(color_scheme4 == "rgba"){
      clr4 = color[0].toRGBA().toString();
  } else if(color_scheme4 == "hsva"){
      clr4 = color[0].toHSVA().toString();
  } else if(color_scheme4 == "hsla"){
      clr4 = color[0].toHSLA().toString();
  } else if(color_scheme4 == "cmyk"){
      clr4 = color[0].toCMYK().toString();
  }

  document.body.style.setProperty("--top-btm-bg", clr4);
  localStorage.setItem("top-bottom-background", clr4);
});

save_copys[3].addEventListener("click", () => {
  save_btns[3].click();
  copyText(clr4);
  notify("Copied the color to your clipboard!", "success");
});

save_btns[3].addEventListener("click", () => {
  clr4 = resColors[3].value;
  notify(`Successfully saved the color with color scheme "${color_scheme4}"`, "success");
});

clear_btns[3].addEventListener("click", () => {

  notify("Cleared the color", "info")

})

pickr4.on("cancel", () => {
  pickr4.hide();
});

copy_btns[3].addEventListener("click", () => {
  
  try {
      copyText(clr4);
      notify("Successfully copied the color!", "success");
  } catch(e){
      notify("there was an error while copying the color!", "error");
  }

  pickr4.hide();

});

resetToDefBtns[3].addEventListener("click", () => {
  pickr4.setColor("#54c0eb");
  notify("Reset the Top Header Color back to default", "info");
});

document.querySelectorAll("button").forEach(btn => btn.classList.add("custom"));
