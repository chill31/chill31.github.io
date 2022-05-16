const oppositeCaseBtn = document.querySelector(".btn__toOppositeCase");
const toggleCaseBtn = document.querySelector(".btn__toToggleCase");
const upperCaseBtn = document.querySelector(".btn__toUpperCase");
const lowerCaseBtn = document.querySelector(".btn__toLowerCase");

const selectedChoiceDiv = document.querySelector(".after-choice");
const closeIcon = document.querySelector(".icon");
const afterHeader = document.querySelector(".after-choice header");

const inputText = document.querySelector(".input");
const generateBtn = document.querySelector(".generate");

const btns = [oppositeCaseBtn, toggleCaseBtn, upperCaseBtn, lowerCaseBtn];

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        inputText.value = "";
        selectedChoiceDiv.classList.add("active");

        if(e.target.classList.contains("btn__toOppositeCase")) {

            afterHeader.textContent = "Opposite Case Convertor";
            generateBtn.addEventListener("click", () => {
                inputText.value = oppositeCase(inputText.value);
            });

        } else if(e.target.classList.contains("btn__toToggleCase")) {

            afterHeader.textContent = "Toggle Case Convertor";
            generateBtn.addEventListener("click", () => {
                inputText.value = toggleCase(inputText.value);
            });
            

        } else if(e.target.classList.contains("btn__toUpperCase")) {

            afterHeader.textContent = "Upper Case Convertor";
            generateBtn.addEventListener("click", () => {
                inputText.value = inputText.value.toUpperCase();
            });

        } else if(e.target.classList.contains("btn__toLowerCase")) {

            afterHeader.textContent = "Lower Case Convertor";
            generateBtn.addEventListener("click", () => {
                inputText.value = inputText.value.toLowerCase();
            });

        }
    });
});

closeIcon.addEventListener("click", () => {
    selectedChoiceDiv.classList.remove("active");
    inputText.value = "";
});