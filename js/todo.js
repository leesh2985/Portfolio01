const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODO_KEY = "todos";

let toDos = []; // 빈array로 생성

function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos)); // JSON.stringify 객체/배열 -> string
}

function deleteToDo(event) {
  const li = event.target.parentElement; // 지울 타켓
  // console.log(event.target.parentElement);
  li.remove();
  // console.log(li.id);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // parseInt -> 문자를 숫자로
  // toDo.id와 클릭한 할 일 항목의 ID(li.id)가 다른 경우만 유지
  saveToDos();
}

function toggleDone(event) {
  const li = event.target.parentElement; // 클릭한 리스트

  // toDos 배열에서 해당 ID의 할 일 항목 찾기
  const todo = toDos.find((item) => item.id === parseInt(li.id));

  if (todo) {
    // 해당 ID의 할 일 항목이 존재하면 상태 변경
    todo.done = !todo.done; // done 상태를 토글

    // done 상태에 따라 표시할 내용 설정
    if (todo.done) {
      event.target.innerText = "❗";
      li.querySelector("span").style.textDecoration = "line-through"; // 줄긋기
    } else {
      event.target.innerText = "❔"; // ❔로 변경
      li.querySelector("span").style.textDecoration = "none"; // 줄긋기 제거
    }

    saveToDos(); // 변경된 상태를 저장
  }
}

function toggleEmend(event) {
  const li = event.target.parentElement; // 클릭한 리스트

  const spanText = li.querySelector(".spanText");
  const emendBtn = li.querySelector(".emend-btn");

  spanText.contentEditable = true; // 편집 가능한 상태로 변경
  spanText.focus(); // 포커스 설정
  emendBtn.innerText = "🔧"; // 수정 완료 표시

  // 수정 완료 버튼 클릭 시
  emendBtn.removeEventListener("click", toggleEmend);
  emendBtn.addEventListener("click", toggleEmendDone);
}

function toggleEmendDone(event) {
  const li = event.target.parentElement; // 클릭한 리스트

  const spanText = li.querySelector(".spanText");
  const emendBtn = li.querySelector(".emend-btn");

  spanText.contentEditable = false; // 편집 불가능한 상태로 변경
  emendBtn.innerText = "🔧"; // 수정 버튼으로 변경

  const todo = toDos.find((item) => item.id === parseInt(li.id));
  if (todo) {
    todo.text = spanText.innerText; // 수정된 내용 저장
    saveToDos(); // 변경된 상태 저장
  }

  // 수정 버튼 클릭 시
  emendBtn.removeEventListener("click", toggleEmendDone);
  emendBtn.addEventListener("click", toggleEmend);
}

function paintToDo(newTodo) {
  // 화면에 리스트 만들기
  const List = document.createElement("li");
  List.classList.add("Lists");
  List.id = newTodo.id; // id추가

  const spanText = document.createElement("span");
  spanText.classList.add("spanText");
  spanText.innerText = newTodo.text;

  const doneBtn = document.createElement("button");
  doneBtn.innerText = newTodo.done ? "❗" : "❔"; // done 상태에 따라 표시 내용 설정
  doneBtn.classList.add("done-btn");
  doneBtn.addEventListener("click", toggleDone);

  const emendBtn = document.createElement("button");
  emendBtn.classList.add("emend-btn");
  emendBtn.innerText = "🔧";
  emendBtn.addEventListener("click", toggleEmend);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", deleteToDo);

  List.appendChild(doneBtn);
  List.appendChild(spanText); // li에 span연결
  List.appendChild(emendBtn);
  List.appendChild(deleteBtn);

  if (newTodo.done) {
    spanText.style.textDecoration = "line-through"; // 새로고침해도 유지
  }

  toDoList.appendChild(List);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // 인풋의 현제 벨류를 새로운 변수에 복사
  toDoInput.value = ""; // 입력 후 다시 비워주기
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObj); // newToDo를 toDos배열에 push
  paintToDo(newTodoObj); // 화면에 보여줌
  saveToDos(); // localStorage 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODO_KEY);

// console.log(savedToDos);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // JSON.parse 문자열 -> 객체/배열로 변환
  // console.log(parsedToDos);

  toDos = parsedToDos; // 이전에 있는 기록에서 추가적으로 생기게 하기
  parsedToDos.forEach(paintToDo);
}
