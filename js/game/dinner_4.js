// is short
// What ARE you. Fake crying, and don't tell your dad
// Weave it

function Start_Dinner_4(){

	n(". . .");
	m("It's because your dad's almost never home, isn't it?");
	m("Without a strong male role model, you become confused...");

	Choose({
		"Yeah, coz Dad's SUCH a great role model.": function(message){
			n(message);
			m("Nick, no matter what, he's your father. You should love him.");
			My_Fault();
		},
		"That's not how it works. I'd be bi anyway.": function(message){
			n(message);
			m("How do you know?! Are you an expert in psychology?!");
			My_Fault();
		},
		"You know what? Maybe you're right.": function(message){
			n(message);
			m("I know...");
			My_Fault();
		}
	});

}

function My_Fault(){
	
	Show("clock_time","clock_1930");

	n(". . .");
	m("This is all my fault...");
	m("I told you to be careful around those kinds of people, but I told you too late...");

	Show("mom","mom_cry");

	m("[sob]");
	m("Oh Nick! My poor baby!");

	Show("nicky","dinner_nicky_sit");

	Choose({
		"Mom... please don't cry...": Cry_1,
		"Quit your fake crying.": Cry_2,
		"[cry]": Cry_3
	});
}

function Cry_1(message){

	$.crying = "sympathy";

	n(message);
	m("huu... huu... huu...");
	n("I'm sorry. About Jack, the lies, everything.");
	m("owww... owww...");
	n("I take it all back.");
	m("sniff...");
	n("...please...");
	What_Are_You();
}

function Cry_2(message){

	$.crying = "anger";
	Show("nicky","dinner_nicky_defiant");

	n(message);
	m("huu... huu... huu...");
	n("Seriously, it is SO fake.");
	m("owww... owww...");
	n("Will you shut up?!");
	m("sniff...");
	n("SHUT. UP.");
	What_Are_You();

}

function Cry_3(message){

	$.crying = "mocking";
	Show("nicky","dinner_nicky_outrage");

	n("BAWWWWW");
	m("huu... huu... huu...");
	n("WAH WAH WAH WAH WAHHH");
	m("owww... owww...");
	n("BRRrrRR-BRR-BRbR BWAH BWAHRR rrrRRR-WaahHH WO WO WO RaaahhH");
	m("sniff...");

	Show("nicky","dinner_nicky_defiant");
	n("Okay, we done?");
	What_Are_You();

}

function What_Are_You(){

	m(". . .");
	m("Nick... what are you?");
	n("Excuse me?");

	Show("nicky","dinner_nicky_sit");

	Show("mom","mom_sit");
	m("What <i>are</i> you?");

	Choose({
		"I'm bisexual.": function(message){

			$.what_are_you = "bisexual";

			n(message);
			if($.admit_bisexuality){
				m("...and you said that means...");
			}
			n("Sexually attracted to both men and women.");
			m("You can't be both.")
			m("You have to pick one.");
			n("That's... not how it works. At all.");
			Have_You_Had_Sex();

		},
		"I'm just confused.": function(message){

			$.what_are_you = "confused";

			n(message);
			m("...I know.");
			m("I'm sorry Jack confused you.");
			m("You're just going through a phase, it's okay.");
			n(". . .");
			m("It's okay. It's okay...");
			Have_You_Had_Sex();

		},
		"I'm your son, dammit.": function(message){

			$.what_are_you = "son";

			n(message);
			n(". . .");
			n("Isn't that enough?");
			Have_You_Had_Sex();

		}
	});
}

function Have_You_Had_Sex(){
	m(". . .");
	m("Did you have sex with Jack.");
	Choose({
		"Yes.": function(message){
			n(message);
			m("[DRY HEAVE]");
			Have_You_Had_Sex_2();
		},
		"No.": function(message){
			n(message);
			m("Please stop lying... I saw your texts...");
			n("We were just sexting, we didn't actually--");
			m("...and your photos...");
			Have_You_Had_Sex_2();
		},
		"I'm not saying.": function(message){
			n(message);
			m("oh my god... you did.");
			Have_You_Had_Sex_2();
		}
	});
}

function Have_You_Had_Sex_2(){

	n(". . .");
	m("Which... one of you is the woman?");

	Show("nicky","dinner_nicky_outrage");

	n("OH COME ON!");
	n("That's like asking which chopstick is the spoo--");
	m("Which one of you?...");

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"I'm usually the bottom.":function(message){
			$.top_or_bottom = "bottom";

			n(message);
			Throw_Up();
		},
		"Jack is, mostly.":function(message){
			$.top_or_bottom = "top";

			n(message);
			m("Th-that... means you could still be straight! R-right?...");
			m("If... you know... you're the one who puts your...");
			m("your...");
			Throw_Up();
		},
		"We take turns.":function(message){
			$.top_or_bottom = "versatile";

			n(message);
			Throw_Up();
		}
	});
}

function Throw_Up(){

	PlaySound("sfx","dinner_vomit");

	Show("clock_time","clock_1940");
	Show("mom","mom_vomit");
	Show("table","dinner_table_2");
	Wait(1000);

	Choose({
		"what.": Father_Soon,
		"whaaat.": Father_Soon,
		"whaaaaaaaaaaaaaaat.": Father_Soon
	});

}

function Father_Soon(message){

	n(message);

	Show("mom","mom_sit");

	m(". . .");
	m("Your father will be back soon.");
	n("The food's cold. Well, except for the spot you just uh, reversed, on.");
	m("Your dad's late. Must have been a stressful day at work.");
	m("So... please... when he's back...");
	m("Promise me you'll keep all this secret?");
	n(". . .");

	m("Don't tell him about Jack.");

	switch($.what_are_you){
		case "bisexual":
			m("Don't tell him you think you're bisexual.");
			break;
		case "confused":
			m("Don't tell him you're confused about your sexuality.");
			break;
		case "son":
			m("Don't tell him you lied to us so you could... do things with Jack.");
			break;
	}

	switch($.top_or_bottom){
		case "top":
			m("Don't tell him you make Jack a woman.");
			break;
		case "bottom":
			m("Don't tell him you act like a woman with Jack.");
			break;
		case "versatile":
			m("Don't tell him you and Jack both act like women.");
			break;
	}

	m("Okay?...");

	Choose({
		"Okay.": function(message){
			$.promise_silence = "yes";
			
			n(message);
			m("Okay.");
			m(". . .");
			m("Your father's here.");
			Father_Soon_2();
		},
		"No. Not okay.": function(message){
			$.promise_silence = "no";
			
			n(message);
			m("Nick, no no no, please--");
			m("Oh no. Your father's here.");
			Father_Soon_2();
		},
		"As long as you don't tell him, either.": function(message){
			$.promise_silence = "tit for tat";
			
			n(message);
			m("I won't.");
			n("Promise me you won't.");
			m("I pr--");
			m("Shhh. Your father's here.");
			Father_Soon_2();
		}
	});

}

function Father_Soon_2(){
	Show("nicky","dinner_nicky_sit");
	Start_Dinner_5();
}
