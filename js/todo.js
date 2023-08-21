const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  const li = event.target.parentElement; // 지울 타켓
  // console.log(event.target.parentElement);
  li.remove();
}

function paintToDo(newTodo) {
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
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
