const h1 = document.querySelector(".hello h1");

function clickEvent() {
  if(h1.className === "active") {
    h1.className = "";
  } else {
    h1.className = "active"
  }
}

h1.addEventListener("click", clickEvent);





