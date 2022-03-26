const resLabel = getElement(1, "result");
const btn = getElement(1, "flip");

resLabel.textContent += "Not flipped yet";

let processing = false;

btn.addEventListener("click", () => {

    if(processing === false){

    processing = true;

    const choices = ["heads", "tails"];
    const random = choices[Math.floor(Math.random() * choices.length)];

    resLabel.textContent = "Result:   ";
    resLabel.textContent += "flipping";

    setTimeout(() => {
        resLabel.textContent += ".";

        setTimeout(() => {
            resLabel.textContent += ".";

            setTimeout(() => {
                resLabel.textContent += ".";

                setTimeout(() => {
                    resLabel.textContent = "Result:   flipping";
                }, 1000);

            }, 1500);

        }, 1500);

    }, 1500);

    setTimeout(() => {
        resLabel.textContent = "Result:   ";
        resLabel.textContent += random;
        processing = false;
    }, 6000);

} else if(processing === true){

    notify("the coin is already flipping, wait for the result!", "error");

}

});