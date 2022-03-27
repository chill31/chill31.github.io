if (window.addEventListener) {
  window.addEventListener("load", InitiateSpeedDetection, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", InitiateSpeedDetection);
}
var imageAddr =
  "https://4k-uhd.nl/wp-content/uploads/2018/08/4K-3840x2160-Wallpaper-Uitzicht-5.jpg";
var downloadSize = 5739426; //bytes
function ShowProgressMessage(msg) {
  var oProgress = document.getElementById("progress");
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
  var startTime, endTime;
  var download = new Image();
  download.onload = function () {
    endTime = new Date().getTime();
    showResults();
  };

  download.onerror = function (err, msg) {
    ShowProgressMessage("Invalid image, or error downloading");
  };

  startTime = new Date().getTime();
  var cacheBuster = "?nnn=" + startTime;
  download.src = imageAddr + cacheBuster;

  function showResults() {
    var duration = (endTime - startTime) / 1000;
    var bitsLoaded = downloadSize * 8;
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = (speedBps / 1024).toFixed(2);
    var speedMbps = (speedKbps / 1024).toFixed(2);
    showResultMessage(speedMbps + " Mbps");
  }
}