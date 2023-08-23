const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODO_KEY = "todos";

const toDos = []; // array로 생성

function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos)); // JSON.stringify 객체/배열 -> string
}

function deleteToDo(event) {
  const li = event.target.parentElement; // 지울 타켓
  // console.log(event.target.parentElement);
  li.remove();
}

function paintToDo(newTodo) {
  // 화면에 리스트 만들기
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = newTodo;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span); // li에 span연결
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // 인풋의 현제 벨류를 새로운 변수에 복사
  toDoInput.value = ""; // 입력 후 다시 비워주기
  toDos.push(newTodo); // newToDo를 toDos배열에 push
  paintToDo(newTodo); // 화면에 보여줌
  saveToDos(); // localStorage 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODO_KEY);

// console.log(savedToDos);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // JSON.parse 문자열 -> 객체/배열로 변환
  // console.log(parsedToDos);
  parsedToDos.forEach(paintToDo);
}
