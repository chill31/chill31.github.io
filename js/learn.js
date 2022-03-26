function redirectProc() {

  const inp = document.querySelector("#input_forproj");

  if (inp.value.toString().toLowerCase() == "html") {
    redirect("learn/html/Basic.html");
  } else if (inp.value.toString().toLowerCase() == "css") {
    redirect("learn/css/Basic.html");
  } else if (inp.value.toString().toLowerCase() == "playground") {
    redirect("learn/Playground.html");
  } else {
    notify("Please enter a valid input ( HTMl, CSS or Playground )", "error");
  }

}