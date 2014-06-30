// Dad's home!
// Calm conversation about going to the movies.
// Mother brings up tutoring and/or school. (if you try to bring anyting up, it'll skip to this.)
// Argue or agree?
// Everything in the past hour comes crashing back.
// You can attempt to blame them, too. (but they justify it all)
// Agree (calm dinner) --- Stressed Dinner, storms off --- Punches you in the damn face.

function Start_Dinner_5(){

	PlaySound("sfx","dinner_door");
	
	f("Hey Qiying! Hey Nick!");
	f("I'm home!");
	
	Show("dad","dad_serious");

	m("Hi honey.");
	n("Sup dad, how was your day?");

	f("Stayed overtime. Hopefully the boss will notice it before my Performance Review.");
	f("Really, though, I was just playing web games all day. Haha!");
	n("Ha ha.");

	f("Nick, why aren't <i>your</i> web games any fun?");

	Choose({
		"I thought my games were fun...": function(message){
			n(message);
			f("Well then! You have a sick sense of fun, don't you. Haha!");
			n(". . .");
			Casual();
		},
		"Not all games have to be fun.": function(message){
			n(message);
			f("Oh yes. You're right.");
			f("BAD games aren't any fun. Haha!");
			n(". . .");
			Casual();
		},
		"ART!": function(message){
			n(message);
			f("Pfft. What's the use of art?");
			f("Next thing you know, you're going to be writing bad amateur poetry, or something.");
			n(". . .");
			Casual();
		}
	});

}

function Casual(){
	
	f("Hey Qi, what's that sauce on your plate?");
	f("Uh...");

	Show("clock_time","clock_1950");

	Choose({
		"It's vomit.": function(message){
			
			n(message);

			$.grounded = 2;
			f("Nick! One week grounded!");
			f("Don't insult your mother's cooking like that.");
			f("Her food insults itself plenty enough. Haha!");

			Casual_2();

		},
		"Don't eat it! It's, uh, really not good.": function(message){
			
			n(message);

			$.grounded = 1;
			f("Nick! One day grounded!");
			f("Show some respect. Have more faith in your mother's cooking!");
			f("Because the way she cooks, we could certainly use a miracle! Haha!");

			Casual_2();

		},
		"Why don't you give it a try, dad?": function(message){
			
			n(message);

			$.grounded = 0;
			m("Nick...");
			f("Don't mind if I do!");
			f("[eats a spoonful]");
			f(". . .");
			n(". . .");
			m(". . .");
			f("Well, you've cooked up worse, hun. Haha!");

			Casual_2();

		}
	});

}

function Casual_2(){
	
	m("Dear...");
	f("So, son! How's school?");

	Choose({
		"School's fine.": function(message){

			n(message);

			f("Really, fine?");
			if($.studying_subject!=$.studying_subject_2){
				f("What about your poor grades in "+$.studying_subject+" and "+$.studying_subject_2+"?");
			}else{
				f("What about your poor grades in "+$.studying_subject+"?");
			}

			m("Nick and I were just talking about that.");
			Getting_A_Tutor();

		},
		"I'm studying at a friend's place tomorrow.": function(message){
			n(message);

			$.tried_talking_about_it = true;

			if($.grounded>0){

				if($.grounded==1){
					f("Don't you remember? I just grounded you for tomorrow.");
				}
				if($.grounded==2){
					f("Don't you remember? I just grounded you for a week.");
				}
				f("You must get your stupid from your mother's side. Haha!");
				
				n("Um. I...");

				$.grounded++;
				if($.grounded==2){
					f("I'm bumping it up. You're now grounded for a week.");
				}
				if($.grounded==3){
					f("I'm bumping it up. You're now grounded for TWO weeks.");
				}

			}

			m("Speaking of studying...");
			Getting_A_Tutor();

		},
		"DAD I'M BISEXUAL AND BANGING JACK.": function(message){
			$.tried_talking_about_it = true;

			Show("nicky","dinner_nicky_outrage");
			n("DAD I'M BI--");
			Show("nicky","dinner_nicky_sit");

			m("BICYCLING to school every day starting next week.");
			f("Oh good!");
			f("You could certainly lose some weight, or else how will you get a girlfriend?");
			f("You must get your chubbiness from your mother. Haha!");
			n("Ha ha.");
			m("Speaking of school...");
			Getting_A_Tutor();
		}

	});

}

function Getting_A_Tutor(){

	m("We were discussing probably getting a home tutor.");
	f("Oh! Is this the Claire kid?");

	// Oh dang!
	Show("nicky","dinner_nicky_defiant");

	switch($.promise_silence){
		case "yes":
			n("Mom, we both promised we wouldn't talk about this...");
			if($.tried_talking_about_it){
				m("You <i>just</i> tried talking about it.");
			}
			break;
		case "no":
			n("Mom, you said we wouldn't talk about this...");
			m("You're the one who didn't promise not to talk!");
			break;
		case "tit for tat":
			n("Mom, you said you wouldn't talk about this if I didn't...");
			if($.tried_talking_about_it){
				m("You <i>just</i> tried talking about it.");
			}
			break;
	}

	f("Talking about what?...");
	f("I'm the head of this household. You two better not be hiding secrets from me.");
	m("Oh... Nick just really, really likes Claire.");

	Choose({
		"What?! No I don't!": function(message){
			n(message);
			f("Don't be so shy about it.");
			Getting_A_Tutor_2();
		},
		"Fine. You got me. I have a crush on Claire.": function(message){
			n(message);
			Getting_A_Tutor_2();
		},
		"I have a boyfriend.": function(message){
			n(message);
			f("Yes son! You're going to be a boyfriend!");
			n("<i>Have</i>. I <i>have</i> a--");
			Getting_A_Tutor_2();
		}
	});

}

function Getting_A_Tutor_2(){
	
	f("You're becoming a man, son!");
	f("If I were your age, I ditch your mother and chase Claire, too! Haha!");

	n("That's totes weird, dude.");
	f("Talking back? Careful, I'll box your ears, boy!");

	if($.changing_schools){
		m("We were also thinking about changing schools for Nick.");
		m("Maybe to Claire's school.");
	}
	if($.studying_subject!=$.studying_subject_2){
		m("Claire will be tutoring Nick every day after school in "+$.studying_subject+" and "+$.studying_subject_2+".");
	}else{
		m("Claire will be tutoring Nick every day after school in "+$.studying_subject+".");
	}

	f("Nick, how does all this sound? Yes or no?");
	m("He loves the ide--");
	f("Shut up, Qi. I asked my son.");
	m(". . .");

	Show("dad","dad_threat");

	f("Mister Nicklaus Liow.");
	if($.changing_schools){
		f("You want to change schools to chase your hot tutor girlfriend?");
	}else{
		f("You want to spend all your after-school hours with your hot tutor girlfriend?");
	}

	n("It's complicated, I--");
	f("No pansy middle-of-the-road answers.");
	f("Yes. Or. No.");

	n(". . .");

	Choose({
		"Yes.": Agree_With_Dad,
		"No.": Argue_With_Dad
	});

}

function Agree_With_Dad(){
	
	n("...Yes.");

	f("Hm.");
	f("You two seem to have made this big life decision very eagerly!");
	f("So eagerly, in fact, you made it in less than an hour, and tried to hide it from me. What a sudden change.");
	m(". . .");
	n(". . .");

	f("Nick, you did something naughty, didn't you?");
	f("What did you do.");

	Choose({
		"I failed my midterms.": function(message){
			
			n(message);

			f("...Oh.");
			f("Yeah, you need to get your grades back up.");

			Show("dad","dad_serious");

			f("Or you'll be stuck in a teaching job like your mother! Haha!");
			n(". . .");
			Agreeable_Ending();

		},
		"I had sex with Jack.": function(message){
			
			n(message);
			
			Show("mom","mom_cry");
			m("[sob]");
			f(". . .");
			Argument_Ending();

		},
		"I had sex with Claire.": function(message){
			
			n(message);
			
			m("...Nick!");
			f(". . .");
			f("   Nnnnnniiiiiiiiice.");
			m("...Dear!");
			f("Wait, uh, you didn't get her pregnant, did you?");
			n("No. I'm not stupid.");
			
			Show("dad","dad_serious");

			f("Good. Otherwise you'd be stuck for the next two decades raising a kid, like me! Haha!");
			n("Ha ha.");
			Agreeable_Ending();

		}
	});

}

function Agreeable_Ending(){

	$.father_oblivious = true;

	f("For a moment there, Nick, I thought you'd been smoking pot with your hippie classmate Jack, or something!");

	Show("nicky","dinner_nicky_sit");
	n(". . .");
	f("So!");
	f("Who wants to watch a movie this weekend? I hear Inception is good.");

	Choose({	
		"Let's watch it! I haven't seen it yet.": function(message){
			n(message);
			f("Then it's a plan!");
			f("Hey Nick, you know who's acting in the movie?");
			n("Um. Leonardo DiCaprio?");
			f("No no, Ellen Page.");
			f("Doesn't Claire look a little bit like her?");
			n("I guess.");
			Dinner_Ending();
		},
		"Uh... let's do a different movie...": function(message){
			n(message);
			f("What, Inception too complicated for you?");
			n("Hey...");
			if($.studying_subject!=$.studying_subject_2){
				f("Sure, I understand if you failed "+$.studying_subject+" and "+$.studying_subject_2+"...");
			}else{
				f("Sure, I understand if you failed "+$.studying_subject+"...");
			}
			f("But come on, this is a <i>movie</i>!");
			f("You can't have inherited that much stupid from your mother's side! Haha!");
			n("Ha ha.");
			Dinner_Ending();
		},
		"Oh, I already saw Inception.": function(message){
			n(message);
			f("Oh ho, I see...");
			f("You went on a little movie date with your special friend Claire, didn't you?");
			n("Yeah.");
			n("A date with my special friend.");
			Dinner_Ending();
		}
	});

}

function Argue_With_Dad(){

	n("...No.");

	f("Excuse me?");
	n("No. Mom's doing this so I can't see Jack anymore.");
	f("Jack.");
	n("My friend.");

	Choose({
		"My boyfriend.": function(message){
			
			n(message);

			Show("mom","mom_cry");
			m("[sob]");

			m("Jack did this to our son!");
			f("That kid chose his lifestyle, but I will not have it be yours, Nick.");
			Argument_Ending();
		},
		"Mom hates him, coz he happens to be gay.": function(message){

			n(message);

			Show("mom","mom_cry");
			m("[sob]");

			f("You made your mother cry.");
			if($.hippies){
				m("And his parents are drug addicts!");
			}
			f("Jack chose that lifestyle, but I will not have it be yours, Nick.");
			Argument_Ending();
		},
		"Mom hates him, coz she THINKS he's gay.": function(message){

			n(message);

			Show("mom","mom_cry");
			m("[sob]");

			m("Jack IS gay!");
			if($.hippies){
				m("And his parents are drug addicts!");
			}
			f("Jack chose that lifestyle, but I will not have it be yours, Nick.");
			Argument_Ending();
		}
	});

}

function Argument_Ending(){

	$.father_oblivious = false;

	n(". . .");

	if($.top_or_bottom=="top"){
		m("Jack acts like the woman, not him...");
	}
	switch($.what_are_you){
		case "bisexual":
			m("Nick's not fully gay, he told me himself he's still attracted to girls!");
			n(". . .");
			break;
		case "confused":
			m("Earlier Nick told me he was just confused!");
			f("Oh, clearly he is.");
			n(". . .");
			break;
		case "son":
			n("Look, like I told Mom just now, I'm your SON, isn't that enou--");
			break;
	}
	
	f("Nick, you're changing schools.");
	n(". . .");
	m("huuu... huuu... huuu...");

	f("Your mother and I will do random checks on your texts and emails.");
	n(". . .");
	m("owww... owww...");

	f("I swear, if I have to pay Claire extra to make you realize you're straight, I will.");
	n(". . .");

	Show("mom","mom_sit");
	if($.crying=="anger"){
		m("When I was crying earlier, he accused it of being fake!");
		f("Qi, shut up. We're not talking about you.");
	}
	if($.crying=="mocking"){
		m("When I was crying earlier, he was mocking it!");
		f("Qi, shut up. We're not talking about you.");
	}

	f("So Nick.");
	f("Would you like to say anything, anything at all, about all that?");

	Choose({
		"Yes. Fuck this, and fuck you.": function(message){

			n("Yes.");
			n("FUCK this.");
			n("And FUCK you.");
			
			Show("nicky","dinner_nicky_outrage");
			n("Fuck BOTH of you, you narcissistic slimy pieces of SHI--");
			
			Dinner_Ending_Punch();

		},
		"No. I accept my punishment.": function(message){

			n(message);
			f("Good. At least you're taking this like a man.");
			n(". . .");

			Show("dad","dad_serious");

			m("sniff...");
			f("I'm going out to the bar, and getting something actually edible to eat.");

			Show("dad",null);

			f("Honey sweetie dear? Your cooking is shit.");
			PlaySound("sfx","dinner_door");

			m(". . .");
			
			Show("mom","mom_cry");

			m("BAWWWWW");
			
			Dinner_Ending();

		},
		"You can't hurt me.": function(message){

			n(message);
			f(". . .");
			m("Dear, no...");
			f("Mighty strong words, son.");
			m("Honey, please don't!");
			f("At least you're standing up to me. Like a man.");
			m("Please! It's my fault! Don't--");
			f("Ice keeps the swelling down.");
			m("DEAR!");
			
			Dinner_Ending_Punch();

		}
	});

}

function Dinner_Ending_Punch(){

	Wait(500);

	queue(ClearDialogue,0);

	StopSound("clock");
	PlaySound("sfx","dinner_punch");

	Show("dad",null);
	Show("mom","mom_cry");
	Show("nicky","dinner_nicky_punched");
	Show("dinner_punch_arm","dinner_punch_arm",{x:0,y:300});
	
	$.punched = true;
	Dinner_Ending();	
	
}

function Dinner_Ending(){

	Wait(500);

	queue(ClearDialogue,0);

	Wait(500);

	PlaySound("clock","dinner_meowing",{loop:-1});
	Show("clock","clock_meowing");
	Show("clock_time","clock_2000");

	Wait(1000);

	Clear();
	Start_Jack_2();

}

