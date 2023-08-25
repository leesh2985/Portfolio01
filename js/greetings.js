const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const showToDoForm = document.getElementById("todo-form"); // greeting처럼 동작, 변수 겹침

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // 기본 동작 중지
  loginForm.classList.add(HIDDEN_CLASSNAME); // loginForm hidden추가

  const typedUsername = loginInput.value;

  localStorage.setItem(USERNAME_KEY, typedUsername); // 왼쪽 이름, 오른쪽 변수

  paintGreetings(typedUsername);
  paintToDoList();
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);

  // 시간 인사
  const date = new Date();
  const hours = date.getHours();
  let timeGreeting = "Hello";

  if (hours < 12) {
    timeGreeting = "Good morning";
  } else if (hours > 12 && hours < 17) {
    timeGreeting = "Good afternoon";
  } else {
    timeGreeting = "Good night";
  }

  greeting.innerText = `${timeGreeting} ${username}`;

  // 재설정 버튼
  const resetBtn = document.createElement("button");
  resetBtn.classList.add("reset-btn");
  resetBtn.innerText = "❌";
  resetBtn.addEventListener("click", resetForm); // 버튼 클릭 시 resetForm 함수 호출

  greeting.appendChild(resetBtn);
}

function resetForm() {
  loginForm.classList.remove(HIDDEN_CLASSNAME); // login-form의 hidden 클래스 제거
  showToDoForm.classList.add(HIDDEN_CLASSNAME); // todo-form의 hidden 클래스 추가
  greeting.classList.add(HIDDEN_CLASSNAME); // greeting의 hidden 클래스 추가

  // greeting의 텍스트 내용도 숨김 처리
  greeting.innerText = "";

  localStorage.removeItem(USERNAME_KEY); // localStorage에서 저장된 username 제거
  loginInput.value = ""; // login 입력 필드 비우기
}

function paintToDoList() {
  // paintGreetings비슷하게 동작
  showToDoForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
// console.log(savedUsername);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  paintToDoList();
}
