const clock = document.querySelector('h2#clock')

function sayhello() {
  const currentTime = new Date()
  const currentHours = currentTime.getHours() < 10 ? "0"+currentTime.getHours() : String(currentTime.getHours())
  const currentminutes = currentTime.getMinutes() < 10 ? "0"+currentTime.getMinutes() : String(currentTime.getMinutes())
  const currentseconds = currentTime.getSeconds() < 10 ? "0"+currentTime.getSeconds() : String(currentTime.getSeconds())
  //그런데 다른 방법이 있으니, padStar(자릿수, "0" 모자른 곳에 넣을 숫자??) 앞에 자리를 채우는 거야 
  //그런데 다른 방법이 있으니, padEnd(자릿수, "0" 모자른 곳에 넣을 숫자??) 뒤에 자리를 채우는 거고
  const currentHours2 = String(currentTime.getHours()).padStart(2,"0")
  const currentminutes2 = String(currentTime.getMinutes()).padStart(2,"0")
  const currentseconds2 = String(currentTime.getSeconds()).padStart(2,"0")
  
  clock.innerText = currentHours<12 ? `오전 ${currentHours2}:${currentminutes2}:${currentseconds2}` :`오후 ${currentHours2}:${currentminutes2}:${currentseconds2}` 

}

// setInterval(함수명, 몇초단위) 에 대해서 다뤄보자.  매초마다 반복되어 실행되게 만들 수 있어
setInterval(sayhello, 1000)

//settimeout(함수명, 몇초단위) 한번만 실행되고 끝나. 
