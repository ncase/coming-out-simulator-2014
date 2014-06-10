n = new Character("you");
m = new Character("other");

function Start(){

	n("I'm gonna study at Jon's tomorrow.");
	m("Really.");
	m("You spend a lot of time with him.");

	choose("Actually, he's... more than a friend.",function(){
	});
	choose("Well yeah, that's what good pals do.",function(){
	});
	choose("He's just a study buddy, that's all.",function(){
	});

}