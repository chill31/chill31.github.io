const addCodeBtn = document.querySelector(".add-code");
const mainContainer = document.querySelector(".code-container");

let allCodeDivs = document.querySelectorAll(".code-div");
let deleteBtns = document.querySelectorAll(".btn-delete");
let copyBtns = document.querySelectorAll(".btn-copy");
let codeTitles = document.querySelectorAll(".code-title");
let textAreas = document.querySelectorAll(".code-area");
let allHLAreas = document.querySelectorAll(".highlight-area");

const savedCodes = JSON.parse(localStorage.getItem("codes"));
let codesStatic = savedCodes ?? [];

if (savedCodes) {
  savedCodes.forEach((codeObject) => {
    const createdEl = document.createElement("div");
    createdEl.classList.add("code-div");

    createdEl.innerHTML = `
  <input type="text" class="code-title" placeholder="untitled" value="${codeObject.title}" maxlength="35">

  <div class="btn-group">
    <button class="btn btn-delete custom">
      <i class="bi-trash"></i>
    </button>

    <button class="btn btn-copy custom">
      <i class="bi-clipboard"></i>
    </button>
  </div>

  <textarea class="code-area" spellcheck="false">${codeObject.code}</textarea>
`;

    mainContainer.append(createdEl);

    allCodeDivs = document.querySelectorAll(".code-div");
    deleteBtns = document.querySelectorAll(".btn-delete");
    copyBtns = document.querySelectorAll(".btn-copy");
    codeTitles = document.querySelectorAll(".code-title");
    textAreas = document.querySelectorAll(".code-area");
    allHLAreas = document.querySelectorAll(".highlight-area");
  });
}

codeTitles.forEach((title, index) => {
  title.addEventListener("input", (e) => {
    codesStatic[index].title = e.target.value;

    localStorage.setItem("codes", JSON.stringify(codesStatic));
  });
});

textAreas.forEach((text, index) => {
  text.addEventListener("input", (e) => {
    codesStatic[index].code = e.target.value;

    localStorage.setItem("codes", JSON.stringify(codesStatic));
  });
});

textAreas.forEach((text) => {
  text.addEventListener("keydown", (e) => {
    if(e.key.toLowerCase() == "tab") {
      e.preventDefault();
      text.textContent += "  ";
    }
  })
});

copyBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    copyText(textAreas[index].value);
    notify(`Copied code of <bold>${codesStatic[index].title || "untitled"}</bold>`, "info");
  });
});

deleteBtns.forEach((btn, index) => {

  btn.addEventListener("click", () => {

    allCodeDivs[index].remove();
    allCodeDivs = document.querySelectorAll(".code-div");

    codesStatic = [];

    allCodeDivs.forEach((div) => {
      const divTitle = div.querySelector(".code-title").value;
      const divCode = div.querySelector(".code-area").value;

      const newData = {
        title: divTitle,
        code: divCode,
      }

      codesStatic.push(newData);
    });

    localStorage.setItem("codes", JSON.stringify(codesStatic));
    refreshPage();

  });

});

const html = `
  <input type="text" class="code-title" placeholder="untitled" maxlength="35">

  <div class="btn-group">
    <button class="btn btn-delete custom">
      <i class="bi-trash"></i>
    </button>

    <button class="btn btn-copy custom">
      <i class="bi-clipboard"></i>
    </button>
  </div>

  <textarea class="code-area" spellcheck="false"></textarea>
`;

addCodeBtn.addEventListener("click", () => {
  const createdDiv = document.createElement("div");
  createdDiv.classList.add("code-div");

  createdDiv.innerHTML = html;

  mainContainer.prepend(createdDiv);

  const codeInfo = {
    title: document.querySelectorAll(".code-title")[0].value,
    code: document.querySelectorAll(".code-area")[0].value,
  };

  codesStatic.push(codeInfo);
  localStorage.setItem("codes", JSON.stringify(codesStatic));

  refreshPage();
});