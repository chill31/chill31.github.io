const charCount = document.querySelector(".char-count h2");
const charCountNoSpace = document.querySelector(".char-count-nospace h2");
const wordCount = document.querySelector(".word-count h2");

const input = document.querySelector(".user-input");

input.addEventListener("input", (e) => {

    charCount.textContent = e.target.value.length;
    wordCount.textContent = e.target.value.trim().split(/\s+/).length;
    charCountNoSpace.textContent = e.target.value.toString().replaceAll(/ /g, "").length;

    if(input.value == "") {
        charCount.textContent = "0";
        wordCount.textContent = "0";
        charCount.textContent = "0";
    }

});

if(input.value == "") {
    charCount.textContent = "0";
    wordCount.textContent = "0";
    charCount.textContent = "0";
}