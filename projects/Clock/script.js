function displayTime() {
  timezone = form.select_time.options[form.select_time.options.selectedIndex].value;

  newTime = new Date().toLocaleString("en-NZ", {
    timeZone: timezone,
    timeZoneName: "short",
  });
  document.querySelector(".result-time").innerText = `${newTime} : ${timezone}`;
  refresh_time();
}

function refresh_time() {
  refresh = 1000;
  mytime = setTimeout("displayTime()", refresh);
}

function addOption(selectbox, text, value) {
  let optn = document.createElement("option");
  optn.text = text;
  optn.value = value;
  selectbox.options.add(optn);
}

for (i = 0; i < my_timezones.length; i++) {
  addOption(document.form.select_time, my_timezones[i], my_timezones[i]);
}

document.querySelector("[name='select_time']").addEventListener("change", () => {
  displayTime();
})