// click on the card to open and play the music.
// music source: (free music) youtube audio library - Jingle Bells (by Jingle Punks).
// tested in the Firefox browser.

let input = document.getElementById("open");
let audio = document.getElementById("player");

input.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
    audio.currentTime = 0;
    input.innerHTML = "Pause";
  } else {
    audio.pause();
    input.innerHTML = "Play";
  }
});