const title = document.querySelector(".title");
const brief = document.querySelector(".page-brief");
const projectContainer = document.querySelector('.projects-container');

const headObserver = new IntersectionObserver((entries) => {

  entries.forEach(() => {
    title.classList.add('active');
    brief.classList.add('active');
    projectContainer.classList.add("active");

    setTimeout(() => {
      brief.classList.add("active-done")
    }, 1500);
  });

}, {
  threshold: .5,
});

headObserver.observe(title);

const allCopyProjectLinkFunctionSpans = document.querySelectorAll('.fn-copy');
allCopyProjectLinkFunctionSpans.forEach((span) => {

  span.addEventListener("click", (e) => {
    navigator.clipboard.writeText(e.target.parentElement.parentElement.querySelector(".fn-link").href);
  });

});