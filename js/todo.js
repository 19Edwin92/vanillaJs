const toDoForm = document.getElementById("todo_form")
const toDoInput = document.querySelector("#todo_form input")
const toDolist = document.getElementById("todo_lists")

const TODOS_KEY = "toDos"
let toDos = []; //로컬저장소가 새로고침될 때 비어있는 이유는 이곳이 비어있기 때문이다. 
//그런데 이런의 입력분들이 입력되지 않된다는 것이다. 즉 이전의 복사본을 잃어버린다는 것이다. 
//상수를 변수로 변경해 준다. 

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
  //로컬을 지우는 건 있지만, 로컬 저장소를 지우는 것은 존재하지 않는다. 
  console.log(li.id) // 클릭된 li의 id를 가져올 수 있다. 
  li.remove()
  console.log(typeof li.id)
  toDos = toDos.filter(item => item.id !== parseInt(li.id)) // 비교되는 두 개의 자료형이 달라서 동작하지 않을 것이다. 
  saveToDos() //동작이 완료되면, 이를 다시 실행하자. 
}

function paintTodo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id //li의 id 값으로 가져온 랜덤숫자를 부여해주자. 
  const span = document.createElement("span");
  const button = document.createElement("button")
  li.appendChild(span); //li하위 항목으로 span 태그 집어넣기
  span.innerText = newTodo.text; //span 태그 안에 내용 입력하기 
  
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
  const newTodoObj = {
    text:newTodo,
    id:Date.now(),  //현재날짜느 유용한 랜덤 숫자가 될 수 있다. 
  }

  toDos.push(newTodoObj) // 빈객체에 저장을 하는데, 로컬히스토리는 텍스느만 저장 가능하다. 배열은 안된다. 그런데 가능한 방법은 없을까? 
  paintTodo(newTodoObj)
  saveToDos();
}

// function sayHe(item) {
//   console.log("this is turn of", item)
// }


toDoForm.addEventListener("submit", toDoFormfunc);

const saveToDos2 = localStorage.getItem(TODOS_KEY)
// console.log(saveToDos2)
if(saveToDos2!==null) {
  const parsedTodos = JSON.parse(saveToDos2)
  toDos = parsedTodos // 기존의 배열에 새로운 내용을 추가하는 것이다. 
  parsedTodos.forEach(item => paintTodo(item)) //콜백함수를 설정할 수도 있다. 그러나 고차함수를 쓰겠지
}

//문제는 로컬은 지워졌지만, 로컬저장소는 지워지지 않았다는 것이다. 

// 자우는 건 없어 빼고 새 배열을 만드는 것야, filter 가 있지. 지우고 싶은 아이탬 빼고 다 넣는다. 