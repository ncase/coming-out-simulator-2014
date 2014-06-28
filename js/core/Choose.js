var $ = {};

////////////

window.requestAnimationFrame = window.requestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.msRequestAnimationFrame;

var lastTimestep = null;
var ticker = 0;
function step(timestamp) {

	// Tick!
	publish("tick",[]);
	
	// Do the next thing in the queue
	if(_queue.length>0){
		ticker += 1000/60; // HARD CODED. So it pauses when you're away.
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

function skipStep(){
	if(_queue.length>0){
		var item = _queue.shift();
		item.callback();
		ticker = item.time;
	}
}

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
function queue(callback, duration, instantaneous){
	duration = duration || 0;
	if(!instantaneous){
		timer += TIMER_GAP;
	}
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
			publish("say", [character, message]);
		},getDuration(message));
	};
}

function Choose(choices){
	queue(function(){
		publish("choose", [choices]);
		resetTimer();
	});
};

function Scene(options){
	queue(function(){
		publish("scene", [options]);
	});
}

function Show(){
	var args = arguments;
	queue(function(){
		publish("show", args);
	},0,true);
}

function Wait(duration){
	queue(function(){},duration);
}

var _artPromises = [];
var _stills = {};
var _sprites = {};

function _promiseLoadImage(src){
	var deferred = Q.defer();
	var img = new Image();
	img.onload = function(){
		setTimeout(function(){
			deferred.resolve();
		},1000);
	};
	img.src = src;
	_artPromises.push(deferred.promise);
}

function Still(label,src){
	var img = new Image();
	img.src = src;
	_promiseLoadImage(src);
	_stills[label] = img;
}
function Background(label,src){
	Still(label,src);
}
function Sprite(label,options){
	_promiseLoadImage(options.src);
	_sprites[label] = options;
}
