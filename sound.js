var audio = new Audio('music/keep-going.mp3');
  audio.play();
  audio.volume = 0.2;
  console.log("the file is loaded");

const element = document.querySelector(".find");

element.addEventListener("click", playMusic);


function playMusic(){
    console.log("Junior you clicked");
    
    if(audio.paused){
        audio.play();
        element.style.animationPlayState = 'running';
        button.innerHTML = "Pause";
      } else {
        audio.pause();
        element.style.animationPlayState = 'paused';
      }
}
