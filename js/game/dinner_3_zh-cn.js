// Plot points:
// Trying to stay overnight.
// Reveal - hippie parents, reading poetry, ...(?)
// Threats -- date your tutor, changing school(?)
// He's distracting you. Movie & Hippies.
// Oh my god, you've been reading my texts!...

function Start_Dinner_3(){

	// n("Mom.");
	n("妈。");

	Choose({
		// "That's why I'm studying more with Jack.": Tutor,
		"所以我才要接着和Jack一起学习": Tutor,
		// "Look, I'm trying. I really am.": Tutor,
		"你看到了，我已经很努力了。真的。": Tutor,
		// "My grades are fine.": Tutor
		"我的成绩还不错啊。": Tutor
	});

}

function Tutor(message){

	n(message);
	// m("I'm worried for you. Jack's not a good influence.");
	m("我在担心你。Jack对你没什么好的影响。");

	if($.hippies){
		// m("I think his parents might even be drug addicts...");
		m("我甚至觉得他的家人可能会去吸毒。");
		// n("What makes you say th--");
		n("为什么你会这么想——");
	}else if($.im_a_poet){
		// m("All he does is do poetry.");
		m("他只是在调戏你而已。");
		// n("What makes you say th--");
		n("为什么你会这么想——");
	}
	
	// m("I'm getting you a home tutor.");
	m("我准备给你请个家教。");
	// n("...what?");
	n("……啥？");

	if($.studying_subject!=$.studying_subject_2){
		// m("She'll be tutoring you in "+$.studying_subject+" and "+$.studying_subject_2+".");
		m("她会辅导你的"+$.studying_subject+"和"+$.studying_subject_2+"。");
	}else{
		// m("She'll be tutoring you in "+$.studying_subject+".");
		m("她会辅导你的"+$.studying_subject+"。");
	}

	// m("Her name is Claire. She's smart, pretty, and Caucasian. She's your age, too.");
	m("她叫Claire。挺聪明的，长得又漂亮，是个白种人。并且她跟你一个年纪。");

	Choose({
		// "Are you trying to stop me from seeing Jack?": Tutor_Seeing,
		"你在阻止我去见Jack吗？": Tutor_Seeing,
		// "Are you trying to matchmake me with her?": Tutor_Matchmake,
		"你想要撮合我和她？": Tutor_Matchmake,
		// "Can we talk about tutors another time?": Tutor_Forget
		"我们能待会再谈辅导的问题吗？": Tutor_Forget
	});

}

function Tutor_Seeing(message){
	n(message);
	// m("I'm sorry, <i>seeing</i> Jack?");
	m("我没听清，你说你去<i>见</i>Jack？");
	// m("Be careful how you say that. You make it sound like...");
	m("你这说话的语气让人听起来…");
	
	Choose({
		// "Like we're dating? Yeah. We are.": function(message){
		"像是我们在约会？对啊没错。": function(message){
			n(message);
			// m(". . .");
			m("……");
			// n(". . .");
			n("……");
			// n("...Hello?");
			n("……嗯？");
			// m(". . .");
			m("……");
			// n("Anyone there?");
			n("怎么了？");
			// m(". . .");
			m("……");
			Threat_School();
		},
		// "I just meant meeting Jack.": function(message){
		"只是普通的见面而已。": function(message){
			n(message);
			// m("Okay. Just being clear about some things.");
			m("嗯，我只是确认一下而已。");
			// n("Yeah.");
			n("恩。");
			// m(". . .");
			m("……");
			// m("Claire's really cute.");
			m("Claire长得真的很可爱。");
			// n("Sure.");
			n("可以啊。");
			// m("She has perky breasts.");
			m("她的胸发育的也不错。");
			Threat_Tutor();
		},
		// "We're. Not. Boyfriends.": function(message){
		"我们<b> 不 </b>是 <b>男朋友</b>关系": function(message){
			n(message);
			// m(". . .");
			m("……");
			// m("Okay.");
			m("好。");
			// m("I never said you were, but... okay.");
			m("不过我们也没说你们是，但是……好吧。");
			// n("We're friends.");
			n("我们只是朋友。");

			if($.relationship=="friend"){
				// m("\"Good pals\"...");
				m("“好哥们”");
			}
			if($.relationship=="best friend"){
				// m("\"BEST friends\"...");
				m("“最好的朋友”");
			}

			Threat_Tutor();

		}
	});
}

function Tutor_Matchmake(message){
	n(message);
	// m("Well, if that's what you want, I could!");
	m("好。既然你也是这么想的话，我可以帮你。");
	// n("nooooo.");
	n("不！");
	// m("Don't be shy! You're growing up to be a man.");
	m("别害羞！你就要变成大人了。");
	// m("And you're going to give me lots of grandkids.");
	m("我还指望你们俩给我抱孙子呢。");

	Choose({
		// "Stop it! I haven't even met Claire yet!": function(message){
		"等等！我到现在甚至都还没见过她。": function(message){
			n(message);
			// m("Yet!");
			m("只是现在！");
			// m("She's coming over tomorrow!");
			m("她明天就会过来。");
			// n("What? But I promised Jack--");
			n("啊？但是我已经很Jack说好——");
			// m("I ironed your best clothes. You'll make a good first impression.");
			m("我已经替你烫好衣服了，你得给她留下一个好的第一印象。");
			Threat_Tutor();
		},
		// "The odds of that are 50-50, coz I'm bi.": function(message){
		"这概率只有一半而已，因为我是个双。": function(message){

			$.admit_bisexuality = true;

			n(message);
			// m("Um. Bi?...");
			m("呃。双？…");

			Show("nicky","dinner_nicky_defiant");

			// n("Yes. As in BISEXUAL.");
			n("对，我是<b>双性恋</b>");
			// n("As in I AM SEXUALLY ATTRACTED TO BOTH MEN AND WOMEN.");
			n("就是说<b>无论男女我都可能会喜欢上</b>");
			// m(". . .");
			m("…………");
			// n(". . .");
			n("…………");
			Threat_School();
		},
		// "No. I don't ever want to have kids.": function(message){
		"不，我不会想要孩子的。": function(message){
			n(message);
			// m("You'll change your mind when you grow up.");
			m("等你长大了你会改的。");
			// m("Raising a child is wonderful. Your children will look up to you!");
			m("生儿育女是一件很美妙的事，你的孩子会跟你长得一样的！");
			// n("...of course, you narcissist.");
			n("…当然了，你这么自恋。");
			// m("Excuse me?");
			m("你说什么？");
			// n("Nothing.");
			n("没什么。");
			// m(". . .");
			m("…………");
			Threat_Tutor();
		}
	});
}

function Tutor_Forget(message){
	n(message);
	// m("No, because I've already scheduled Claire to come over tomorrow.");
	m("不能，因为我已经安排好了让Claire明天过来");
	// n("What?!");
	n("啥？！");
	// n("No. I promised to study with Jack tomorrow.");
	n("不行，我已经和Jack说话好了明天和他一起。");
	// m(". . .");
	m("……");
	// m("How long did you want to stay over at his place?");
	m("你们俩明天会在一起多长时间。");

	Choose({
		// "Overnight.": function(message){
		"要过夜。": function(message){
			n(message);
			// m(". . .");
			m("……");
			// n(". . .");
			n("……");
			// n("...Hello?");
			n("恩？");
			// n("It's not weird. Friends have sleepovers all the time.");
			n("在好朋友家过夜没什么奇怪的啊？");
			// m(". . .");
			m("……");
			Threat_School();
		},
		// "Just the afternoon.": function(message){
		"只是一下午。": function(message){
			n(message);
			if($.lying_about_hanging_out){
				// m("I knew it. I caught your lie earlier.");
				m("我早就知道，我发现你在说谎了。");
				// n("Huh?");
				n("呃？");
			}else{
				// m("...I knew it.");
				m("…我就知道");
			}
			// m("You're just hanging out with him.");
			m("你们俩只是出去玩了。");
			Threat_Tutor();
		},
		// "Maybe an hour or so.": function(message){
		"大概一两个小时吧。": function(message){
			n(message);
			// m("That's not enough to really get studying done.");
			m("只有一两个小时能学到什么。");
			if($.lying_about_hanging_out){
				// m("I knew it. I caught your lie earlier.");
				m("我早就知道，我发现你在说谎了。");
				// n("Huh?");
				n("呃？");
			}
			// m("You're just hanging out with him.");
			m("你们俩只是出去玩了。");
			Threat_Tutor();
		}
	});
}

function Threat_Tutor(){
	
	Show("nicky","dinner_nicky_defiant");
	
	// n(". . .");
	n("…………");
	// m("Claire will be tutoring you every day after school, starting tomorrow.");
	m("Claire从明天开始，每天都会在你放学之后过来辅导。");

	Choose({
		// "Every day?! What about my friends?!":function(message){
		"每天？！那我的朋友怎么办？！":function(message){
			n(message);
			// m("Sweetie, I'm your friend!");
			m("小宝贝，我就是你的朋友啊！");
			// n(". . .");
			n("…………");
			// m("Also Claire can be your friend. Maybe more than friends.");
			m("Claire也能当你的朋友，或许不止是朋友");
			// n(". . .");
			n("……");
			// n("Are we done?");
			n("还有别的事吗？");
			// m("Just... one more thing.");
			m("还有……最后一件事。");
			Plot_Twist();
		},
		// "Okay, but my weekends are free, right?": function(message){
		"好吧，我周末至少没有安排，对吧？": function(message){
			n(message);
			// m("Yes.");
			m("对。");
			// n("Okay. Good that this is all settled now.");
			n("好，没别的需要说得了吧？");
			// m("...Yes.");
			m("……恩。");
			// n(". . .");
			n("……");
			// m("Just... one more thing.");
			m("还有……最后一件事。");
			Plot_Twist();
		},
		// "What if just DON'T study with Claire?": function(message){
		"要是我<b>不去</b>和Claire一起学习呢？": function(message){
			n(message);
			// m("Well, if you also want to hang out with her, that's good too.");
			m("也行啊，如果你也想和她一块出去玩的话也不是不行。");
			// m("Anything to make you more manly.");
			m("只要你能更男人一点。");
			// n("ugh.");
			n("呃。");
			// m("Oh.");
			m("哦对了。");
			// m("One more thing.");
			m("还有一件事。");
			Plot_Twist();
		}
	});

}

function Threat_School(){

	$.changing_schools = true;
	
	// m("You're changing schools.");
	m("你要转学了。");

	Show("nicky","dinner_nicky_outrage");

	// n("WHAT?!");
	n("<b>什么？！</b>");
	// m("I think it's not just Jack, it's the entire school that's a bad influence on you.");
	m("我觉得不只是Jack，整个学校对你的影响都不太好。");
	// n("ARE YOU SERIOUS.");
	n("<b>你认真的吗。</b>");
	// m("The whole Canadian culture is making you confused about who you are.");
	m("整个加拿大文化都让你有点摸不清自己。");

	Show("nicky","dinner_nicky_defiant");

	Choose({
		// "No, it's YOUR Asian culture that's backwards!": function(message){
		"不！那是你的亚洲文化，那是退步！": function(message){
			n(message);
			// m("Don't be so rude!");
			m("你会不会说话！");
			// m("It's YOUR culture, too!");
			m("而且那<b>也是你的</b>文化。");
			// n(". . .");
			n("……");
			Plot_Twist();
		},
		// "You can't do this to your CHILD!": function(message){
		"你不能这么对待你的<b>孩子</b>！": function(message){
			n(message);
			// m("Don't be so rude!");
			m("你会不会说话！");
			// m("I'm your MOTHER, it's my right to do whatever I want with you!");
			m("我是你的<b>母亲</b>，我有权利对你做任何事。");
			// n(". . .");
			n("……");
			Plot_Twist();
		},
		// "Whatever, ALL schools have queer people.": function(message){
		"那又怎样，<b>每个</b>学校都有奇怪的人。": function(message){
			n(message);
			// m("Don't be so rude!");
			m("你会不会说话！");
			// m("And watch it, I could change my mind and start homeschooling you.");
			m("看看吧，实在不行我可以改成全部家教。");
			// n(". . .");
			n("……");
			Plot_Twist();
		}
	});

}

function Plot_Twist(){

	// m("Yesterday, when you were supposedly studying with Jack?");
	m("昨天，也就是你本来应该和Jack一起学习的那段时间。");
	// m("I know you secretly went off to watch a movie.");
	m("我知道你们偷偷去看电影了。");

	Show("nicky","dinner_nicky_sit");
	// n(". . .");
	n("……");

	Show("clock_time","clock_1920");

	Choose({
		// "Oh my god. You read my texts.": function(message){
		"我的天。你居然偷敢我短信。": function(message){
			n(message);
			// m("Yes. See how smart you can be when you're not with Jack?");
			m("没错。你看要是你没跟Jack在一起的话你有多聪明。");
			Plot_Twist_2();
		},
		// "No, we didn't. We studied.": function(message){
		"没有，我们是在学习。": function(message){
			n(message);
			// m("You are a very stubborn boy.");
			m("你还真是固执。");
			// m("I read your text messages.");
			m("我看了你们发的信息。");
			Plot_Twist_2();
		},
		// "What makes you think that?": function(message){
		"你为什么这么想？": function(message){
			n(message);
			// m("Because I read your text messages.");
			m("因为我翻了你的短信。");
			Plot_Twist_2();
		}
	});

}

function Plot_Twist_2(){

	// n(". . .");
	n("……");
	// m("Before dinner. I was in your room.");
	m("晚饭之前我在你房间里。");

	// Dinner_1
	// m("You yelled out '"+$.what_you_called_out+"' from downstairs, while I unlocked your phone...");
	m("你在楼下喊“"+$.what_you_called_out+"”的时候,我划开了你的手机。");
	// m("And read what you and Jack have been sending to each other.");
	m("然后看了你和Jack发给你的短信。");
	// m("I'm your mother. I have the right.");
	m("我是你的母亲，我有权利这么做。");

	// n(". . .");
	n("……");

	if($.im_a_poet){
		// m("Weird poetry?");
		m("挺有诗意啊？");
	}
	if($.hippies){
		// m("Talking about smoking marijuana?");
		m("讨论怎么抽大麻？");
	}
	if($.im_a_poet || $.hippies){
		// m("Helping you lie to your own mother?");
		m("教你怎么骗你的母亲？");
		// m("What else have you been doing behind my back?");
		m("你们背着我还干了什么？");
	}

	Choose({
		// "This has to be a bad dream.": function(message){
		"这肯定是场噩梦。": function(message){
			n(message);
			// m("Like that 'Deception' movie?");
			m("就像“盗梦笔记”一样？");
			// n("It's... it's 'Inception'.");
			n("那个…那个叫“盗梦空间”。");
			// m("Don't talk back to me.");
			m("别跟我顶嘴。");
			Plot_Twist_3();
		},
		// "I'm sorry. I'm so sorry.": function(message){
		"对不起。真的。": function(message){
			n(message);
			// m("I forgive you.");
			m("我原谅你。");
			// m("You're my child, of course I forgive you.");
			m("你是我的孩子，我肯定会原谅你你。");
			Plot_Twist_3();
		},
		// "I hate you.": function(message){
		"我讨厌你。": function(message){
			n(message);
			// m("That's okay.");
			m("没关系。");
			// m("I still love you, Nick.");
			m("我仍然爱你，Nick.");
			Plot_Twist_3();
		},
	});

}

function Plot_Twist_3(){
	Start_Dinner_4();
}
