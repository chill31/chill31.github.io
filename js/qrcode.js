const wrapper = document.querySelector(".wrapper");
const generateBtn = wrapper.querySelector(".form button");

const input = document.querySelector(".wrapper .form input");
const img = document.querySelector(".wrapper div img");

generateBtn.addEventListener("click", () => {
  let qrValue = input.value;
  if (!qrValue) {
    wrapper.classList.remove("active");
    return;
  }

  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=2000x2000&data=${qrValue}`;

  notify("Successfully created a new QR code for entered value", "success");

  wrapper.classList.add("active");
});
