document.querySelector(".location404").textContent = window.location.href;

document.querySelector(".back-home").addEventListener("click", () => {
  redirect("/");
});

document.querySelector(".report-problem").addEventListener("click", () => {
  redirect("https://github.com/chill31/chill31.github.io/issues");
});