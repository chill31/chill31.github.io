const save_settings_btn = document.getElementById("save-cog");
const normalFontSelect = document.querySelector(".normal-font-select");
const codeFontSelect = document.querySelector(".code-font-select");
const normalFontLbl = document.querySelector(".normal-font-saved");
const codeFontLbl = document.querySelector(".code-font-saved");

const toggleShortcutsBtn = document.getElementById("toggle-shortcuts-btn");

if(!localStorage.getItem("shortcuts")) localStorage.setItem("shortcuts", "enabled");

if(localStorage.getItem("shortcuts") == "enabled"){
  toggleShortcutsBtn.textContent = "Disable Shortcuts";
} else if(localStorage.getItem("shortcuts") == "disabled"){
  toggleShortcutsBtn.textContent = "Enable Shortcuts";
}

toggleShortcutsBtn.addEventListener("click", () => {

  if(toggleShortcutsBtn.textContent.toLowerCase() == "disable shortcuts"){
    toggleShortcutsBtn.textContent = "Enable Shortcuts";
    localStorage.setItem("shortcuts", "disabled");
  } else if(toggleShortcutsBtn.textContent.toLowerCase() == "enable shortcuts"){
    toggleShortcutsBtn.textContent = "Disable Shortcuts";
    localStorage.setItem("shortcuts", "enabled");
  }

  refreshPage();

});


if(!localStorage.getItem("normalFont")){
    normalFontLbl.textContent = "Quicksand";
}

if(!localStorage.getItem("codeFont")){
    codeFontLbl.textContent = "Jetbrains Mono";
}

normalFontLbl.textContent = localStorage.getItem("normalFont");
codeFontLbl.textContent = localStorage.getItem("codeFont");

save_settings_btn.addEventListener("click", () => {

    notify("Saved the changes", "info");

    const normalSelected = normalFontSelect.selectedOptions[0].value;
    const codeSelected = codeFontSelect.selectedOptions[0].value;

    localStorage.setItem("normalFont", normalFontSelect.selectedOptions[0].value);
    localStorage.setItem("codeFont", codeFontSelect.selectedOptions[0].value);

    document.body.style.setProperty("--ff-primary", normalSelected);
    document.body.style.setProperty("--ff-primary-light", `${normalSelected} Light`);
    document.body.style.setProperty("--ff-primary-normal", `${normalSelected} normal`);
    document.body.style.setProperty("--ff-primary-medium", `${normalSelected} Medium`);
    document.body.style.setProperty("--ff-primary-semibold", `${normalSelected} Semibold`);
    document.body.style.setProperty("--ff-primary-bold", `${normalSelected} Bold`);

    document.body.style.setProperty("--ff-code", codeSelected);

    normalFontLbl.textContent = localStorage.getItem("normalFont");
    codeFontLbl.textContent = localStorage.getItem("codeFont");

});

document.body.style.setProperty("--ff-primary", localStorage.getItem("normalFont"));
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

const interItems = document.querySelectorAll(".item-inter");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

   if (entry.isIntersecting) entry.target.classList.add("intersect");
   else entry.target.classList.remove("intersect");

  });
});

interItems.forEach(item => observer.observe(item));

const pickr = Pickr.create({
  el: '.color-picker', // so I don't get confused, this is element where I want color picker to be.
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
  el: '.clr-picker',
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
  el: '.sel-color-picker', // so I don't get confused, this is element where I want color picker to be.
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
  el: '.topHead__colorPicker', // so I don't get confused, this is element where I want color picker to be.
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

const clear_btns = document.querySelectorAll(".pcr-clear");
const save_copys = document.querySelectorAll(".pcr-save-copy");

const hexBtns = document.querySelectorAll(".type-hexa");
const rgbBtns = document.querySelectorAll(".type-rgba");
const hslBtns = document.querySelectorAll(".type-hsla");
const hsvBtns = document.querySelectorAll(".type-hsva");
const cmyBtns = document.querySelectorAll(".type-cmyk");

let clr = "#2293fa";
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


let clr2 = "#121417";
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

let clr3 = "#00b6ff";
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

let clr4 = "#54c0eb";
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

const resetClrsBtn = document.querySelector(".colors__reset");
resetClrsBtn.addEventListener("click", () => {
  
  localStorage.setItem("accent-color", "#2293fa");
  localStorage.setItem("accent-color-dark", "#121417");
  localStorage.setItem("selection-color", "#00b6ff");
  localStorage.setItem("top-bottom-background", "#54c0eb");

  redirect(window.location.href);

});

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.classList.add("custom");
});

const RESETALL = document.querySelector(".danger__clearAllBtn");
const thePopup = document.querySelector(".reset-confirm");

const confirmYes = document.querySelector(".actualReset__confirm");
const confirmCancel = document.querySelector(".actualReset__cancel");
const closeSvg = document.querySelector(".cancel-confirm");
RESETALL.addEventListener("click", () => {

  thePopup.classList.add("active");

});

function hidePop() {
  thePopup.classList.remove("active");
}

addEventListener("keyup", (e) => {
  if(e.key == "Escape") hidePop();
});

closeSvg.addEventListener("click", () => hidePop());
confirmCancel.addEventListener("click", () => hidePop());

confirmYes.addEventListener("click", () => {

  localStorage.setItem("shortcuts", "enabled");

  localStorage.setItem("normalFont", "Quicksand");
  localStorage.setItem("codeFont", "Jetbrains Mono");

  localStorage.setItem("accent-color", "#2293fa");
  localStorage.setItem("accent-color-dark", "#121417");
  localStorage.setItem("selection-color", "#00b6ff");
  localStorage.setItem("top-bottom-background", "#54c0eb");

  redirect(window.location.href);

});