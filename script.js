// Allows for audio to be played

// Defines variables
var playBtn = document.getElementById('play'),
  cluck = document.getElementById('cluck')
	audios = document.querySelectorAll('audio');
console.log(audios);

// Plays audio when hovered over
playBtn.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  audio.play();
});
}, false);

// Stops playing audio when no longer hovered over
playBtn.addEventListener('mouseleave', function() {
  cluck.pause();
  cluck.currentTime = 0;
}, false);