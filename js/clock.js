const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  // clock.innerText = new Date().toLocaleTimeString("en-US", { hour12: false }); // 단순화
  // clock.innerText = new Date().toLocaleTimeString(); // 오후 12시간버전
}

getClock();
setInterval(getClock, 1000);
