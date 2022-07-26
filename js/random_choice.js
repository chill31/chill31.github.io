const chooseBtn = document.querySelector(".wrapper .content button");
const input = document.querySelector(".wrapper .content textarea");
const label = document.querySelector(".wrapper .content div .result");

chooseBtn.addEventListener("click", () => {
  const userChoices = [];
  const eChoices = input.value.split("|");

  for (let i = 0; i < eChoices.length; i++) {
    userChoices.push(eChoices[i]);
  }

  const randomChoice =
    userChoices[Math.floor(Math.random() * userChoices.length)];
  label.textContent = `${randomChoice}`;
});
