// Characters!
n = new Character({ align:"left", color:"#ffffff" });
p = new Character({ align:"right", color:"#888" });

///////////////////////////////////
////// 1) STUDYING AT Jack'S ///////
///////////////////////////////////

function Start(){
	
	Scene("img/intro.png");

	n("COMING OUT SIMULATOR 2014");
	n("A half-true game about half-truths.");
	n("Hey there, player. Welcome to this game, I guess.");
	n("What would you like to do now?");

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
		n("Jumping right into it! Great!");
		n("No messing around with reading the Credits or the About This Game sections or--");
		p("Shush.");
		n("Fine, fine.");
	}
	// Asked both
	if($.asked_about && $.asked_credits){
		p(". . .");
		p("Why did you make that a clickable option, when it was the only option left.");
		n("NO IDEA");
	// Asked either
	}else if($.asked_about || $.asked_credits){
		n("Yes, let's!");
	}

	n("Let's travel back four years ago, to 2010...");
	p("That was FOUR years ago?!");
	n("...to the evening that changed my life forever.");

	if(!$.asked_about){
		n("If you didn't skip the About This Game section, you'd know this is a very personal story.");
		p("Shush.");
	}

	n("This story includes dialogue that I, my parents, and my boyfriend actually said.");
	n("As well as all the things we could have, should have, and never would have said.");
	n("It doesn't matter which is which.");
	n("Not anymore.");

	p("You're a bit of a downer, ain't ya?");

	n("You'll be playing as me, circa 2010.");
	if(!$.asked_credits){
		n("Because you skipped the Credits, my name's Nicky Case, just so you know.");
		p("Shush.");
	}

	n("When you play...");
	n("Choose your words wisely.");
	n("EVERY character will remember EVERYTHING you say. Or don't say.");
	p("Yeah. You even brought up my choices in this MAIN MENU.");
	n("Exactly.");

	n(". . .");
	n("As much as I try...");
	n("It's hard not to remember that night.");

	Scene("img/sketch.png");

}

function Credits(message){

	$.asked_credits = true;
	
	if($.asked_about){
		p(message);
	}else{
		p("Who are you?");
	}
	
	n("Ah, how rude of me! Let me introduce myself.");
	n("Hi, I'm Nicky Case.");
	n("That's not my legal name, it's just my real name.");

	p("That's weird, dude.");
	if($.asked_about){
		p("And like you just told me, this is your personal story?");
	}else{
		p("And you made this game?");
	}

	n("Yep, I am the sole writer / programmer / artist of Coming Out Simulator 2014.");

	if($.asked_about){
		p("All of this yourself?");
		p("I said it before and I'll say it again...");
		p("Of course. You narcissist.");
		n("Well it's not ALL me.");
		n("The music & audio are from various public domain sources.");
	}else{
		n("The music & audio, though, are from various public domain sources.");
	}

	n("But although it's mostly just me behind this game...");
	n("...there's a lot of people behind this game's story.");

	if($.asked_about){
		Choose({
			"Speaking of which, let's play that! Now!": Play
		});
	}else{
		Choose({
			"Speaking of that story, can we play it now?": Play,
			"And why did you make this game?": About
		});
	}

}

function About(message){

	$.asked_about = true;

	p(message);

	if($.asked_credits){
		n("I wanted to tell my story.");
	}else{
		n("This game...");
		n("...more like an interactive tale, really...");
		n("...is a very personal story of mine.");
	}
	
	p("Of course. You narcissist.");
	n("Ha, of course.");

	if($.asked_credits){
		p("Actually no, a narcissist would use their real name.");
		n("I told you, it IS my real na--");
		p("Aight, aight. Weirdo.");
	}

	n("I made this game for the Nar8 Game Jam.");
	n("This jam finally gave me an excuse! And a deadline.");
	
	p("You procrastinated until the last day to enter, didn't you.");

	n("Ha ha ha ha ha");
	p("Ha ha ha");
	n("Ha.");
	p("Yeah, you did.");

	n("Oh, by the way, this game is uncopyrighted. Dedicated to the public domain.");
	n("I'm as open with my source code as I am with my sexuality.");

	p("Ugh, that's a terrible pun.");
	n("Howzabout a 'Fork Me' programming pun?");
	p("noooooo.");

	if($.asked_credits){
		Choose({
			"Let's just play this game already.": Play
		});
	}else{
		Choose({
			"Bad puns aside, can we play this game now?": Play,
			"So who ARE you, anyway?": Credits
		});
	}

}