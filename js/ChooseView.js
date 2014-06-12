var dialogueDOM = document.getElementById("dialogue");
var choicesDOM = document.getElementById("choices");

var timer = 0;

subscribe("/say", function(character, message){

	var dom = document.createElement("div");
	dom.setAttribute("class",character.align);
	dom.innerHTML = message;

	// How long does the message last? Approx 6 words per second, or 160ms per word. Plus 1000ms just in case.
	var duration = 1000 + message.split(" ").length*160;

	// Add based on time.
	timer += 100;
	setTimeout(function(){ dialogueDOM.appendChild(dom); },timer);
	timer += duration;

});

subscribe("/choose", function(choices){

	// Choice labels
	var labels = Object.keys(choices);

	// Create choices
	var buttons = [];
	for(var i=0;i<labels.length;i++){
		var label = labels[i];
		var button = document.createElement("div");
		button.innerHTML = label;
		button.onclick = (function(callback,message){
			return function(){
				timer = 0;
				choicesDOM.innerHTML = "";
				callback(message);
			};
		})(choices[label], label);
		buttons.push(button);
	}

	// Finally, add it!
	timer += 100;
	setTimeout(function(){
		for(var i=0;i<buttons.length;i++){
			choicesDOM.appendChild(buttons[i]);
		}
	},timer);

});

subscribe("/scene", function(image){
});