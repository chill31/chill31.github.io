fetch("/assets/web/projects.json").then(res => res.json()).then(data => {

    const num_proj_element = document.querySelector("custom-num-projs");
    const newest_proj_element = document.querySelector("custom-newest-proj");
    const most_famous_proj = document.querySelector("custom-famous-proj");

    const count = data.projects.length - 2;
    const newest_projObject = data.projects[count];

    num_proj_element.textContent = count;
    newest_proj_element.innerHTML = `
<a class="proj-a" href="${newest_projObject.location}">${newest_projObject.title}</a>    
`;

const randomProjObject = data.projects[Math.floor(Math.random() * count)];

most_famous_proj.innerHTML = `
<a class="proj-a" href="${randomProjObject.location}">${randomProjObject.title}</a>
`;

});