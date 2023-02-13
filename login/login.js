const loginForm = document.querySelector('#loginForm');
const loginInput = document.querySelector('#loginForm input');


function onLoginSubmit(tomato) {
  tomato.preventDefault();
  console.log(tomato);
}
loginForm.addEventListener("submit", onLoginSubmit)


const anchorTag = document.querySelector('body a') 
// function onAnchorClick(tomato) {
//   tomato.preventDefault();
// }
// anchorTag.addEventListener("click", onAnchorClick)
 

