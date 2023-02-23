const loginForm = document.querySelector('#loginForm');
const loginInput = document.querySelector('#loginForm input');


function onLoginSubmit(tomato) {
  tomato.preventDefault();
  console.log(tomato);
  const username = loginInput.value;
  loginForm.classList.add("hidden")
  // .add 클래스를 추가해 준다. 
  document.querySelector('h1[class="hidden"]').classList.remove('hidden')
}

loginForm.addEventListener("submit", onLoginSubmit)


const anchorTag = document.querySelector('body a') 
// function onAnchorClick(tomato) {
//   tomato.preventDefault();
// }
// anchorTag.addEventListener("click", onAnchorClick)
 

