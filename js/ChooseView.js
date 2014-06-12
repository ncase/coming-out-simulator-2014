var dialogueDOM = document.getElementById("dialogue");
var choicesDOM = document.getElementById("choices");

subscribe("/say", function(character, message){
	var dom = document.createElement("div");
	dom.setAttribute("class",character.align);
	dom.innerHTML = message;
	dialogueDOM.appendChild(dom);
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
				publish("/choose/done", [message]);
				choicesDOM.innerHTML = "";
				callback(message);
			};
		})(choices[label], label);
		choicesDOM.appendChild(button);
	}

});

subscribe("/scene", function(image){
});