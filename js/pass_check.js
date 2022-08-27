const strengthMeter = document.getElementById("strength-meter");
const passwordInput = document.getElementById("password-input");
const reasonsContainer = document.getElementById("reasons");

passwordInput.addEventListener("input", updateStrengthMeter);
updateStrengthMeter();

function updateStrengthMeter() {
  const weaknesses = calculatePasswordStrength(passwordInput.value);

  let strength = 100;
  reasonsContainer.innerHTML = "";
  weaknesses.forEach((weakness) => {
    if (weakness == null) return;
    strength -= weakness.deduction;
    const messageElement = document.createElement("div");
    messageElement.innerText = weakness.message;
    reasonsContainer.appendChild(messageElement);
  });
  strengthMeter.style.setProperty("--strength", strength);
  
  console.log(strength);
  if(strength <= 40){ 
    strengthMeter.classList.add("weak");
    strengthMeter.classList.remove("okay");
    strengthMeter.classList.remove("strong");
  }
  
  if(strength <= 99 && strength > 40){
    strengthMeter.classList.add("okay");
    strengthMeter.classList.remove("weak");
    strengthMeter.classList.remove("strong");
  }
  
  if(strength == 100){
    strengthMeter.classList.add("strong");
    strengthMeter.classList.remove("okay");
    strengthMeter.classList.remove("weak");
  }
}

function calculatePasswordStrength(password) {
  const weaknesses = [];
  weaknesses.push(lengthWeakness(password));
  weaknesses.push(lowercaseWeakness(password));
  weaknesses.push(uppercaseWeakness(password));
  weaknesses.push(numberWeakness(password));
  weaknesses.push(specialCharactersWeakness(password));
  weaknesses.push(repeatCharactersWeakness(password));
  return weaknesses;
}

function lengthWeakness(password) {
  const length = password.length;

  if (length <= 5) {
    return {
      message: "Your password is too short",
      deduction: 40,
    };
  }

  if (length <= 10) {
    return {
      message: "Your password could be longer",
      deduction: 15,
    };
  }
}

function uppercaseWeakness(password) {
  return characterTypeWeakness(password, /[A-Z]/g, "uppercase characters");
}

function lowercaseWeakness(password) {
  return characterTypeWeakness(password, /[a-z]/g, "lowercase characters");
}

function numberWeakness(password) {
  return characterTypeWeakness(password, /[0-9]/g, "numbers");
}

function specialCharactersWeakness(password) {
  return characterTypeWeakness(
    password,
    /[^0-9a-zA-Z\s]/g,
    "special characters"
  );
}

function characterTypeWeakness(password, regex, type) {
  const matches = password.match(regex) || [];

  if (matches.length === 0) {
    return {
      message: `Your password has no ${type}`,
      deduction: 20,
    };
  }

  if (matches.length <= 2) {
    return {
      message: `Your password could use more ${type}`,
      deduction: 5,
    };
  }
}

function repeatCharactersWeakness(password) {
  const matches = password.match(/(.)\1/g) || [];
  if (matches.length > 0) {
    return {
      message: "Your password has repeat characters",
      deduction: matches.length * 10,
    };
  }
}

const toggleTypeBtn = document.querySelector(".toggle-type");

let typePass = true;
toggleTypeBtn.addEventListener("click", () => {
  if (typePass) {
    passwordInput.setAttribute("type", "text");
    typePass = false;
  } else {
    passwordInput.setAttribute("type", "password");
    typePass = true;
  }
});

const copyTextBtn = document.querySelector(".copy-text");

copyTextBtn.addEventListener("click", () => {
  copyText(passwordInput.value);
  notify("Copied the entered password", "info");
});
