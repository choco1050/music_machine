//playground.js
Router.route('/',function() {
	this.render('playground', {
		to:"playground"
	})
});
acontext = new AudioContext;  

//Now we can create an instance of our waveform generator and play it.

waveform = new Synth(acontext);
maxim1 = new Maxim();
maxim2 = new Maxim();
maxim3 = new Maxim();
maxim4 = new Maxim();
maxim5 = new Maxim();
maxim6 = new Maxim();
maxim7 = new Maxim();
maxim8 = new Maxim();
player1 = maxim1.loadFile("drums1.mp3");
player1.loop
player2 = maxim2.loadFile("cello2.mp3");
player2.loop
player3 = maxim3.loadFile("arp.mp3");
player3.loop
player4 = maxim4.loadFile("piano.mp3");
player4.loop
player5 = maxim5.loadFile("violin.mp3");
player5.loop
player6 = maxim6.loadFile("flute.mp3");
player6.loop
player7 = maxim7.loadFile("viola.mp3");
player7.loop
player8 = maxim8.loadFile("xylophone.mp3");
player8.loop

playDrums = function(){
	player1.volume(1);
	//$("#t1").text("Playing");
}

stopDrums = function(){
	player1.volume(0);
	//$("#t1").text("Track 1");
}

playBass = function(){
	player2.volume(1);
	//$("#t2").text("Playing");
}

stopBass = function(){
	player2.volume(0);
	//$("#t2").text("Track 2");
}

playArp = function(){
	player3.volume(1);
	//$("#t3").text("Playing");
}

stopArp = function(){
	player3.volume(0);
	//$("#t3").text("Track 3");
}
playPiano = function(){
	player4.volume(1);
	//$("#t4").text("Playing");
}
stopPiano = function(){
	player4.volume(0);
	//$("#t4").text("Track 4");
}
playViolin = function(){
	player5.volume(1);
	//$("#t5").text("Playing");
}
stopViolin = function(){
	player5.volume(0);
	//$("#t5").text("Track 5");
}
playFlute = function(){
	player6.volume(1);
	//$("#t6").text("Playing");
}
stopFlute = function(){
	player6.volume(0);
	//$("#t6").text("Track 6");
}
playViola = function(){
	player7.volume(1);
	//$("#t7").text("Playing");
}
stopViola = function(){
	player7.volume(0);
	//$("#t7").text("Track 7");
}
playXylophone = function(){
	player8.volume(1);
	//$("#t8").text("Playing");
}
stopXylophone = function(){
	player8.volume(0);
	//$("#t8").text("Track 8");
}
playAll = function() {

	player1.play();
	player2.play(); 
	player3.play(); 
	player4.play(); 
	player5.play(); 
	player6.play(); 
	player7.play(); 
	player8.play(); 
}

stopAll = function() {
	player1.stop();
	player2.stop();
	player3.stop();
	player4.stop();
	player5.stop();
	player6.stop();
	player7.stop();
	player8.stop();
}

allPlaying = function() {
	player1.isPlaying();
	player2.isPlaying();
	player3.isPlaying();
	player4.isPlaying();
	player5.isPlaying();
	player6.isPlaying();
	player7.isPlaying();
	player8.isPlaying();
}

setSpeed1 = function(speed) {

	player1.speed(speed);

}
setSpeed2 = function(speed) {

	player2.speed(speed);

}
setSpeed3 = function(speed) {

	player3.speed(speed);

}
setSpeed4 = function(speed) {

	player4.speed(speed);

}
setSpeed5 = function(speed) {

	player5.speed(speed);

}
setSpeed6 = function(speed) {

	player6.speed(speed);

}
setSpeed7 = function(speed) {

	player7.speed(speed);

}
setSpeed8 = function(speed) {

	player8.speed(speed);

}
setAmp1 = function(freq) {
	player1.ramp(freq,10000);
}
setAmp2 = function(freq) {
	player2.ramp(freq,10000);
}
setAmp3 = function(freq) {
	player3.ramp(freq,10000);
}
setAmp4 = function(freq) {
	player4.ramp(freq,10000);
}
setAmp5 = function(freq) {
	player5.ramp(freq,10000);
}
setAmp6 = function(freq) {
	player6.ramp(freq,10000);
}
setAmp7 = function(freq) {
	player7.ramp(freq,10000);
}
setAmp8 = function(freq) {
	player8.ramp(freq,10000);
}



