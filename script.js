// Allows for audio to be played

var playBtn = document.getElementById('play'),
  cluck = document.getElementById('cluck')
	audios = document.querySelectorAll('audio');
console.log(audios);


playBtn.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
}, false);

playBtn.addEventListener('mouseleave', function() {
  cluck.pause();
  cluck.currentTime = 0;
}, false);