const toDoForm = document.getElementById("todo_form")
const toDoInput = document.querySelector("#todo_form input")
const toDolist = document.getElementById("todo_lists")

const toDos = [];

function saveToDos(){
  localStorage.setItem("toDos", JSON.stringify(toDos)) // 배열을 넣기 위해서 JSON 인코딩을 활용하였다. 그대로 넣어줄 수 있지!! 맞네 까묵었다. 이렇게 쓰는 구나. 
}

function deleteTodo(event) {
  //그런데 어떤 내용을 삭제해야 하는지 제공되지 않아. 그게 문제야, 그러기 위해 필요한 것이 매개변수야 
  // console.dir(event.target.parentElement.innerText)
  //dir을 통해서 세부정보를 찾아갈 수 잇다. event.target의 세부 정보를 이용해서 클릭된 HTML Element를 찾아간다. 
  //parentElement 부모태그가 무엇이고
  //innerText 해당 텍스트에는 어떤 내용이 기록되어 있는지 말이다. 
  //이걸로 정보를 알아갈 수 있다. 
  const li = event.target.parentElement;
  li.remove()

}

function paintTodo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button")
  li.appendChild(span); //li하위 항목으로 span 태그 집어넣기
  span.innerText = newTodo; //span 태그 안에 내용 입력하기 
  
  li.appendChild(button)
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo)
  toDolist.appendChild(li)
  
  
}



// 삭제할 수 없고
// 새로고침 하면 전부 사라진다는 점이 문제로 남는다. 
// 삭제하는 버튼을 추가해보자. 
// 개행마다 삭제 버튼을 추가해야 한다. 그런데 버튼은 이벤트가 발생한다는 것을 기억하자. 


function toDoFormfunc(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  // console.log(toDoInput.value)  // 변수에 복제
  toDoInput.value = ""; // 원본은 제거
  // console.log(newTodo, toDoInput.value) //복제된 원본과, 제거된 원본을 확인해보자. 
  toDos.push(newTodo) // 빈객체에 저장을 하는데, 로컬히스토리는 텍스느만 저장 가능하다. 배열은 안된다. 그런데 가능한 방법은 없을까? 
  paintTodo(newTodo)
  saveToDos();
}

toDoForm.addEventListener("submit", toDoFormfunc);