const settings_container_projects = document.querySelector(".settings-container");

fetch("/assets/web/projects.json").then(res => res.json()).then(data => {

  let count = 0;

    data.projects.forEach(project => {
      count++;

      if (count === data.projects.length) return;

      const createdDiv = document.createElement("div");
      createdDiv.classList.add("project-settings-div");

      // onclick="this.classList.toggle('opened')"

      createdDiv.innerHTML = `

    <div id="details">
        <h3 class="details-open-close" data-id="important-no-edit" data-label="${project.title.replaceAll(
          / /g,
          "_"
        )}">Settings for: ${project.title}</h3>

       <div class="open-close-div" id="open-close" data-id="div-no-edit" data-for-project="for-${project.title.replaceAll(
         / /g,
         "_"
       )}">
        <h2>${project.title}</h2>
        <h4>Project ${count}</h4>

        <p>No settings available</p>

        <br>
        <br>

        <button class="go-to-proj-btn btn-click" data-btn-count="${count - 1}">Go to Project</button>
       </div>

        </div>

    <br>

`;

      settings_container_projects.append(createdDiv);
    });

    document.body.addEventListener("click", (e) => {

        if(!e.target.classList.contains("details-open-close")) return;
        if(!e.target.getAttribute("data-id") || !e.target.getAttribute("data-id") === "important-no-edit") return;

        e.target.classList.toggle("opened");

    });

    document.body.addEventListener("click", (e) => {

      if(!e.target.classList.contains("go-to-proj-btn")) return;

      redirect(`/${data.projects[e.target.getAttribute("data-btn-count")].location}`);

    });

});