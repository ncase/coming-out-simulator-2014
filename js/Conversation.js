var caption = document.getElementById("caption");

var $ = {}; // Save File

var timer = 0;
function clear(){
	timer = 0;
	caption.innerHTML = "";
}

function Character(name,color){
	color = color || "#fff";
	return function(message){

		var dom = document.createElement("div");
		dom.innerHTML = "<span style='color:"+color+"'><b>"+name+": </b>"+message+"</span>";

		// How long does the message last? Approx 6 words per second, or 160ms per word. Plus 1000ms just in case.
		var duration = 1000 + message.split(" ").length*160;

		// Add & Remove based on time.
		timer += 100;
		setTimeout(function(){ caption.appendChild(dom); },timer);
		timer += duration;
		setTimeout(function(){ caption.removeChild(dom); },timer);

	};
}

function choose(args){

	// Arguments list: Bunch of choices, then callback.
	var callback = arguments[arguments.length-1];
	var choices = Array.prototype.splice.call(arguments,0,arguments.length-1);

	// Create choices
	var dom = document.createElement("div");
	for(var i=0;i<choices.length;i++){
		var button = document.createElement("button");
		button.innerHTML = choices[i];
		button.onclick = (function(number,message){
			return function(){
				clear();
				callback({ number:number, message:message });
			};
		})(i,choices[i]);
		dom.appendChild(button);
	}

	// Finally, add it!
	timer += 100;
	setTimeout(function(){ caption.appendChild(dom); },timer);

};

function scene(image){
	setTimeout(function(){
		document.getElementById("picture").src=image;
	},timer);
}

window.onload = function(){
	Start();
}