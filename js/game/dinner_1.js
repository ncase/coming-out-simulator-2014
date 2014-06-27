function Start_Dinner_1(){

	Scene({
		image:"img/dinner_1.png",
		clear:true
	});

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

	Scene({ image:"img/dinner_meow.png" });
	Wait(1000);

	Choose({
		"Cut the crying, cacophonous cat clock!": function(message){
			n(message);

			Scene({ image:"img/dinner_2.png" });
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

			Scene({ image:"img/dinner_2.png" });
			m("Your grandfather gave it to us.");
			n("Oh! Hey mom.");
			
			Waiting_End();
		},
		"Meow! Meow! Meow! Meow!": function(message){
			
			n("Meow.");
			n("Meow!");
			n("MEOW!");

			Scene({ image:"img/dinner_2.png" });
			m("Nick, what are you doing?...");
			n("MEOOOhhhh didn't see you. Ahem. Hey mom.");

			Waiting_End();
		}
	});

}

function Waiting_End(){
	Start_Dinner_2();
}