function Start_Dinner_1(){

	/////// SET UP SCENE ////////

	Show("background","dinner");
	Show("clock","clock_ticking",{x:155,y:294});
	Show("clock_time","clock_1855",{x:155+5,y:294+37});
	Show("nicky","dinner_nicky_sit",{x:0,y:300});
	Show("dad",null,{x:0,y:300});
	Show("mom",null,{x:0,y:300});
	Show("table","dinner_table",{x:0,y:420});

	PlaySound("clock","dinner_ticking",{loop:-1});

	////////////////////////////

	Wait(2500);
	n("Where is everyone?...");
	n(". . .");

	Choose({
		"Moooom?": Waiting_1,
		"Daaaaad?": Waiting_1,
		"Hello, anybody?": Waiting_1
	});

}

function Waiting_1(message){
	
	$.what_you_called_out = message;
	n(message);

	n(". . .");

	Choose({
		"[start eating]": function(message){
			$.waiting_action = "eat";
			Waiting_2(message);
		},
		"[wait some more]": function(message){
			$.waiting_action = "wait";
			Waiting_2(message);
		},
		"[play with food]": function(message){
			$.waiting_action = "play";
			Waiting_2(message);
		}
	});

}

function Waiting_2(message){
	
	n(message);
	n(". . .");

	PlaySound("clock","dinner_meowing",{loop:-1});

	Show("clock","clock_meowing");
	Show("clock_time","clock_1900");
	Wait(1000);

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"Cut the crying, cacophonous cat clock!": function(message){
			n(message);

			Show("mom","mom_stand");
			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});

			if($.im_a_poet){
				m("Did you learn poetry from a friend?");
			}else{
				m("Poetic.");
			}

			Show("nicky","dinner_nicky_sit");
			n("Oh, hey mom.");
			
			Waiting_End();
		},
		"Ugh, why did we get that thing?": function(message){
			n(message);

			Show("mom","mom_stand");
			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});

			m("Your grandfather gave it to us.");

			Show("nicky","dinner_nicky_sit");
			n("Oh! Hey mom.");
			
			Waiting_End();
		},
		"Meow! Meow! Meow! Meow!": function(message){
			
			n("Meow.");
			n("Meow!");

			Show("nicky","dinner_nicky_outrage");
			n("MEOW!");

			Show("mom","mom_stand");

			m("Nick, what are you doing?...");

			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});
			Show("nicky","dinner_nicky_sit");

			n("MEOOOhhhh didn't see you. Ahem. Hey mom.");

			Waiting_End();
		}
	});

}

function Waiting_End(){
	Start_Dinner_2();
}