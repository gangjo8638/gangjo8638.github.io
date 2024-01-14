const content = "안녕하세요, \n 박강조의 포트폴리오 입니다.";
const text = document.querySelector(".text");
let i = 0;

function typing(){
  /* 무한
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
*/
    if (i < content.length) {
      let txt = content.charAt(i);
      text.innerHTML += txt;
      i++;
      }
}
/*setInterval(typing, 140) //속도 조절*/
// Delay initial execution by 0.5 seconds
setTimeout(() => {
  setInterval(typing, 110);
}, 1000);




/*메뉴바*/
const toggleBtn = document.querySelector('#nav_a');
const menu = document.querySelector('#gnb');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});







//마우스
let mouseCursor = document.querySelector(".cursor");
  let navLinks = document.querySelectorAll("nav .inner #gnb"); //메뉴 링크
  //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
  window.addEventListener("scroll", cursor);
  window.addEventListener("mousemove", cursor);
  //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
  function cursor(e) {
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY - scrollY + "px";
}



/*
//parallax animation
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let link = document.getElementById('link');
let mountains_front = document.getElementById('mountains_front');


window.addEventListener('scroll', function(){
  let value = this.window.scrollY;

  // 스크롤 범위를 0에서 500으로 제한
  if (value >= 0 && value <= 400) {
    //stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    
  }
});
*/

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let link = document.getElementById('link');
let mountains_front = document.getElementById('mountains_front');

window.addEventListener('scroll', function () {
  let value = this.window.scrollY;
 
  // 스크롤 범위를 0에서 400으로 제한하고, 창의 너비가 768px 이상인 경우에만 실행
  if (value >= 0 && value <= 400) {
    
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
  }
  if (value >= 0 && value <= 400 && window.innerWidth >= 769){
    stars.style.left = value * 0.25 + 'px';
  }
});





let mainText = document.querySelector("header #link")

window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 400){
       mainText.style.animation="disappaer 1s ease-out forwards";
    }
    else{
        mainText.style.animation= `slide 1s ease-out forwards`;
    }
})

let mainText1 = document.querySelector("figure .inner3 h2")
let mainText2 = document.querySelector("#solid")

window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 1200){ //없어지기
      mainText1.style.animation="disappaer1 1s ease-out forwards";
      mainText2.style.animation="disappaer2 1s ease-out forwards";
    }
    else if(value < 10){ //등장하기
      mainText1.style.animation= "disappaer1 1s ease-out forwards";
      mainText2.style.animation= "disappaer2 1s ease-out forwards";
    }
    else{
      mainText1.style.animation= `slide1 1s ease-out`;
      mainText2.style.animation= `slide2 1s ease-out`;
    }
})

let mainText3 = document.querySelector("figure .inner3 #pro")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 1400){ //없어지기
      mainText3.style.animation="disappaer3 1s ease-out forwards";
      
    }
    else if(value < 200){ //등장하기
      mainText3.style.animation= "disappaer3 1s ease-out forwards";
      
    }
    else{
      mainText3.style.animation= `slide3 1s ease-out`;
      
    }
})

let mainText4 = document.querySelector("section .inner4 h2")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2100){ //없어지기
      mainText4.style.animation="disappaer4 1s ease-out forwards";
      
    }
    else if(value < 1100){ //등장하기
      mainText4.style.animation= "disappaer4 1s ease-out forwards";
      
    }
    else{
      mainText4.style.animation= `slide4 1s ease-out`;
      
    }
})

let mainText5 = document.querySelector("section .inner4 #solid1")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2100){ //없어지기
      mainText5.style.animation="disappaer5 1s ease-out forwards";
      
    }
    else if(value < 1100){ //등장하기
      mainText5.style.animation= "disappaer5 1s ease-out forwards";
      
    }
    else{
      mainText5.style.animation= `slide5 1s ease-out`;
      
    }
})

let mainText6 = document.querySelector("section .inner4 .publishing")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2100){ //없어지기
      mainText6.style.animation="disappaer6 1s ease-out forwards";
      
    }
    else if(value < 1300){ //등장하기
      mainText6.style.animation= "disappaer6 1s ease-out forwards";
      
    }
    else{
      mainText6.style.animation= `slide6 1s ease-out`;
      
    }
})
let mainText7 = document.querySelector("section .inner4 .Deployment")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2100){ //없어지기
      mainText7.style.animation="disappaer7 1s ease-out forwards";
      
    }
    else if(value < 1300){ //등장하기
      mainText7.style.animation= "disappaer7 1s ease-out forwards";
      
    }
    else{
      mainText7.style.animation= `slide7 1s ease-out`;
      
    }
})

let mainText8 = document.querySelector("section .inner4 .etc")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2100){ //없어지기
      mainText8.style.animation="disappaer8 1s ease-out forwards";
      
    }
    else if(value < 1300){ //등장하기
      mainText8.style.animation= "disappaer8 1s ease-out forwards";
      
    }
    else{
      mainText8.style.animation= `slide8 1s ease-out`;
      
    }
})
