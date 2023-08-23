const clock = document.querySelector("h2#clock");
const days = document.querySelector("span#days");
const week = document.querySelector("span#week");

function getClock() {
  const now = new Date();
  const day = now.getDay();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const weeks = ["일", "월", "화", "수", "목", "금", "토"];

  const dayOfWeek = weeks[day];

  days.innerText = `${year}.${month}.${date}`;
  week.innerText = `${dayOfWeek}요일`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  // clock.innerText = new Date().toLocaleTimeString("en-US", { hour12: false }); // 단순화
  // clock.innerText = new Date().toLocaleTimeString(); // 오후 12시간버전
}

getClock();
setInterval(getClock, 1000);
