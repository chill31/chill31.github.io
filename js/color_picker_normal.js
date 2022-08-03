const pickr = Pickr.create({
  el: ".color-picker", // so I don't get confused, this is element where I want color picker to be.
  theme: "classic", // theme, classic is good.
  default: localStorage.getItem("clr-picker-color"),

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
      hsva: true, // hsv(a) color scheme.
      cmyk: true, // cmyk color scheme.
      input: true, // input where we can type in our own colors.
      cancel: true, // cancel button, cancels the color chosen and moves back to previous one and closes the palette.
      clear: true, // clears the color and closes the palette.
      save: true, // saves the color chosen and closes the palette.
    },
  },
});

pickr.show();
setTimeout(() => {
  pickr.hide();
}, 100);

const copy_btn = document.querySelector(".pcr-copy");
const save_btn = document.querySelector(".pcr-save");
const resColor = document.querySelector(".pcr-result");

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.classList.add("custom");
});

const clear_btn = document.querySelector(".pcr-clear");
const save_copy = document.querySelector(".pcr-save-copy");

const hexBtn = document.querySelector(".type-hexa");
const rgbBtn = document.querySelector(".type-rgba");
const hslBtn = document.querySelector(".type-hsla");
const hsvBtn = document.querySelector(".type-hsva");
const cmyBtn = document.querySelector(".type-cmyk");

let clr = "#2293fa";
let color_scheme;

hexBtn.addEventListener("click", () => {
  color_scheme = "hexa";
});

rgbBtn.addEventListener("click", () => {
  color_scheme = "rgba";
});

hsvBtn.addEventListener("click", () => {
  color_scheme = "hsva";
});

hslBtn.addEventListener("click", () => {
  color_scheme = "hsla";
});

cmyBtn.addEventListener("click", () => {
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

  localStorage.setItem("clr-picker-color", clr);
});

save_copy.addEventListener("click", () => {
  save_btn.click();
  copyText(clr);
  notify("Copied the color to your clipboard!", "success");
});

save_btn.addEventListener("click", () => {
  clr = resColor.value;
  notify(
    `Successfully saved the color with color scheme "${color_scheme}"`,
    "success"
  );
});

clear_btn.addEventListener("click", () => {
  notify("Cleared the color", "info");
});

pickr.on("cancel", () => {
  pickr.hide();
});

copy_btn.addEventListener("click", () => {
  try {
    copyText(clr);
    notify("Successfully copied the color!", "success");
  } catch (e) {
    notify("there was an error while copying the color!", "error");
  }

  pickr.hide();
});

const showPickrBtn = document.querySelector(".open-picker");

showPickrBtn.addEventListener("click", () => {
  pickr.show();
});

document.querySelectorAll("button").forEach(btn => {
  btn.classList.add("custom");
})