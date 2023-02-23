const toDoForm = document.getElementById("todo_form")
const toDoInput = document.querySelector("#todo_form input")
const toDolist = document.getElementById("todo_lists")

function paintTodo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button")

  li.appendChild(span); //li하위 항목으로 span 태그 집어넣기
  li.appendChild(button)

  span.innerText = newTodo; //span 태그 안에 내용 입력하기 
  button.innerText = "❌";
  
  toDolist.appendChild(li)
  
}

// 삭제할 수 없고
// 새로고침 하면 전부 사라진다는 점이 문제로 남는다. 
// 삭제하는 버튼을 추가해보자. 
// 개행마다 삭제 버튼을 추가해야 한다. 그런데 버튼은 이벤트가 발생한다는 것을 기억하자. 


function toDoFormfunc(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  console.log(toDoInput.value)  // 변수에 복제
  toDoInput.value = ""; // 원본은 제거
  console.log(newTodo, toDoInput.value) //복제된 원본과, 제거된 원본을 확인해보자. 
  paintTodo(newTodo)
}

toDoForm.addEventListener("submit", toDoFormfunc);