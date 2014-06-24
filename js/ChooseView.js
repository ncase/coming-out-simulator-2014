var gameDOM = document.getElementById("game");
var dialogueDOM = document.getElementById("dialogue");
var dialogueDOMOffset = 20;
var choicesDOM = document.getElementById("choices");
var backgroundDOM = document.getElementById("background");

subscribe("/say", function(character, message){

	// Add dialogue bubble
	var dom = document.createElement("div");
	dom.setAttribute("class",character.align);
	dom.innerHTML = message;
	dialogueDOM.appendChild(dom);

	// Fade in
	setTimeout(function(){
		dom.style.opacity = 1;
	},1);

	// If dialogue bubbles are too big, scroll it.
	var maxDialogueSpace = game.clientHeight-(260+120); // Game height - (image height + choice height)
	if(dialogueDOM.clientHeight+dialogueDOMOffset > maxDialogueSpace){
		dialogueDOMOffset = maxDialogueSpace - dialogueDOM.clientHeight;
		dialogueDOM.style.top = dialogueDOMOffset+"px";
	}

});

subscribe("/choose", function(choices){

	// Choice labels
	var labels = Object.keys(choices);

	// Create choices
	for(var i=0;i<labels.length;i++){
		var label = labels[i];
		var button = document.createElement("div");
		button.innerHTML = label;
		button.onclick = (function(callback,message){
			return function(){
				choicesDOM.innerHTML = "";
				callback(message);
			};
		})(choices[label], label);
		choicesDOM.appendChild(button);
	}

});

subscribe("/scene", function(image){
	backgroundDOM.style.backgroundImage = "url("+image+")";
	dialogueDOM.innerHTML = "";
	dialogueDOM.style.top = "20px";
});