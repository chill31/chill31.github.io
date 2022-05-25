// const scrollIndicatorDiv = document.querySelector(".scroll-indicator");
// const scrollItems = document.querySelectorAll(".scroll-item");

// scrollItems.forEach(item => {

//   const created__div = document.createElement("div");
//   created__div.classList.add("scroll__indicatorItem");

//   const name = item.classList[2].split("-")[1];

//   let svg;

//   const names = {
//     start: "home",
//     skills: "skills",
//     projects: 'projects',
//     contact: "contact",
//   }

//   if(name == names.start) {
//     svg = `
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="scroll__svg home">
//   <path
//     d="M160 448h-32V224c0-17.69-14.33-32-32-32L32 192c-17.67 0-32 14.31-32 32s14.33 31.1 32 31.1h32v192H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32S177.7 448 160 448zM96 128c26.51 0 48-21.49 48-48S122.5 32.01 96 32.01s-48 21.49-48 48S69.49 128 96 128z" />
// </svg>
// `;
//   }

//   if(name == names.skills) {
//     svg = `
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="scroll__svg skills">
//   <path d="M464 64C490.5 64 512 85.49 512 112V176C512 202.5 490.5 224 464 224H48C21.49 224 0 202.5 0 176V112C0 85.49 21.49 64 48 64H464zM448 128H320V160H448V128zM464 288C490.5 288 512 309.5 512 336V400C512 426.5 490.5 448 464 448H48C21.49 448 0 426.5 0 400V336C0 309.5 21.49 288 48 288H464zM192 352V384H448V352H192z"/>
// </svg>
// `
//   }

//   if(name == names.projects) {
//     svg = `
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="scroll__svg projects">
//   <path d="M512 144v288c0 26.5-21.5 48-48 48h-416C21.5 480 0 458.5 0 432v-352C0 53.5 21.5 32 48 32h160l64 64h192C490.5 96 512 117.5 512 144z"/>
// </svg>
// `
//   }

//   if(name == names.contact) {
//     svg = `
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="scroll__svg contact">
//   <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/>
// </svg>
// `
//   }

//   created__div.innerHTML =  `
//   ${svg}
// `;

//   scrollIndicatorDiv.append(created__div);

// });

// const scrollSvgs = document.querySelectorAll(".scroll__svg");
// scrollSvgs.forEach(item => {
//   item.addEventListener("click", () => {
//     redirect("#" + item.classList[1]);
//   });
// });

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
      }, 250);
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

const submitBtn = document.querySelector(".form__submit");
submitBtn.style.setProperty("--initial-width", submitBtn.offsetWidth + "px");

const downloadLogo = document.querySelector(".download-logo");
downloadLogo.addEventListener("click", () => {

  var a = document.createElement('a');
  a.href = "/favicon.ico";
  a.download = "/favicon.ico";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

});

const ag9 = document.querySelector(".mercity-website-box");
ag9.addEventListener("click", () => {
  redirect("https://site.mercitysmp.cf/");
});