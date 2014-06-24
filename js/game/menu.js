function Start(){
	
	Scene("img/intro.png");

	N("<b>COMING OUT SIMULATOR 2014</b>");
	N("A half-true game about half-truths.");
	N("Hey there, player. Welcome to this game, I guess.");
	N("What would you like to do now?");

	Choose({
		"Let's play this thing!": Play,
		"Hm, tell me more about this game.": About,
		"Who are you? You made this game?": Credits
	});

}

function Play(message){
	
	p(message);

	// Asked neither
	if(!$.asked_about && !$.asked_credits){
		N("Jumping right into it! Great!");
		N("No messing around with reading the Credits or the About This Game sections or--");
		p("Shush.");
		N("Fine, fine.");
	}
	// Asked both
	if($.asked_about && $.asked_credits){
		p(". . .");
		p("Why did you make that a clickable option, when it was the only option left.");
		N("NO IDEA");
	// Asked either
	}else if($.asked_about || $.asked_credits){
		N("Yes, let's!");
	}

	N("Let's travel back four years ago, to 2010...");
	p("That was FOUR years ago?!");
	N("...to the evening that changed my life forever.");

	if(!$.asked_about){
		N("If you didn't skip the About This Game section, you'd know this is a very personal story.");
		p("Shush.");
	}

	N("This game includes dialogue that I, my parents, and my boyfriend actually said.");
	N("As well as all the things we could have, should have, and never would have said.");
	N("It doesn't matter which is which.");
	N("Not anymore.");

	p("You're a bit of a downer, ain't ya?");

	N("You'll be playing as me, circa 2010.");
	if(!$.asked_credits){
		N("Because you skipped the Credits, my name's Nicky Case, just so you know.");
		p("Shush.");
	}

	N("When you play...");
	N("Choose your words wisely.");
	N("Every character will remember everything you say. Or don't say.");
	p("Yeah. You even brought up my choices in this MAIN MENU.");
	N("Exactly.");

	N(". . .");
	N("Some things are hard not to remember.");
	
	Wait(1000);
	Scene("");
	Wait(1000);
	Start_Jack_1();

}

function Credits(message){

	$.asked_credits = true;
	
	if($.asked_about){
		p(message);
	}else{
		p("Who are you?");
	}
	
	N("Ah, how rude of me! Let me introduce myself.");
	N("Hi, I'm Nicky Case.");
	N("That's not my legal name, it's just my real name.");

	p("That's weird, dude.");
	if($.asked_about){
		p("And like you just told me, this is your personal story?");
	}else{
		p("And you made this game?");
	}

	N("Yep, I am the sole writer / programmer / artist of Coming Out Simulator 2014.");

	if($.asked_about){
		p("All of this yourself?");
		p("I said it before and I'll say it again...");
		p("Of course. You narcissist.");
		N("Well it's not ALL me.");
		N("The music & audio are from various public domain sources.");
	}else{
		N("The music & audio, though, are from various public domain sources.");
	}

	N("But although it's mostly just me behind this game...");
	N("...there's a lot of people behind this game's story.");

	if($.asked_about){
		Choose({
			"Speaking of which, let's play that! Now!": Play
		});
	}else{
		Choose({
			"Speaking of that, can we play it now?": Play,
			"And why did you make this game?": About
		});
	}

}

function About(message){

	$.asked_about = true;

	p(message);

	if($.asked_credits){
		N("I wanted to tell my story.");
	}else{
		N("This game...");
		N("...more like a conversation simulator, really...");
		N("...is a very personal story.");
	}
	
	p("Of course. You narcissist.");
	N("Ha, of course.");

	if($.asked_credits){
		p("Actually no, a narcissist would use their real name.");
		N("I told you, it IS my real na--");
		p("Aight, aight. Weirdo.");
	}

	N("I made this game for the Nar8 Game Jam.");
	N("This jam finally gave me an excuse! And a deadline.");
	
	p("You procrastinated until the last day to enter, didn't you.");

	N("Ha ha ha ha ha");
	p("Ha ha ha");
	N("Ha.");
	p("Yeah, you did.");

	N("Oh, by the way, this game is uncopyrighted. Dedicated to the public domain.");
	N("I'm as open with my source code as I am with my sexuality.");

	p("Ugh, that's a terrible pun.");
	N("Howzabout a 'Fork Me' programming pun?");
	p("noooooo.");

	if($.asked_credits){
		Choose({
			"Let's just play this game already.": Play
		});
	}else{
		Choose({
			"Bad puns aside, can we play now?": Play,
			"So who ARE you, anyway?": Credits
		});
	}

}