const resLabel = document.getElementById("result");
const btn = document.getElementById("flip");

resLabel.textContent += "Not flipped yet";

btn.addEventListener("click", () => {

    const choices = ["heads", "tails"];
    const random = choices[Math.floor(Math.random() * choices.length)]; 

    resLabel.textContent = `Result: ${random}`;
});
