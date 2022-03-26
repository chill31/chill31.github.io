const img_input = document.querySelector(".image-input");
const imgt = document.getElementById("ll");
const defText = document.getElementById("spann");

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