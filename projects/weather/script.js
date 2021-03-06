const wrapper = document.querySelector(".wrapper");
const inputPart = document.querySelector(".input-part");
const infoTxt = document.querySelector(".input-part .info-txt");
const inputField = document.querySelector(".input-part input");
const locationBtn = document.querySelector(".input-part button");
const weatherPart = document.querySelector(".wrapper .weather-part");
const wIcon = document.querySelector(".wrapper .weather-part img");
const arrowBack = document.querySelector(".wrapper header i");
let api;
inputField.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && inputField.value != "") {
    requestApi(inputField.value);
  }
});

locationBtn.addEventListener("click", () => {
  requestApi(inputField.value);
});

api_key = "610ad113ae69b9668d96b0f36a61e68b";
function requestApi(city) {
  api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;
  fetchData();
}
function onSuccess(position) {
  const { latitude, longitude } = position.coords;
  api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`;
  fetchData();
}
function onError(error) {
  infoTxt.innerText = error.message;
  infoTxt.classList.add("error");
}
function fetchData() {
  infoTxt.innerText = "Getting weather details...";
  infoTxt.classList.add("pending");
  fetch(api)
    .then((res) => res.json())
    .then((result) => weatherDetails(result))
    .catch((e) => {
      infoTxt.innerText = "Something went wrong";
      infoTxt.classList.replace("pending", "error");
    });
}
function weatherDetails(info) {
  if (info.cod == "404") {
    infoTxt.classList.replace("pending", "error");
    infoTxt.innerText = `${inputField.value} isn't a valid city name`;
  } else {
    const city = info.name;
    const country = info.sys.country;
    const { description, id } = info.weather[0];
    const { temp, feels_like, humidity } = info.main;

    if (id == 800) {
      wIcon.src = "../../assets/img/clear.svg";
    } else if (id >= 200 && id <= 232) {
      wIcon.src = "../../assets/img/storm.svg";
    } else if (id >= 600 && id <= 622) {
      wIcon.src = "../../assets/img/snow.svg";
    } else if (id >= 701 && id <= 781) {
      wIcon.src = "../../assets/img/haze.svg";
    } else if (id >= 801 && id <= 804) {
      wIcon.src = "../../assets/img/cloud.svg";
    } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
      wIcon.src = "../../assets/img/rain.svg";
    }

    document.querySelector(".wrapper .weather-part .temp .numb").innerText =
      Math.floor(temp);
    document.querySelector(".wrapper .weather-part .weather").innerText =
      description;
    document.querySelector(
      ".wrapper .weather-part .location span"
    ).innerText = `${city}, ${country}`;
    document.querySelector(".wrapper .weather-part .temp .numb-2").innerText =
      Math.floor(feels_like);
    document.querySelector(
      ".wrapper .weather-part .humidity span"
    ).innerText = `${humidity}%`;
    infoTxt.classList.remove("pending", "error");
    infoTxt.innerText = "";
    inputField.value = "";
    wrapper.classList.add("active");
  }
}
arrowBack.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
