const rollBtn = getElement(0, ".roll-btn");
const resultLabel = getElement(0, ".result-lbl");
const img = getElement(0, ".dice-img");
const img2 = getElement(0, ".dice-img2");

let base = "../assets/img/die/";
let empty_url = "not-rolled.png";

img.src = base + empty_url;
img2.src = base + empty_url;

rollBtn.addEventListener("click", () => {

    let random = Math.floor(Math.random() * 6 + 1);
    let random2 = Math.floor(Math.random() * 6 + 1);

    if(random == 0){
        random = 1;
    }

    if(random2 == 0){
        random2 = 1;
    }

    resultLabel.innerText = `Result: \nThe first Dice rolled: ${random}\nThe second Dice rolled: ${random2}`;

    img.src = base + random + ".png";
    img2.src = base + random2 + ".png";

});