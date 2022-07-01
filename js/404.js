const mid_container = document.querySelector(".mid-container");
const element = document.querySelector("entered-page");

element.textContent = window.location.href;

const checkLocation = window.location.href.toString().toLowerCase();

let hintText = "";

if (
  checkLocation.endsWith("projects/") ||
  checkLocation.endsWith("project/") ||
  checkLocation.endsWith("projects") ||
  checkLocation.endsWith("project")
) {
  hintText = `
If you are looking for this website's utilities/projects, then head over to the <a href="/Projects.html">Projects</a> page.
`;
}

const p = document.createElement("p");
p.innerHTML = hintText;

mid_container.append(p);
