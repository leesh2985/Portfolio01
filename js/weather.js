function onGeoOk(position) {
  const lat = position.coords.latitude; // 위도
  const lng = position.coords.longitude; // 경도
  console.log("you live in", lat, lng);
} // 위치확인
function onGeoError() {
  console.log("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
