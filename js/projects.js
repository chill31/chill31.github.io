fetch("/assets/web/projects.json").then((res) => res.json()).then((data) => {
  

    const sliderOptionBtn = document.querySelector(".display-btns.display-slider");
    const gridOptionBtn = document.querySelector(".display-btns.display-grid");

    sliderOptionBtn.addEventListener("click", () => {

      sliderOptionBtn.classList.add("selected");
      gridOptionBtn.classList.remove("selected");

      document.body.classList.remove("grid-view");

    });

    gridOptionBtn.addEventListener("click", () => {

      sliderOptionBtn.classList.remove("selected");
      gridOptionBtn.classList.add("selected");

      document.body.classList.add("grid-view");

      const cards = document.querySelectorAll(".grid-card");

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle("show", entry.isIntersecting);
          if(entry.isIntersecting) observer.unobserve(entry.target);
        })
      }, {
        threshold: .5
      }
      );

      cards.forEach(card => {
        observer.observe(card);
      });

    });

    const spanContainerC = document.querySelector(".newest-project-div");
    const editSpan = document.querySelector("span.edit");

    let newest = data.projects.length - 2;
    editSpan.innerHTML =
      `<a href=\"${data.projects[newest].location}\">` +
      data.projects[newest].title.toString().substring(0, 7) +
      "</a>" +
      "...";

    let active = false;

    spanContainerC.addEventListener("click", () => {
      if (active === false) {
        spanContainerC.classList.add("active");
        active = true;
      } else if (active === true) {
        spanContainerC.classList.remove("active");
        active = false;
      }
    });

    // The Slider code starts here

    const container = document.querySelector(".container");

    const prevBtn = document.querySelector(".controls-btn.previous");
    const nextBtn = document.querySelector(".controls-btn.next");
    const lbl = document.getElementById("project-number");

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

    lbl.textContent = `Project ${sliderCount + 1}`;

    

      createdCard.innerHTML = `
<a href="${data.projects[sliderCount].location}" class="project-a_s">${data.projects[sliderCount].title}</a>
<p>${data.projects[sliderCount].description}</p>

<div class="bg">
</div>
`;

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

      prevBtn.classList.add("focused");

      setTimeout(() => {
        prevBtn.classList.remove("focused");
      }, 500);
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

      nextBtn.classList.add("focused");

      setTimeout(() => {
        nextBtn.classList.remove("focused");
      }, 500);
    }

    prevBtn.addEventListener("click", () => {
      prevBtn.classList.remove("focused");
      moveBack();
    });

    nextBtn.addEventListener("click", () => {
      nextBtn.classList.remove("focused");
      moveNext();
    });

    document.addEventListener("keydown", (e) => {
      const keyStr = e.key.toString().toLowerCase();

      if (keyStr === "arrowleft") {
        moveBack();
      }

      if (keyStr === "arrowright") {
        moveNext();
      }
    });

    // the grid view starts here.

    const gridContainer = document.querySelector(".grid-container");


    for(let i = 0; i < data.projects.length; i++){

      if(i == data.projects.length - 1) break;

      const created = document.createElement("div");
      created.classList.add("grid-card");

      created.innerHTML = `
<h2>${data.projects[i].title}</h2>

<p>${data.projects[i].description}</p>

<a href="${data.projects[i].location}">Go to Project</a>
`;

      gridContainer.append(created);

    }
});