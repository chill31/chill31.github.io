const interItems = document.querySelectorAll(".item-inter");

const skillsContainer = document.querySelector(".experience-and-things");
const progressBars = document.querySelectorAll(".actual-progress");

let btnContent = "Show Skills";
let shown;

const Skillobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    
    if(entry.isIntersecting) {
      skillsContainer.classList.add("intersect");
      setTimeout(() => {
        for (let i = 0; i < progressBars.length; i++) {
          progressBars[i].classList.add("active");
          progressBars[i].style.width = progressBars[i].getAttribute("data-progress");
        }
      }, 500);
    } else {
      skillsContainer.classList.remove("intersect");
        for (let i = 0; i < progressBars.length; i++) {
          progressBars[i].classList.remove("active");
          progressBars[i].style.width = "0";
        }
    }

  });
}, {
  threshold: .5
}
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

   if (entry.isIntersecting) entry.target.classList.add("intersect");
   else entry.target.classList.remove("intersect");

  });
});

Skillobserver.observe(skillsContainer);
interItems.forEach(e => observer.observe(e));