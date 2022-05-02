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

const secondSettings = document.querySelector("ul.settings-list:last-of-type");

const options = {
  threshold:  .5
 };

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    
    if(entry.isIntersecting){
      secondSettings.classList.remove("hide");
    } else {
      secondSettings.classList.add("hide");
    }

  });
}, options);

observer.observe(secondSettings)