const API_key = d7e966a28716c253c24178f7cec53856

function onGeoOk(position) {
  //성공했다면, 실행해줄 것이고, 사용자의 위치를 줄 것이다.
  const lag = position.coords.latitude
  const lon = position.coords.longitude
  console.log(lag, lon)
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
}

function onGeoError() {
  alert("찾을 수 없어")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
//현재좌표를 찾아준다. 
//getCurrentPosition 두개의 인자가 필요하다. 성공했을 때, 실패했을 때

//  d7e966a28716c253c24178f7cec53856