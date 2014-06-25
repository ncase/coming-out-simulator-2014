// is short
// What ARE you. Fake crying, and don't tell your dad
// Weave it

function Start_Dinner_4(){

	m(". . .");
	m("This is all my fault...");
	m("I told you to be careful around those kinds of people, but I told you too late.");
	m("[sob]");
	m("Oh Nick! My poor baby!");

	Choose({
		"Mom... please don't cry...": n,
		"Quit your fake crying.": n,
		"[cry]": Cry_3
	});

}

function Cry_1(message){
	n(message);
	m("huu... huu... huu...");
	n("I'm sorry. About Jack, the lies, everything.");
	m("owww... owww...");
	n("I take it all back.");
	m("sniff...");
	n("...please...");
}

function Cry_2(message){
	n(message);
	m("huu... huu... huu...");
	n("Seriously, it is SO fake.");
	m("owww... owww...");
	n("Will you shut up?!");
	m("sniff...");
	n("SHUT. UP.");
}

function Cry_3(message){
	n("BAWWWWW");
	m("huu... huu... huu...");
	n("WAH WAH WAH WAH WAHHH");
	m("owww... owww...");
	n("BRRrrRR-BRR-BRbR BWAH BWAHRR rrrRRR-WaahHH WO WO WO RaaahhH");
	m("sniff...");
	n("Okay, we done?");
}

function What_Are_You(message){
	m(". . .");
	m("Nick... what are you?");
	n("Excuse me?");
	m("What do you think you are?");

	Choose({
		"I'm just a bit confused.": function(message){
			n(message);
		},
		"I know I'm bisexual.": function(message){
			n(message);
			if($.admit_bisexuality){
				m("...and you said that means...");
			}
			n("Sexually attracted to both men and women.");
		},
		"I'm your son.": function(message){
			n(message);
			n(". . .");
			n("Isn't that enough?");
			Father_Soon();
		}
	});
}

function Father_Soon(){
	m(". . .");
	m("Your father should be back soon.");
}

