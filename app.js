const h1 = document.querySelector(".hello h1");

function clickEvent() {
  const clickedClass = "clicked"
  if(h1.classList.contains(clickedClass)) {
    h1.className = "";
  } else {
    h1.classList = clickedClass;
  }
}

h1.addEventListener("click", clickEvent);





