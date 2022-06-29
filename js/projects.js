fetch("/assets/web/projects.json").then((res) => res.json()).then((data) => {
  
    const displayOptionSetting = localStorage.getItem("project-display");
  
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
          if(entry.isIntersecting) entry.target.classList.add("show");
          else if(!entry.isIntersecting) entry.target.classList.remove("show");
        });
      }, {
        threshold: .5
      }
      );

      cards.forEach(card => {
        observer.observe(card);
      });

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
        sliderCount = data.projects.length - 1;
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
      if (sliderCount === data.projects.length - 1) {
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

      const created = document.createElement("div");
      created.classList.add("grid-card");

      created.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="star star${i}"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>
        <h2>${data.projects[i].title}</h2>

        <p>${data.projects[i].description}</p>

        <a href="${data.projects[i].location}">Go to Project</a>
        <span class="projectCard__cardNumber">${i + 1}</span>
      `;

      gridContainer.append(created);

    }

    let fav_projects = [];
    const stars = document.querySelectorAll(".star");

    if(!localStorage.getItem("favourite_projects")) {
      fav_projects = [];
    }

    if(localStorage.getItem("favourite_projects")) {
      const localItem = JSON.parse(localStorage.getItem("favourite_projects"));
      fav_projects = localItem;

      for(let i = 0; i < data.projects.length; i++){
        if(localItem[i] == true){
          stars[i].classList.add("active");
        } else if(localItem[i] == false){
          stars[i].classList.remove("active");
        }
      }

    }

    for(let i = 0; i < data.projects.length; i++) {
      fav_projects.push(false);

      stars[i].addEventListener("click", () => {
        stars[i].classList.toggle("active");

        if(stars[i].classList.contains("active")) {
          fav_projects[i] = true;
        } else if(!stars[i].classList.contains("active")) {
          fav_projects[i] = false;
        }

        localStorage.setItem("favourite_projects", JSON.stringify(fav_projects));
      });

    }
    
    switch (displayOptionSetting.trim()) {
      
      case "Grid":
        gridOptionBtn.click();
        break;
      case "Slider":
        sliderOptionBtn.click();
        break;
      
    }

    /* new code starts now */

    const showFavBtn = document.querySelector(".toggle-fav");

    toggleFav = false;

    showFavBtn.addEventListener("click", (e) => {

      const allGridCards = document.querySelectorAll(".grid-card");
      
      if(!toggleFav) {
        toggleFav = true;
        e.target.textContent = "Show All";
        const favouriteList = JSON.parse(localStorage.getItem("favourite_projects"));

        for(let i = 0; i < allGridCards.length; i++) {

          if(favouriteList[i] == false) allGridCards[i].style.display = "none";
          else if(favouriteList[i] == true) allGridCards[i].style.display = "inherit";

        }
      } else if(toggleFav) {
        toggleFav = false;
        e.target.textContent = "Show Favourites";
        allGridCards.forEach(card => card.style.display = "inherit");
      }

    });

    /* ends here */

});

if(localStorage.getItem("particles") == "disabled"){}
else {
const particleAmount = Number(localStorage.getItem("particle-amount"));
setTimeout(() => {
  if (document.body.animate) {
    const _stars_ = document.querySelectorAll(".star");
    _stars_.forEach(star => {
      star.addEventListener("click", (a) => {
        pop(a, star.classList[1]);
      });
    })
  }
  
  function pop (e, _class_) {
    // Quick check if user clicked the button using a keyboard
    if (e.clientX === 0 && e.clientY === 0) {
      const bbox = document.querySelector(`.${_class_}`).getBoundingClientRect();
      const x = bbox.left + bbox.width / 2;
      const y = bbox.top + bbox.height / 2;
      for (let i = 0; i < 30; i++) {
        // We call the function createParticle 30 times
        // We pass the coordinates of the button for x & y values
        createParticle(x, y);
      }
    } else {
      for (let i = 0; i < particleAmount; i++) {
        // We call the function createParticle 30 times
        // As we need the coordinates of the mouse, we pass them as arguments
        createParticle(e.clientX, e.clientY);
      }
    }
  }
  
  function createParticle (x, y) {
    const particle = document.createElement('particle');
    document.body.appendChild(particle);
    
    // Calculate a random size from 5px to 25px
    const size = Math.floor(Math.random() * 20 + 5);
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    // Generate a random color in a blue/purple palette
//    particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;
    particle.style.backgroundImage = "url('/assets/img/star.svg')"
    
    // Generate a random x & y destination within a distance of 75px from the mouse
    const destinationX = x + (Math.random() - 0.5) * 2 * 75;
    const destinationY = y + (Math.random() - 0.5) * 2 * 75;
  
    // Store the animation in a variable as we will need it later
    const animation = particle.animate([
      {
        // Set the origin position of the particle
        // We offset the particle with half its size to center it around the mouse
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        opacity: 1
      },
      {
        // We define the final coordinates as the second keyframe
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0
      }
    ], {
      // Set a random duration from 500 to 1500ms
      duration: Math.random() * 1000 + 500,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      // Delay every particle with a random value of 200ms
      delay: Math.random() * 200
    });
    
    // When the animation is complete, remove the element from the DOM
    animation.addEventListener("finish", () => {
      particle.remove();
    });
  }

},1000);
}