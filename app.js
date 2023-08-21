const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(); // 기본 동작 중지
  loginForm.classList.add(HIDDEN_CLASSNAME); // loginForm hidden추가

  const username = loginInput.value;

  localStorage.setItem("username", username); // 왼쪽 이름, 오른쪽 변수

  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
