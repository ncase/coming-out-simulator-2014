var $ = {};
function Character(character){
	return function(message){
		publish("/say", [character, message]);
	};
}
function Choose(choices){
	publish("/choose", [choices]);
};
function Scene(image){
	publish("/scene", [image]);
}
window.onload = function(){
	Start();
}