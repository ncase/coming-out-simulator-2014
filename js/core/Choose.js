window.onload = function(){
	Start_Jack_1();
}

////////////

var $ = {};

////////////

window.requestAnimationFrame = window.requestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.msRequestAnimationFrame;

var lastTimestep = null;
var ticker = 0;
function step(timestamp) {

	// Timestep distance
	if(lastTimestep===null) lastTimestep=timestamp;
	var delta = timestamp-lastTimestep;
	lastTimestep=timestamp;
	
	// Do the next thing in the queue
	if(_queue.length>0){
		ticker += delta;
		if(ticker > _queue[0].time){
			var item = _queue.shift();
			item.callback();
		}
	}

	requestAnimationFrame(step);
}
requestAnimationFrame(step);

////////////

var timer = 0;
var ticker = 0;

function resetTimer(){
	timer = 0;
	ticker = 0;
}

var TIMER_GAP = 100;
function getDuration(message){
	// Approx 6 words per second, or 160ms per word. Plus 500ms just in case.
	//return 300;
	return 800 + message.split(" ").length*160;
}

var _queue = [];
function queue(callback, duration){
	duration = duration || 0;
	timer += TIMER_GAP;
	_queue.push({
		callback: callback,
		time: timer
	});
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
		resetTimer();
	});
};

function Scene(image){
	queue(function(){
		publish("/scene", [image]);
		resetTimer();
	});
}

function Wait(duration){
	timer += duration;
}