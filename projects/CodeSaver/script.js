const addCodeBtn = document.querySelector(".add-code");
const mainContainer = document.querySelector(".code-container");

let allCodeDivs = document.querySelectorAll(".code-div");
let deleteBtns = document.querySelectorAll(".btn-delete");
let copyBtns = document.querySelectorAll(".btn-copy");
let toggleEditBtns = document.querySelectorAll(".btn-toggle-edit");
let allSelectLangs = document.querySelectorAll(".select-lang");
let codeTitles = document.querySelectorAll(".code-title");
let textAreas = document.querySelectorAll(".code-area");
let editAreas = document.querySelectorAll(".edit-area");

const savedCodes = JSON.parse(localStorage.getItem("codes"));
let codesStatic = savedCodes ?? [];

if (savedCodes) {
  savedCodes.forEach((codeObject) => {
    const createdEl = document.createElement("div");
    createdEl.classList.add("code-div");

    createdEl.innerHTML = `
  <input type="text" class="code-title" placeholder="untitled" value="${codeObject.title}" maxlength="35">

  <select class="select-lang">
    <option value="html">HTML</option>
    <option value="xml">XML</option>
    <option value="javascript">Javascript</option>
    <option value="css">CSS</option>
    <option value="go">GO</option>
    <option value="python">Python</option>
    <option value="bash">BASH</option>
    <option value="java">Java</option>
    <option value="json">JSON</option>
    <option value="typescript">Typescript</option>
    <option value="c">C</option>
    <option value="csharp">C#</option>
    <option value="cpp">C++</option>
    <option value="swift">Swift</option>
    <option value="lua">Lua</option>
    <option value="d">D</option>
    <option value="php">PHP</option>
    <option value="git">Git</option>
    <option value="r">R</option>
    <option value="ruby">Ruby</option>
    <option value="yaml">YAML</option>
    <option value="none">Select language</option>
  </select>

  <div class="btn-group">

    <button class="btn btn-toggle-edit custom">
      <i class="bi-pencil-square"></i>
    </button>

    <button class="btn btn-delete custom">
      <i class="bi-trash"></i>
    </button>

    <button class="btn btn-copy custom">
      <i class="bi-clipboard"></i>
    </button>
  </div>

  <textarea class="area edit-area hide" spellcheck="false" placeholder="edit your code...">${codeObject.code}</textarea>
  <pre class="language-${codeObject.lang} area code-area">${codeObject.code.replaceAll("\n", "\n").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</pre>
`;

    mainContainer.append(createdEl);

    allCodeDivs = document.querySelectorAll(".code-div");
    deleteBtns = document.querySelectorAll(".btn-delete");
    copyBtns = document.querySelectorAll(".btn-copy");
    toggleEditBtns = document.querySelectorAll(".btn-toggle-edit");
    allSelectLangs = document.querySelectorAll(".select-lang");
    codeTitles = document.querySelectorAll(".code-title");
    textAreas = document.querySelectorAll(".code-area");
    editAreas = document.querySelectorAll(".edit-area");
  });
}

codeTitles.forEach((title, index) => {
  title.addEventListener("input", (e) => {
    codesStatic[index].title = e.target.value;

    localStorage.setItem("codes", JSON.stringify(codesStatic));
  });
});

toggleEditBtns.forEach((btn, index) => {

  btn.addEventListener("click", () => {
    codesStatic[index].code = editAreas[index].value;
    textAreas[index].textContent = editAreas[index].value;
    localStorage.setItem("codes", JSON.stringify(codesStatic));

    if(btn.querySelector("i").classList.contains("bi-check-lg")) {
      refreshPage();
    }

    btn.querySelector("i").classList.toggle("bi-check-lg");
    textAreas[index].classList.toggle("hide");
    editAreas[index].classList.toggle("hide");
  });

});

copyBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    copyText(textAreas[index].textContent);
    notify(
      `Copied code of <bold>${codesStatic[index].title || "untitled"}</bold>`,
      "info"
    );
  });
});

deleteBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {

    allCodeDivs[index].remove();
    allCodeDivs = document.querySelectorAll(".code-div");
    
    codesStatic = [];
    
    allCodeDivs.forEach((div) => {
      const divTitle = div.querySelector(".code-title").value;
      const divCode = div.querySelector(".code-area").textContent;
      const lang = div.querySelector(".select-lang")[div.querySelector(".select-lang").selectedIndex].value;
    
      const newData = {
        title: divTitle,
        code: divCode,
        lang: lang,
      };
    
      codesStatic.push(newData);
    });
    
    localStorage.setItem("codes", JSON.stringify(codesStatic));
    refreshPage();
    
  });
});

allSelectLangs.forEach((select, index) => {

  select.querySelectorAll("option").forEach((option, i) => {

    if(option.value == codesStatic[index].lang) {
      option.selected = true;
    }

  });

  select.addEventListener("change", () => {
    codesStatic[index].lang = select[select.selectedIndex].value;
    localStorage.setItem("codes", JSON.stringify(codesStatic));
    refreshPage();
  })
})

addCodeBtn.addEventListener("click", () => {

  const codeInfo = {
    title: "",
    code: "",
    lang: "none"
  };

  codesStatic.push(codeInfo);
  localStorage.setItem("codes", JSON.stringify(codesStatic));

  refreshPage();
});