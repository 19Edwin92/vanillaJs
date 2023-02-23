const img = [ "wallpaper01.jpeg", "wallpaper02.jpeg", "wallpaper03.jpeg"]
const choseImg = img[parseInt(Math.random()*img.length)]

// 이미지 태그에 해당 이미지를 넣어보자. 

const bgImg = document.createElement("img");
bgImg.src = `/img/${choseImg}` //태그를 만들고, 속성값을 이렇게 넣어줄 수도 있다는 말이다. 중요한 것은 백틱을 써야 한다. 

document.body.appendChild(bgImg) //appendChild 생성한 태그를 body 태그에 추가할 수 있다. 
// appendChild 아래에 생성
// prepend 상단에 생성된다. 