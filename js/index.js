const headers = document.querySelectorAll(".section__header");
headers.forEach(header => {

    header.addEventListener("click", (e) => {
        redirect("#" + e.target.parentElement.id);
    });

});


const introSection = document.querySelector(".section__intro");
introSection.addEventListener("click", (e) => {
    if(e.target.classList.contains("section__header")) {
        return;
    }
    redirect("#skills");
});

const interItems = document.querySelectorAll(".item-inter");

const progressBars = document.querySelectorAll(".actual-progress");

let btnContent = "Show Skills";
let shown;

const Skillobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    
    if(entry.isIntersecting) {
      setTimeout(() => {
        for (let i = 0; i < progressBars.length; i++) {
          progressBars[i].classList.add("active");
          progressBars[i].style.width = progressBars[i].getAttribute("data-progress");
        }
      }, 250);
    } else {
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

progressBars.forEach(bar => {
    Skillobserver.observe(bar);
});