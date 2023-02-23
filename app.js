const h1 = document.querySelector(".hello h1");

function clickEvent() {
  const clickedClass = "clicked"
  if(h1.classList.contains(clickedClass)) {
    h1.className = "";
  } else {
    h1.classList = clickedClass;
  }
}  h1.addEventListener("click", clickEvent);




// const loginForm = document.querySelector('#login-form');
// const loginInput = loginForm.querySelector("input");
// const loginbutton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input")
const loginForm = document.querySelector("#login-form");
const links = document.querySelector("a")
const h1tag = document.querySelector("#greeting")
const logout = document.querySelector('.logout');

// function loginbuttonaction() {
  //유저의 유효성 
  // const userName = loginInput.value;
  // //유저 이름이 비어있을 때 
  // if (userName === "") {
  //   alert("please write your name")
  // //유저 이름이 지나치게 길 때 
  // } else if(userName.length > 15) {
  //   alert("Your name is too long")
  // }
  // //지금방법도 유용하지만, 브라우저의 기능을 활용할 수 있다. 이미 가지고 있다면 최고의 기능을 사용하는 것이 유용할 것이다. 
  //form 태그이고, input의 놀라운 기능을 사용할 수 있게 된다. 

// }


//작동하면 슁 지나갈꺼야, 왜냐하면 기본 기능 때문이자. 
//이제는 기본 동작을 막을 필요가 있어 

const HIDDEN_CLASSNAME = "hidden" // 여기서 대문자를 사용하는 것은 관행이래

function onLoginSubumit(event) { //event로 매개변수를 적는 것이 일반이다. 
  event.preventDefault(); //기본 기능을 무력화 하는 preventDefault
  const userName = loginInput.value //function에 대한 많은 정보들을 여기서 보면 얻고 있는 것을 볼 수 있다. 
  loginForm.classList.add(HIDDEN_CLASSNAME) //CSS에서 만들어 놓은 선택자를 통해서 HTML의 form 태그를 숨길 수 있다. 어떻게? class 이름을 추가하면서 말이다. 
  console.log(userName)
  paintGreetin(userName)
  localStorage.setItem("username", userName)
}
//정보를 받아올 수 있고, 공간을 숨길 수 있다는 것을 의미하기도 해 
// localStorage.setItem 을 통해서 로컬히스토리에 저장되어 있다. 
// 그런데 새로고침하면, 오야! 유저네임이 있으면 유지하고 싶은데 form 태그가 또 등장한다.
// 일단 둘 다 숨겨두자.  

function paintGreetin(userName) {
  h1tag.classList.remove(HIDDEN_CLASSNAME)
  logout.classList.remove(HIDDEN_CLASSNAME)
  h1tag.innerText = `안녕 ${userName}`
}


const savedUsername = localStorage.getItem("username")

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubumit);
} else{
  //savedUsername 로컬스토리지에 만약 유저 정보가 있다면, 해당 내용을 아래와 같이 보여줄 것이다. 
  //이를 통해서 새로고침을 해도 로컬스토리지가 간직하고 있는 것을 보게 된다.
  paintGreetin(savedUsername)
}


function hrefDefense(event) {
  event.preventDefault();
  console.dir(event)// 사용자가 어디를 클릭했는지 정보를 확인할 수도 있다. 유저가 어디를 클릭했는지 말이다. 그런데 MouseEnvent가 아니라 PointEvent까 떴다는 것인데. 
  // alert("click") // alert은 우선 실행대상이기에 클릭하면 이동하지 않지만, 그 다음에는 넘어가게 될 것이야
}

links.addEventListener("click", hrefDefense)

// 자 이번에는 이름이 제출되면, Form이 사라지게 해보자. 
// 자 이번엔 이름을 저장해 보자. 
// 뭔가를 저장하는 건 자주 사용되는 기능이야. 
// 예를 들어서 음량을 조절하는 것 등이야. 


// 기억하기 API 
// 브라우저는 로컬스토리지 
//로그아웃

logout.addEventListener("click", checkout)
function checkout(event) {
  localStorage.removeItem("username")
  window.location.reload()
}