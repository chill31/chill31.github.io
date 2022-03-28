const save_settings_btn = document.getElementById("save-cog");

const normalFontSelect = document.querySelector(".normal-font-select");
const codeFontSelect = document.querySelector(".code-font-select");

const normalFontLbl = document.querySelector(".normal-font-saved");
const codeFontLbl = document.querySelector(".code-font-saved");

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



/**
 * Enabling/Disabling Redirecting Process
 */

const toggleProcessBtn = document.querySelector(".toggle-process");


if(!localStorage.getItem("redirect-process")){
  localStorage.setItem("redirect-process", "true");
}

toggleProcessBtn.addEventListener("click", () => {

  if(localStorage.getItem("redirect-process") == "true"){

    toggleProcessBtn.textContent = "Enable Redirecting Process";

    localStorage.setItem("redirect-process", "false");

  } else if (localStorage.getItem("redirect-process") == "false") {

    toggleProcessBtn.textContent = "Disable Redirecting Process";

    localStorage.setItem("redirect-process", "true");

  }
  

});

if(localStorage.getItem("redirect-process") == "true"){
  toggleProcessBtn.textContent = "Disable Redirecting Process";
}

else if(localStorage.getItem("redirect-process") == "false"){
  toggleProcessBtn.textContent = "Enable Redirecting Process";
}