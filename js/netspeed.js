if (window.addEventListener) {
  window.addEventListener("load", InitiateSpeedDetection, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", InitiateSpeedDetection);
}
const imageAddr =
  "https://4k-uhd.nl/wp-content/uploads/2018/08/4K-3840x2160-Wallpaper-Uitzicht-5.jpg";
const downloadSize = 5739426; //bytes
function ShowProgressMessage(msg) {
  const oProgress = document.getElementById("progress");
  if (oProgress) {
    oProgress.innerHTML = msg;
  }
}
function showResultMessage(msg) {
  document.getElementById("result").innerHTML = msg;
  document.getElementById("progress").innerHTML = "Your Internet Speed is";
}
function InitiateSpeedDetection() {
  ShowProgressMessage("Calculating Speed ...");
  window.setTimeout(MeasureConnectionSpeed, 1);
}
function MeasureConnectionSpeed() {
  let startTime, endTime;
  const download = new Image();
  download.onload = function () {
    endTime = new Date().getTime();
    showResults();
  };

  download.onerror = function (err, msg) {
    ShowProgressMessage("Invalid image, or error downloading");
  };

  startTime = new Date().getTime();
  const cacheBuster = "?nnn=" + startTime;
  download.src = imageAddr + cacheBuster;

  function showResults() {
    const duration = (endTime - startTime) / 1000;
    const bitsLoaded = downloadSize * 8;
    const speedBps = (bitsLoaded / duration).toFixed(2);
    const speedKbps = (speedBps / 1024).toFixed(2);
    const speedMbps = (speedKbps / 1024).toFixed(2);
    showResultMessage(speedMbps + " Mbps");
  }
}
