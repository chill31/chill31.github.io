function hidePopup() {
  popupBox.classList.remove("show");
}

function err(e) {
  if (e === "t") {
    alert("Please provide a title!");
  } else {
    alert("Please provide a description!");
  }
}

function showSettingsMenu(param) {
  param.parentElement.classList.add("show");

  document.body.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      param.parentElement.classList.remove("show");
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.tagName != "I" || e.target != param) {
      param.parentElement.classList.remove("show");
    }
  });
}

function deleteNote(noteCount) {
  notes.splice(noteCount, 1);
  localStorage.setItem("notes", JSON.stringify(notes));

  window.location.href = window.location.href;
}

function updateNote(index, title, desc) {
  isUpdate = true;
  updateId = index;

  addBox.click();

  titleTag.value = title;
  descTag.value = desc;

  addBtn.addEventListener("click", () => {
    const dateNow = new Date();
    const dateYear = dateNow.getFullYear();
    const dateMonth = dateNow.getMonth();
    const dateDay = dateNow.getDay();
    const dateDate = dateNow.getDate();
    const dateHour = dateNow.getHours();
    const dateMinute = dateNow.getMinutes();
    const dateSeconds = dateNow.getSeconds();

    const formattedDate = `${fixMonth(dateMonth)} ${formatDate(
      dateDate
    )} (${fixDay(
      dateDay
    )}), ${dateHour}:${dateMinute}:${dateSeconds}, ${dateYear}`;

    const stored = [];
    JSON.parse(localStorage.getItem("notes")).forEach((note) => {
      stored.push(note);
    });

    stored[index].edited = true;
    stored[index].edit_date = formattedDate;

    localStorage.setItem("notes", JSON.stringify(stored));
  });
}

function showDetails(count) {

  const title = JSON.parse(localStorage.getItem("notes"))[count].title;
  const description = JSON.parse(localStorage.getItem("notes"))[count].description;
  const date = JSON.parse(localStorage.getItem("notes"))[count].date.replace("\\n", "<br>");
  const edited = JSON.parse(localStorage.getItem("notes"))[count].edited;
  let editdate = JSON.parse(localStorage.getItem("notes"))[count].edit_date;

  
  if(edited == true) {
    editdate = editdate;
  } else {
    editdate = "Not Edited";
  }

popify({
  overlay: true,
  closeOnBackground: false,
  closeOnEscape: true, 
  short: false, 
  closeIcon: true,
  headerContent: title,
  subText: `
<span style="text-align: center !important;">Edited: ${editdate}</span><br><br>
${description}<br>
<br>
<span class="popup-separator"></span>
<br>
Created on: ${date}
  `,
});

}

function showNotes() {
  if (notes.length == 0) return;

  notes.forEach((note, index) => {
    let liTag = `
<li class="note">
    <div class="details">
        <p>${note.title}</p>
        <span>${note.description.replaceAll("\\n", "<br>")}</span>
    </div>
    <div class="bottom-content">
        <span>
          <button class="show-details custom" onclick="showDetails(${index})">Show Details</button>
        </span>

        <div class="settings">
            <i onclick="showSettingsMenu(this)" class="bi-three-dots" data-show-menu></i>
            <ul class="menu">

                <li onclick="updateNote(${index}, '${note.title}', '${note.description}')">
                  <i class="bi-pen"></i>
                  Edit
                </li>

                <li onclick="deleteNote(${index})">
                  <i class="bi-trash"></i>
                  Delete
                </li>

            </ul>
        </div>
    </div>
</li>
`;

    addBox.insertAdjacentHTML("afterend", liTag);
  });
}

function deletAllNotes() {
  localStorage.removeItem("notes");
  window.location.href = window.location.href;
}

showNotes();
