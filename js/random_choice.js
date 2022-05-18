const chooseBtn = document.querySelector(".wrapper thing button");
const input = document.querySelector(".wrapper thing textarea");
const label = document.querySelector(".wrapper thing div .result");

chooseBtn.addEventListener("click", () => {

    const userChoices = [];
    const eChoices = input.value.split("|");

    for(let i = 0; i < eChoices.length; i++){
        userChoices.push(eChoices[i]);
    }

    const randomChoice = userChoices[Math.floor(Math.random() * userChoices.length)];
    label.textContent = `${randomChoice}`;

});