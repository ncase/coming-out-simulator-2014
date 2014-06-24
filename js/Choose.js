var $ = {};

var timer = 0;
var TIMER_GAP = 100;
function getDuration(message){
	// Approx 6 words per second, or 160ms per word. Plus 500ms just in case.
	//return 300;
	return 800 + message.split(" ").length*160;
}

function queue(callback, duration){
	duration = duration || 0;
	timer += TIMER_GAP;
	setTimeout(callback,timer);
	timer += duration;
}

function Character(character){
	return function(message){
		if(!message) return;
		queue(function(){
			publish("/say", [character, message]);
		},getDuration(message));
	};
}

function Choose(choices){
	queue(function(){
		publish("/choose", [choices]);
		timer = 0;
	});
};

function Scene(image){
	queue(function(){
		publish("/scene", [image]);
		timer = 0;
	});
}

function Wait(duration){
	timer += duration;
}

window.onload = function(){
	Start();
}