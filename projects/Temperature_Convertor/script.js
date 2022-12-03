let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

let output;

celsius.addEventListener("input", () => {
  output = (parseFloat(celsius.value) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(output.toFixed(2));

  if (celsius.value == "" || !celsius.value) {
    fahrenheit.value = "";
  }
});

fahrenheit.addEventListener("input", () => {
  output = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  celsius.value = parseFloat(output.toFixed(2));

  if (fahrenheit.value == "" || !fahrenheit.value) {
    celsius.value = "";
  }
});
