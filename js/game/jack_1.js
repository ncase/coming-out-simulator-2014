// PLOT BEATS:
// 1) In medias res talking about Inception
// 2) Thanks for movie, we still up to stay over tomorrow night?
// 3) You need to stop hiding... // Can't even CALL.
// Weave in previous bits of convo pieces.
// Also, FULL CIRCLE with the Inception!
// OKAY, TOO CONVOLUTED, CUT OUT THE DIFFERENT FAMILIES & TYPO parts.

function Start_Jack_1(){
	
	/////// SET UP SCENE ////////

	Show("background","bedroom");
	Show("us","bedroom_us_1");
	Show("light","bedroom_light_1",{x:0,y:159});

	PlaySound("bg","bedroom_1",{loop:-1});

	/////////////////////////////

	j("And when he simply announces,");
	j("'I bought the airline.'");
	j("That was positively priceless!");
	n("Is that what he said?");
	n("I missed out what everyone in the theater was laughing about.");
	j("You either need subtitles, or to clean your ears more often.");
	j("So how did you interpret the ending?");

	Choose({
		"It was totally all a dream.": Inception_Dream,
		"He's got to be back in the real world!": Inception_Awake,
		"Doesn't matter. Cobbs just finally let go.": Inception_Neither
	});

}

function Inception_Dream(message){

	$.inception_answer = "dream";

	n(message);
	j("So his entire redemption story was a lie?");
	n("A big fat lie.");
	j("You're a bit of a downer, aren't you?");

	Choose({
		"Yup, I'm just a sad sack of sadness.": Sadsack,
		"Sometimes... but not when I'm with you.": function(message){
			$.im_a_poet = true;

			n(message);
			j("Ah Nicky, you amateur poet.");
			n("Get me some french breads and wine,");
			n("Coz that's got to be the cheesiest thing I've ever said.");
			j("Apologize for nothing.");
			n("Anywho...");
			Thanks();
		},
		"I'm just a realist.": function(message){
			$.hippies = true;

			n(message);
			j("You need more positive thinking in your life.");
			n("And YOU need to stop being such a new-age hippie.");
			n("Anywho...");
			Thanks();
		}
	});

}
function Inception_Awake(message){

	$.inception_answer = "awake";
	$.im_a_poet = true;

	n(message);
	n("Otherwise, the whole movie would've all just been a lie.");
	n("What's the point of living a lie?");
	j("Ah Nicky, you amateur poet.");
	j("I take it you liked the film?");

	Choose({
		"Aw yiss. Yes I did.": function(message){
			n(message);
			Thanks();
		},
		"Mehhh, it was a tad confusing at times.": function(message){
			n(message);
			j("I believe that was the purpose.");
			n("Mission accomplished, then.");
			n("Anywho...");
			Thanks();
		},
		"BWOOOOOOOOOOONG": function(message){
			n(message);
			j("I'll interpret that as a yes.");
			Thanks();
		}
	});

}
function Inception_Neither(message){

	$.inception_answer = "neither";

	n(message);
	j("Oh?");
	n("He didn't even bother looking to see if the top fell!");
	n("Lies, truths, or half-truths... Cobbs no longer cares.");
	n("He's finally happy, and that's all that matters.");
	j("You either are being quite poetic, or quite depressing.");

	Choose({
		"I'm a poet, and I didn't even know it.": function(message){

			$.im_a_poet = true;

			n("I'm a poet,");
			n("and I wasn't even aware of the fact.");
			j("You're a lyrical miracle, the evidence is empircal.");
			n("That's hysterical.");
			n("Anywho...");
			Thanks();

		},
		"Nah, I'm just a sad sack of sadness.": Sadsack,
		"Or both.":function(message){

			$.hippies = true;
			$.im_a_poet = true;

			n(message);
			n("POETRY IS PAIN. ART IS SUFFERING.");
			j("You sound like my mother.");
			n("Your parents are <i>such</i> new-age hippies.");
			n("Anywho...");
			Thanks();

		}
	});

}

function Sadsack(message){
	
	$.sadsack = true;

	n(message);
	j("Aw, sorry to hear that.");
	j("I hope our little date at the movies cheered you up?");
	n("Sure did!");
	Thanks();

}

function Thanks(){
	
	n("So yeah! Thanks for taking me out to watch Inception!");
	j("My pleasure, Nicky.");
	j("You should parody Inception in that odd web game of yours!");
	n("Mmm, maybe maybe.");
	n("Let's meet again tomorrow evening!");

	j("Although...");
	n("Hope I can convince the parents to let me out overnight.");

	j("I wish you didn't tell your mom and dad we were just studying, when we were actually at the cinema.");
	n("I'll pretend we'll be cramming for the midterms all nigh-- huh?");

	j("You can't keep hiding like this.");
	n("Jack...");

	Choose({
		"They can never, ever know.": function(message){
			$.coming_out_readiness="no";
			n(message);
			j("Really, never?");
			Hiding();
		},
		"I wish I could tell them, too.": function(message){
			$.coming_out_readiness="yes";
			n(message);
			Hiding();
		},
		"I'm not ready to tell them yet.": function(message){
			$.coming_out_readiness="maybe";
			n(message);
			j("I can help you be ready.");
			Hiding();
		}
	});

}

function Hiding(){

	j("Nicky, hiding like this is eating away at your soul.");

	if($.inception_answer=="awake"){
		j("Like you said, what's the point of living a lie?");
	}
	if($.inception_answer=="dream"){
		j("It's... how'd you put it... 'a big fat lie'?");
	}

	if($.sadsack){
		j("When you said just now you're a sadsack?");
		j("I know you weren't joking. Not really.");
	}

	n("Jack, come on.");
	j("I came out to my parents last year.");
	if($.hippies){
		n("That's NOT a fair comparison.");
		n("LIKE I SAID, you and your parents are a bunch of new-age hippies.");
		n("When I'm at your place, I can't tell if all the smoke is incense or marijuana.");
		j("Hey! We only smoke weed every other day!");
		n("Heh.");
		j("The point is, my parents supported my coming out.");
	}else{
		j("And they were very supportive!");
	}

	j("You're in Canada now. A lot of people here are LGBT friendly.");
	j("How do you know your parents won't be supportive of you, too?");

	Choose({
		"Asian parents are usually very homophobic.": Hiding_2,
		"I don't know... I guess I haven't tried...": Hiding_2,
		"They don't support anything but STUDYING.": Hiding_2
	});

}

function Hiding_2(message){
	
	n(message);

	if($.coming_out_readiness=="no"){
		n("Again... They can never, ever know.");
	}

	j("You have trust issues.");
	j("You're even texting me instead of calling...");
	j("...because you think your parents might listen in.");

	n("They would!");

	j("This mode of communication.");
	j("It's imprecise, impersonal, impossible to truly connect.");

	if($.im_a_poet){
		n("Heh. You're an amateur poet like me, apparently.");
	}else{
		n("It's not too bad...");
	}

	if($.coming_out_readiness=="yes"){
		j("You yourself just said you wish you could tell them.");
		j("Tell them.");
	}else{
		j("Nicky.");
	}
	j("Tell them about us. Tonight.");

	Choose({
		"Tonight?! Heck no.": Hiding_3,
		"Sigh... I'll try my best.": Hiding_3,
		"I'll just carefully hint at it.": Hiding_3
	});

}

function Hiding_3(message){
	
	n(message);
	j(". . .");
	n("I don't want to freak them out too much.");
	n("Still need to convince them to let me stay at your place tomorrow night.");
	n("I'll tell 'em I'm studying with you again.");
	j(". . .");
	n("It's dinnertime. I'm heading downstairs now.");

	j("Hey... I agree.");
	n("Huh?");
	j("With your thoughts on the movie ending, that is.");
	switch($.inception_answer){
		case "dream": j("I think Cobbs was still dreaming, living a lie."); break;
		case "awake": j("I think Cobbs reconnected with his real family, in the real world."); break;
		case "neither": j("I think it doesn't matter, as long as Cobbs is happy."); break;
	}
	n("Oh.");
	j("Okay.");
	if($.coming_out_readiness=="maybe"){
		j("Hope you changed your mind about being 'not ready to tell them yet'.");
	}
	j("Good luck. Text me in an hour.");

	var insult = "";
	if($.hippies) insult+=" new-age hippie";
	if($.im_a_poet) insult+=" amateur poet";
	n("See ya.");
	if(insult!=""){
		n("You"+insult+".");
	}else{
		n("You goof.");
	}

	Jack_1_End();

}

function Jack_1_End(){
	Clear();
	Start_Dinner_1();
}