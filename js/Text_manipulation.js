const textarea1 = document.getElementById("text-counter-textarea");

const checkb1 = document.querySelector(".text-counter-check");

let word_count_1;

const show_text_count_1 = document.querySelector(".act");


function ref_time_1() {
    setInterval("showCount_1()", 1500)
}

function showCount_1() {

    if (checkb1.checked) {
        word_count_1 = textarea1.value.length;
    } else if (!checkb1.checked) {
        word_count_1 = textarea1.value.replace(/ /g, "").length;
    }
    show_text_count_1.innerText = word_count_1;
    ref_time_1();
}

showCount_1();