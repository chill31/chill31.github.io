const minInput = document.querySelector(".inputs.min");
const maxInput = document.querySelector(".inputs.max");
const resultBtn = document.querySelector("#flip");
const resultLabel = document.querySelector("#result.result");

resultBtn.addEventListener("click", () => {
  
  if(minInput.valueAsNumber > maxInput.valueAsNumber || minInput.valueAsNumber == maxInput.valueAsNumber || maxInput.valueAsNumber == 0) {
    notify("The values must have a gap. The maximum value should not be less than the minimum value.", "error");
  } else {

    let randomNum = Math.floor(Math.random() * (maxInput.valueAsNumber + 1));
    
    if(minInput.valueAsNumber > randomNum) {
      randomNum = minInput.valueAsNumber;
    }

    resultLabel.textContent = randomNum;

  }

});
