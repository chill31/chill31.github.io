const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const closeIcon = popupBox.querySelector("header i");
const addBtn = popupBox.querySelector("button");
const titleTag = popupBox.querySelector("input");
const descTag = popupBox.querySelector("textarea");

const deleteAllBtn = document.querySelector(".delete-all");

addBox.addEventListener("click", () => {

    if (notes.length == 10) { alert("You have reached the limits of notes for this website."); return; };

    popupBox.classList.add("show");

});

closeIcon.addEventListener("click", () => {

    hidePopup();

});
document.body.addEventListener("keyup", (e) => {

    if(e.key == "Escape"){
        hidePopup();
    }

});

const notes = JSON.parse(localStorage.getItem("notes")) ?? [];
let isUpdate = false, updateId;

addBtn.addEventListener("click", (e) => {

    e.preventDefault();

    let noteTitle = titleTag.value;
    let noteDesc = descTag.value;

    if(!noteTitle){ err("t"); return; }
    if(!noteDesc){ err(); return; }

    let creationDate = new Date();
    const dateYear = creationDate.getFullYear();
    const dateMonth = creationDate.getMonth();
    const dateDay = creationDate.getDay();
    const dateDate = creationDate.getDate();
    const dateHour = creationDate.getHours();
    const dateMinute = creationDate.getMinutes();
    const dateSeconds = creationDate.getSeconds();

    const formattedDate = `${fixMonth(dateMonth)} ${addPrefix(dateDate)} (${fixDay(dateDay)}), ${dateHour}:${dateMinute}:${dateSeconds}, Year ${dateYear}`;

    let noteInfo = {
      title: noteTitle,
      description: noteDesc,
      date: formattedDate
    };

    if(!isUpdate){

    notes.push(noteInfo);

    localStorage.setItem("notes", JSON.stringify(notes));    

    hidePopup();
    e.target.parentElement.reset();

    window.location.href = window.location.href;

    } else if(isUpdate){

      notes[updateId] = noteInfo;
      hidePopup();
      e.target.parentElement.reset();

      localStorage.setItem("notes", JSON.stringify(notes));

      window.location.href = window.location.href;

    }
});

deleteAllBtn.addEventListener("click", () => {

  deletAllNotes();

});