const searchParamFn = new URLSearchParams(window.location.search);
const valueLocation = searchParamFn.get("query");

if (valueLocation) {
  setTimeout(() => {
    redirect(valueLocation);
  }, 5000);
} else {
  document.getElementById("redirect-h1").textContent = "No Location Provided";
  document.getElementById("patient-text").innerHTML = `
<button class="bth">
    Back To Home
</button>
`;

  document.querySelector(".bth").addEventListener("click", () => {
    redirect("/");
  });

  document.querySelector("footer").innerHTML =
    'This page is for redirecting process, this can be disabled through the website\'s settings, if you think this is not supposed to happen, please report a bug in the <a href="/review/bugs.html">Bug Report</a> page.';
}
