const container = document.querySelector(".container");

const prevBtn = document.querySelector(".controls.previous");
const nextBtn = document.querySelector(".controls.next");
const lbl = document.getElementById("project-num");

const spanContainerC = document.querySelector(".newest");
const editSpan = document.querySelector("span.edit");

fetch("/assets/web/projects.json").then(res => res.json()).then(data => {

let active = false;

spanContainerC.addEventListener("click", () => {

    if(active === false){
        spanContainerC.classList.add("active")
        active = true;
    } else if(active === true){
        spanContainerC.classList.remove("active");
        active = false;
    }
});

const createdCard = document.createElement("div");
createdCard.classList.add("text-container");

container.prepend(createdCard);

let sliderCount = 0;

createdCard.innerHTML = `
<a href="${data.projects[sliderCount].location}" class="project-a_s">${data.projects[sliderCount].title}</a>
<p>${data.projects[sliderCount].description}</p>

<div class="bg">
</div>
`;

lbl.textContent = `Project ${sliderCount + 1}`

let newest = data.projects.length - 2;
editSpan.innerHTML =
  `<a href=\"/${data.projects[newest].location}\">` +
  data.projects[newest].title.toString().substring(0, 7) +
  "</a>" + "...";
  
function moveBack() {

  if (sliderCount === 0) {
    sliderCount = data.projects.length - 2;
    lbl.textContent = `Project ${sliderCount + 1}`;
  } else {
    sliderCount -= 1;
    lbl.textContent = `Project ${sliderCount + 1}`;
  }

  createdCard.innerHTML = `
<a href="${data.projects[sliderCount].location}" class="project-a_s">${data.projects[sliderCount].title}</a>
<p>${data.projects[sliderCount].description}</p>

<div class="bg">
</div>
`;
  lbl.textContent = `Project ${sliderCount + 1}`;

}

function moveNext() {

  if (sliderCount === data.projects.length - 2) {
    sliderCount = 0;
    lbl.textContent = `Project ${sliderCount + 1}`;
  } else {
    sliderCount += 1;
    lbl.textContent = `Project ${sliderCount + 1}`;
  }

  createdCard.innerHTML = `
<a href="${data.projects[sliderCount].location}" class="project-a_s">${data.projects[sliderCount].title}</a>
<p>${data.projects[sliderCount].description}</p>

<div class="bg">
</div>
`;
  lbl.textContent = `Project ${sliderCount + 1}`;

}

prevBtn.addEventListener("click", () => {

  moveBack();

});

nextBtn.addEventListener("click", () => {

  moveNext();

});

document.addEventListener("keydown", (e) => {

  const keyStr = e.key.toString().toLowerCase();

  if(keyStr === "arrowleft"){
    moveBack();
  }

  if(keyStr === "arrowright"){
    moveNext();
  }

});

});