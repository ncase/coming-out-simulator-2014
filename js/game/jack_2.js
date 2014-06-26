// Denounement
// j("That mode of communication?"); j("It's imprecise, impersonal, impossible to truly connect.");

// Recap what happened.
// Who's to blame.
// All coming towards --> Break up now, or try to stay together?

// Love you, X. Love you, Y.
// IMMEDIATELY CUT TO NOW - WE BROKE UP.

function Start_Jack_2(){

	Scene("img/jack_1.png");

	n("Hey Jack.");
	if($.sadsack){
		j("Hello, Nicky darling. Still a sad sack of sadness?");
	}else{
		j("Hello, Nicky darling.");
	}
	j("So, did I tell you so, or did I tell you so?");

	Choose({
		"Jack... we messed up big time, Jack.": function(message){
			Recap();
		}
		"Things could have been worse.": function(message){
			Recap();
		}
		"Shut up, Jack.": function(message){
			Recap();
		}
	});

}

function Recap(){
}