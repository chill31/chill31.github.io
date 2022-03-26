const FORM = document.querySelector("form");

const img_input = document.querySelector(".image-input");
const imgt = document.getElementById("ll");
const defText = document.getElementById("spann");

const submit_btn = document.querySelector(".submit input[type=\"button\"");
const bug_desc = document.getElementById("comment");


/**
 * defining if the input values are valid or not "variable(s)"
 */

let name_match; // username boolean
let browser_name; // browser name boolean.
let matched; // browser link boolean.

img_input.addEventListener("change", (event) => {
  event.preventDefault();
  const file = img_input.files[0];

  if (file) {
    const fileName = file.name.toLocaleString().toLowerCase();

    const extensions = [
      ".png",
      ".apng",
      ".jpg",
      ".jpeg",
      ".webp",
      ".gif",
      ".avif",
      ".svg",
    ];

    let validEXT = false;
    for (let i = 0; i <= extensions.length; i++) {
      if (fileName.endsWith(extensions[i])) {
        validEXT = true;
      }
    }

    if (validEXT === false) {
      alert(
        "The supported image extensions are:\n" +
          extensions.map((e) => `${e}`).join("\n") +
          "\nPlease submit an image with a supported extension."
      );
      img_input.value = "";
      imgt.style.display = "none";
      defText.style.display = "inherit";
    }

    const reader = new FileReader();
    defText.style.display = "none";
    imgt.style.display = "inherit";

    if (validEXT == true) {
      reader.addEventListener("load", (event) => {
        event.preventDefault();
        imgt.setAttribute("src", reader.result);
      });

      reader.readAsDataURL(file);
    }
  } else if (validEXT == false) {
    imgt.removeAttribute("src");
  }
});

const darkener = getElement("1", "dk");

imgt.addEventListener("click", () => {
  advancedClassHandler(imgt, "add", "focused");
  advancedClassHandler(darkener, "add", "active");
});

document.body.addEventListener("keydown", (event) => {
  if (event.key == "Escape") {
    advancedClassHandler(imgt, "remove", "focused");
    advancedClassHandler(darkener, "remove", "active");
  }
});

darkener.addEventListener("click", () => {
  advancedClassHandler(imgt, "remove", "focused");
  advancedClassHandler(darkener, "remove", "active");
});

// first message validator, "name" input.

let svg = getElement(0, ".msg-validator.first svg");
let svg_path = getElement(0, ".msg-validator.first svg path");
let name_input = getElement(1, "name");
let svg_container = getElement(0, ".msg-validator.first");

name_input.addEventListener("input", () => {
  svg.innerHTML =
    '<path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/>';
  advancedClassHandler(svg_container, "add", "valid-content");


  let name_reg = new RegExp(/^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i);

  if (name_input.value.match(name_reg)) {
    name_match = true;
  } else {
    name_match = false;
  }

  if (name_input.value === "" || !name_input.value || name_match === false) {
    advancedClassHandler(svg_container, "remove", "valid-content");
    svg.innerHTML =
      '<path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z" />';
  }
});

// second message validator, "browser" input.

let svg_2 = getElement(0, ".msg-validator.second svg");
let svg_path_2 = getElement(0, ".msg-validator.second svg path");
let name_input_2 = getElement(0, ".feedback-input.browser");
let svg_container_2 = getElement(0, ".msg-validator.second");

name_input_2.addEventListener("input", () => {

  browser_name = true;
  svg_2.innerHTML =
    '<path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/>';
  advancedClassHandler(svg_container_2, "add", "valid-content");

  if (name_input_2.value === "" || !name_input_2.value) {

    browser_name = false;
    advancedClassHandler(svg_container_2, "remove", "valid-content");
    svg_2.innerHTML =
      '<path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z" />';
  }
});

// third message validator, "browser link" input.

let svg_3 = getElement("0", ".msg-validator.third svg");
let svg_path_3 = getElement("0", ".msg-validator.third svg path");
let name_input_3 = getElement("0", ".feedback-input.browser-link");

let svg_container_3 = getElement("0", ".msg-validator.third");

name_input_3.addEventListener("input", () => {
  svg_3.innerHTML =
    '<path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/>';
  advancedClassHandler(svg_container_3, "add", "valid-content");

  let exp = new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi);

  if(name_input_3.value.match(exp)){
    matched = true;
  } else {
    matched = false;
  }

  if (!name_input_3.value || name_input_3.value === "" || matched === false) {
    advancedClassHandler(svg_container_3, "remove", "valid-content");
    svg_3.innerHTML = '<path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z" />';
  }
});

let form_valid = false;

let enteredInfo;

submit_btn.addEventListener("click", () => {

  if(name_match && browser_name && matched){
    form_valid = true;
  } else {
    form_valid = false;
  }

  if(form_valid){

    if(bug_desc.value){

      enteredInfo = {
        name: name_input.value,
        browser_name: name_input_2.value,
        browser_link: name_input_3.value,

        bug_description: bug_desc.value,
      };

      FORM.reset();
      window.location.href = window.location.href;

      console.log(`
Form was submitted. 
Entered Information Below:

Name: ${enteredInfo.name}
Description: ${enteredInfo.bug_description}
Browser Name: ${enteredInfo.browser_name}
Browser Link: ${enteredInfo.browser_link}
`);

  }

}

});