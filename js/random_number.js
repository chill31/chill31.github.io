const minInput = document.querySelector(".inputs.min");
const maxInput = document.querySelector(".inputs.max");
const resultBtn = document.querySelector("#flip");
const resultLabel = document.querySelector("#result.result");

resultBtn.addEventListener("click", () => {
  let random = Math.floor(
    Math.random() * (maxInput.value - minInput.value) + minInput.value
  );

  if (random < minInput.value) random = minInput.value;

  resultLabel.textContent = random;
});
