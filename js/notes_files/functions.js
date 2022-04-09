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

function fixMonth(m){

    const fixMonthsMonths = [0, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return fixMonthsMonths[m];

}

function fixDay(d){

    const fixDayDays = [0, "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return fixDayDays[d];

}

function addPrefix(n){
    
    switch(n){

        case 1:
            return "1st";
        case 2:
            return "2nd";
        case 3:
            return "3rd";
        case 21:
            return "21st";
        case 22:
            return "22nd";
        case 23:
            return "23rd";
        case 31:
            return "31st";
        default:
            return `${n}th`;

    }

}

function showSettingsMenu(param){

    param.parentElement.classList.add("show");

    document.body.addEventListener("keyup", (e) => {
        if(e.key === "Escape"){
            param.parentElement.classList.remove("show");
        }
    });

    document.addEventListener("click", (e) => {

        if(e.target.tagName != "I" || e.target != param) {
            param.parentElement.classList.remove("show");
        }

    })

}

function deleteNote(noteCount) {

    notes.splice(noteCount, 1);
    localStorage.setItem("notes", JSON.stringify(notes));

    window.location.href = window.location.href;

}

function updateNote(index, title, desc){

    isUpdate = true;
    updateId = index;

    addBox.click();

    titleTag.value = title;
    descTag.value = desc;

}

function showNotes(){

    if(notes.length == 0) return;

    notes.forEach((note, index) => {

        let liTag = `
<li class="note">
    <div class="details">
        <p>${note.title}</p>
        <span>${note.description}</span>
    </div>
    <div class="bottom-content">
        <span>${note.date}</span>

        <div class="settings">
            <i onclick="showSettingsMenu(this)" class="uil uil-ellipsis-h" data-show-menu></i>
            <ul class="menu">

                <li onclick="updateNote(${index}, '${note.title}', '${note.description}')">
                  <i class="uil uil-pen"></i>
                  Edit
                </li>

                <li onclick="deleteNote(${index})">
                  <i class="uil uil-trash"></i>
                  Delete
                </li>

            </ul>
        </div>
    </div>
</li>
`

        addBox.insertAdjacentHTML("afterend", liTag);

    });

};

function deletAllNotes(){
 localStorage.removeItem("notes");
 window.location.href = window.location.href;
}

showNotes();