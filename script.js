/*var audio = document.getElementsByTagName("audio")[0];
audio.play();*/

var playBtn = document.getElementById('play'),
  hearbeat = document.getElementById('cluck')
	audios = document.querySelectorAll('audio');
console.log(audios);


playBtn.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
}, false);

playBtn.addEventListener('mouseleave', function() {
  heartbeat.pause();
  heartbeat.currentTime = 0;
}, false);