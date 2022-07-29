const screen = document.querySelector("#screen");
const btn = document.querySelectorAll(".btn");

const allBtns = document.querySelectorAll("button");

allBtns.forEach((btn) => {
  btn.classList.add("custom");
});

const CE = document.getElementById("ce");
const factor = document.getElementById("fact_");
const AC = document.getElementById("ac");
const SIN = document.getElementById("sin");
const PI = document.getElementById("pi");
const COS = document.getElementById("cos");
const LOG = document.getElementById("log");
const TAN = document.getElementById("tan");
const SQRT = document.getElementById("sqrt");
const _e_ = document.getElementById("e");
const POW = document.getElementById("pow");

const calc = document.getElementById("eval");

CE.addEventListener("click", () => {
  backspc();
});

factor.addEventListener("click", () => {
  fact();
});

AC.addEventListener("click", () => {
  empty();
});

SIN.addEventListener("click", () => {
  sin();
});

PI.addEventListener("click", () => {
  pi();
});

COS.addEventListener("click", () => {
  cos();
});

LOG.addEventListener("click", () => {
  log();
});

TAN.addEventListener("click", () => {
  tan();
});

SQRT.addEventListener("click", () => {
  sqrt();
});

_e_.addEventListener("click", () => {
  e();
});

POW.addEventListener("click", () => {
  pow();
});

calc.addEventListener("click", () => {
  screen.value = eval(screen.value);
});

for (item of btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText;

    if (btntext == "×") {
      btntext = "*";
    }

    if (btntext == "÷") {
      btntext = "/";
    }
    screen.value += btntext;
  });
}

function empty() {
  screen.value = "";
}

function sin() {
  screen.value = Math.sin(screen.value);
}

function cos() {
  screen.value = Math.cos(screen.value);
}

function tan() {
  screen.value = Math.tan(screen.value);
}

function pow() {
  screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
  screen.value = Math.sqrt(screen.value, 2);
}

function log() {
  screen.value = Math.log(screen.value);
}

function pi() {
  screen.value = 3.14159265359;
}

function e() {
  screen.value = 2.71828182846;
}

function fact() {
  let i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  i = i - 1;

  screen.value = f;
}

function backspc() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}
