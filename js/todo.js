const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // 인풋의 현제 벨류를 새로운 변수에 복사

  console.log(toDoInput.value);

  toDoInput.value = ""; // 입력 후 다시 비워주기
  console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
