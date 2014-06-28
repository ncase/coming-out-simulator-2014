function Start_Dinner_1(){

	/////// SET UP SCENE ////////

	Show("background","dinner");
	Show("clock","clock_ticking",{x:155,y:294});
	Show("nicky","dinner_nicky_sit",{x:0,y:300});
	Show("dad",null,{x:0,y:300});
	Show("mom",null,{x:0,y:300});
	Show("table","dinner_table",{x:0,y:420});

	////////////////////////////

	Wait(2000);
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

	Show("clock","clock_meowing");
	Wait(1000);

	Choose({
		"Cut the crying, cacophonous cat clock!": function(message){
			n(message);

			Show("mom","mom_stand");
			Show("clock","clock_ticking");

			if($.im_a_poet){
				m("Did you learn poetry from a friend?");
			}else{
				m("Poetic.");
			}
			n("Oh, hey mom.");
			
			Waiting_End();
		},
		"Ugh, why did we get that thing?": function(message){
			n(message);

			Show("mom","mom_stand");
			Show("clock","clock_ticking");

			m("Your grandfather gave it to us.");
			n("Oh! Hey mom.");
			
			Waiting_End();
		},
		"Meow! Meow! Meow! Meow!": function(message){
			
			n("Meow.");
			n("Meow!");
			n("MEOW!");

			Show("mom","mom_stand");
			Show("clock","clock_ticking");

			m("Nick, what are you doing?...");
			n("MEOOOhhhh didn't see you. Ahem. Hey mom.");

			Waiting_End();
		}
	});

}

function Waiting_End(){
	Start_Dinner_2();
}