const API_KEY = "c4ea2c3beb5470bdb0d47f9fca8032e2";

function onGeoOk(position) {
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
      city.innerHTML = `<i class="fas fa-earth-asia"></i> ${data.name}`; // 태그와 함께 입력하여 내용을 직접 설정

      weather.classList.add("weather");
      city.classList.add("city");
    });
} // 위치확인
function onGeoError() {
  console.log("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
