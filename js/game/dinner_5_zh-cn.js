// Dad's home!
// Calm conversation about going to the movies.
// Mother brings up tutoring and/or school. (if you try to bring anyting up, it'll skip to this.)
// Argue or agree?
// Everything in the past hour comes crashing back.
// You can attempt to blame them, too. (but they justify it all)
// Agree (calm dinner) --- Stressed Dinner, storms off --- Punches you in the damn face.

function Start_Dinner_5(){

	PlaySound("sfx","dinner_door");
	
	// f("Hey Qiying! Hey Nick!");
	f("齐颖啊！还有Nick！");
	// f("I'm home!");
	f("我到家啦！");
	
	Show("dad","dad_serious");

	// m("Hi honey.");
	m("啊亲爱的。");
	// n("Sup dad, how was your day?");
	n("爹啊。今天过得怎么样？");

	// f("Stayed overtime. Hopefully the boss will notice it before my Performance Review.");
	f("留下来加班了。希望老板别在我绩效审核之前发现。");
	// f("Really, though, I was just playing web games all day. Haha!");
	f("不过实际上我今天一整天都在玩你做的小游戏。哈哈！");
	// n("Ha ha.");
	n("哈 哈 。");

	// f("Nick, why aren't <i>your</i> web games any fun?");
	f("Nick，为什么<i>你的</i>小游戏没一个好玩的？");

	Choose({
		// "I thought my games were fun...": function(message){
		"我觉得我的小游戏挺好玩的啊…": function(message){
			n(message);
			// f("Well then! You have a sick sense of fun, don't you. Haha!");
			f("好吧！看来你不知道什么叫好玩的游戏，是不是。哈哈！");
			// n(". . .");
			n("……");
			Casual();
		},
		// "Not all games have to be fun.": function(message){
		"不是所有游戏都是要有意思的。": function(message){
			n(message);
			// f("Oh yes. You're right.");
			f("啊对，你说的没错。");
			// f("BAD games aren't any fun. Haha!");
			f("<b>垃圾</b>游戏一点都不好玩。哈哈！");
			// n(". . .");
			n("……");
			Casual();
		},
		// "ART!": function(message){
		"那叫<b>艺术！</b>": function(message){
			n(message);
			// f("Pfft. What's the use of art?");
			f("切。艺术有什么用。");
			// f("Next thing you know, you're going to be writing bad amateur poetry, or something.");
			f("是不是接下来你就要去写诗或者是其他什么东西了？");
			// n(". . .");
			n("……");
			Casual();
		}
	});

}

function Casual(){
	
	// f("Hey Qi, what's that sauce on your plate?");
	f("齐啊，你盘子里那个是什么？");
	// f("Uh...");
	f("呃…");

	Show("clock_time","clock_1950");

	Choose({
		// "It's vomit.": function(message){
		"那是呕吐出来的。": function(message){
			
			n(message);

			$.grounded = 2;
			// f("Nick! One week grounded!");
			f("Nick！一个星期内不准出门！");
			// f("Don't insult your mother's cooking like that.");
			f("你怎么能这么说你妈做的饭。");
			// f("Her food insults itself plenty enough. Haha!");
			f("她做的饭本身就够打击人的了。哈哈！");

			Casual_2();

		},
		// "Don't eat it! It's, uh, really not good.": function(message){
		"别吃！那个，呃，不太好。": function(message){
			
			n(message);

			$.grounded = 1;
			// f("Nick! One day grounded!");
			f("Nick！明天一天不准出门！");
			// f("Show some respect. Have more faith in your mother's cooking!");
			f("不知道尊重家长吗？就这么对你妈做的饭没信心吗！");
			// f("Because the way she cooks, we could certainly use a miracle! Haha!");
			f("她的厨艺能做成这样已经很不容易了！哈哈！");

			Casual_2();

		},
		// "Why don't you give it a try, dad?": function(message){
		"爸，你为啥不试试呢？": function(message){
			
			n(message);

			$.grounded = 0;
			// m("Nick...");
			m("Nick……");
			// f("Don't mind if I do!");
			f("那我尝了啊！");
			// f("[eats a spoonful]");
			f("[吃了一勺]");
			// f(". . .");
			f("……");
			// n(". . .");
			n("……");
			// m(". . .");
			m("……");
			// f("Well, you've cooked up worse, hun. Haha!");
			f("好吧，你这饭做的还是这么烂，哼？哈哈！");

			Casual_2();

		}
	});

}

function Casual_2(){
	
	// m("Dear...");
	m("亲爱的…");
	// f("So, son! How's school?");
	f("所以，儿子啊！今天学校怎么样？");

	Choose({
		// "School's fine.": function(message){
		"学校今天还好啦。": function(message){

			n(message);

			// f("Really, fine?");
			f("真的？还好？");
			if($.studying_subject!=$.studying_subject_2){
				// f("What about your poor grades in "+$.studying_subject+" and "+$.studying_subject_2+"?");
				f("那你的"+$.studying_subject+"和"+$.studying_subject_2+"成绩怎么解释？");
			}else{
				// f("What about your poor grades in "+$.studying_subject+"?");
				f("那你的"+$.studying_subject+"成绩怎么解释？");
			}

			// m("Nick and I were just talking about that.");
			m("Nick跟我刚才已经说过了。");
			Getting_A_Tutor();

		},
		// "I'm studying at a friend's place tomorrow.": function(message){
		"我明天要去朋友那里学习。": function(message){
			n(message);

			$.tried_talking_about_it = true;

			if($.grounded>0){

				if($.grounded==1){
					// f("Don't you remember? I just grounded you for tomorrow.");
					f("你忘了吗？你明天不准出门。");
				}
				if($.grounded==2){
					// f("Don't you remember? I just grounded you for a week.");
					f("你忘了吗？你这周不准出门。");
				}
				// f("You must get your stupid from your mother's side. Haha!");
				f("整天跟你妈在一块人都变傻了。哈哈！");
				
				// n("Um. I...");
				n("呃。我……");

				$.grounded++;
				if($.grounded==2){
					// f("I'm bumping it up. You're now grounded for a week.");
					f("我改主意了，你现在一周不许出门。");
				}
				if($.grounded==3){
					// f("I'm bumping it up. You're now grounded for TWO weeks.");
					f("我改主意了，你现在<b>两</b>周不许出门。");
				}

			}

			// m("Speaking of studying...");
			m("说到学习…");
			Getting_A_Tutor();

		},
		// "DAD I'M BISEXUAL AND BANGING JACK.": function(message){
		"<b>爸我要和Jack在一起因为我是双性恋！</b>": function(message){
			$.tried_talking_about_it = true;

			Show("nicky","dinner_nicky_outrage");
			// n("DAD I'M BI--");
			n("<b>爸我要和J——</b>");
			Show("nicky","dinner_nicky_sit");

			// m("BICYCLING to school every day starting next week.");
			m("<b>要</b>从下周开始每天骑自行车上学");
			// f("Oh good!");
			f("哦好啊！");
			// f("You could certainly lose some weight, or else how will you get a girlfriend?");
			f("这样你就能多减减肥了，要不然你以后怎么找女朋友？");
			// f("You must get your chubbiness from your mother. Haha!");
			f("不然你就得和你妈一样胖了。哈哈！");
			// n("Ha ha.");
			n("哈 哈 。");
			// m("Speaking of school...");
			m("说到学校…");
			Getting_A_Tutor();
		}

	});

}

function Getting_A_Tutor(){

	// m("We were discussing probably getting a home tutor.");
	m("我们在讨论请一个家教。");
	// f("Oh! Is this the Claire kid?");
	f("哦？是那个叫Claire的小孩吧！");

	// Oh dang!
	Show("nicky","dinner_nicky_defiant");

	switch($.promise_silence){
		case "yes":
			// n("Mom, we both promised we wouldn't talk about this...");
			n("妈，我们说好的不谈这个事…");
			if($.tried_talking_about_it){
				// m("You <i>just</i> tried talking about it.");
				m("你<i>刚刚</i>不是已经要谈了吗？");
			}
			break;
		case "no":
			// n("Mom, you said we wouldn't talk about this...");
			n("你说过了我们不讨论这个的…");
			// m("You're the one who didn't promise not to talk!");
			m("是你没保证不谈的。");
			break;
		case "tit for tat":
			// n("Mom, you said you wouldn't talk about this if I didn't...");
			n("你不是说只要我不谈你就…");
			if($.tried_talking_about_it){
				// m("You <i>just</i> tried talking about it.");
				m("你<i>刚刚</i>不是已经要谈了吗？");
			}
			break;
	}

	// f("Talking about what?...");
	f("谈什么？…");
	// f("I'm the head of this household. You two better not be hiding secrets from me.");
	f("我是一家之主，你们俩在最好别背着我藏什么。");
	// m("Oh... Nick just really, really likes Claire.");
	m("啊…只是Nick真的真的非常喜欢Claire。");

	Choose({
		// "What?! No I don't!": function(message){
		"啥？！我不喜欢！": function(message){
			n(message);
			// f("Don't be so shy about it.");
			f("别害羞。");
			Getting_A_Tutor_2();
		},
		// "Fine. You got me. I have a crush on Claire.": function(message){
		"好吧。被你发现了。我看上了Claire。": function(message){
			n(message);
			Getting_A_Tutor_2();
		},
		// "I have a boyfriend.": function(message){
		"我有男朋友。": function(message){
			n(message);
			// f("Yes son! You're going to be a boyfriend!");
			f("没错儿子！你马上就要成为一个男朋友了！");
			// n("<i>Have</i>. I <i>have</i> a--");
			n("<i>有</i>。我说我<i>有</i>一个——");
			Getting_A_Tutor_2();
		}
	});

}

function Getting_A_Tutor_2(){
	
	// f("You're becoming a man, son!");
	f("你马上就要变成男人了，儿子！");
	// f("If I were your age, I ditch your mother and chase Claire, too! Haha!");
	f("我要是你的年龄，我可能就甩了你妈改去追Claire了！哈哈！");

	// n("That's totes weird, dude.");
	n("你这听起来很怪啊，大哥。");
	// f("Talking back? Careful, I'll box your ears, boy!");
	f("敢顶嘴？注意点，不然小心挨拳头，小子！");

	if($.changing_schools){
		// m("We were also thinking about changing schools for Nick.");
		m("我们也在想要不要给Nick转学。");
		// m("Maybe to Claire's school.");
		m("也许是Claire的学校。");
	}
	if($.studying_subject!=$.studying_subject_2){
		// m("Claire will be tutoring Nick every day after school in "+$.studying_subject+" and "+$.studying_subject_2+".");
		m("每天放学以后Claire会来给Nick辅导"+$.studying_subject+"和"+$.studying_subject_2+"。");
	}else{
		// m("Claire will be tutoring Nick every day after school in "+$.studying_subject+".");
		m("每天放学以后Claire会来给Nick辅导"+$.studying_subject+"。");
	}

	// f("Nick, how does all this sound? Yes or no?");
	f("Nick你觉得这个安排怎么样？同意还是不同意？");
	// m("He loves the ide--");
	m("他喜欢这个——");
	// f("Shut up, Qi. I asked my son.");
	f("闭嘴，齐，我在问我儿子。");
	// m(". . .");
	m("……");

	Show("dad","dad_threat");

	// f("Mister Nicklaus Liow.");
	f("Nicklaus Liow先生");
	if($.changing_schools){
		// f("You want to change schools to chase your hot tutor girlfriend?");
		f("你想要转学去追你的女神家教吗？");
	}else{
		// f("You want to spend all your after-school hours with your hot tutor girlfriend?");
		f("你想要把你的课余时间全部用来追你的女神吗？");
	}

	// n("It's complicated, I--");
	n("这不好说，我——");
	// f("No pansy middle-of-the-road answers.");
	f("不准打马虎眼。");
	// f("Yes. Or. No.");
	f("是，还是不是。");

	// n(". . .");
	n("……");

	// add 重要的抉择
	wait(2000)

	Choose({
		// "Yes.": Agree_With_Dad,
		"是。": Agree_With_Dad,
		// "No.": Argue_With_Dad
		"不是。": Argue_With_Dad
	});

}

function Agree_With_Dad(){
	
	// n("...Yes.");
	n("…是.");

	// f("Hm.");
	f("恩。");
	// f("You two seem to have made this big life decision very eagerly!");
	f("看来你迫不及待的想要做出这个重要的人生抉择啊。");
	// f("So eagerly, in fact, you made it in less than an hour, and tried to hide it from me. What a sudden change.");
	f("甚至都没花上一个小时来纠结，并且试着要瞒着我，变得真快啊。");
	// m(". . .");
	m("……");
	// n(". . .");
	n("……");

	// f("Nick, you did something naughty, didn't you?");
	f("Nick，你是不是惹什么事了。");
	// f("What did you do.");
	f("说，你干什么了。");

	Choose({
		// "I failed my midterms.": function(message){
		"我期中考试没及格。": function(message){
			
			n(message);

			// f("...Oh.");
			f("…哦。");
			// f("Yeah, you need to get your grades back up.");
			f("嗯，你得把你的成绩搞回来。");

			Show("dad","dad_serious");

			// f("Or you'll be stuck in a teaching job like your mother! Haha!");
			f("要不然你就得和你妈一样只能去教课了！哈哈！");
			// n(". . .");
			n("……");
			Agreeable_Ending();

		},
		// "I had sex with Jack.": function(message){
		"我和Jack已经做过了。": function(message){
			
			n(message);
			
			Show("mom","mom_cry");
			// m("[sob]");
			m("[抽泣]");
			// f(". . .");
			f("……");
			Argument_Ending();

		},
		// "I had sex with Claire.": function(message){
		"我和Claire已经做过了": function(message){
			
			n(message);
			
			// m("...Nick!");
			m("…Nick！");
			// f(". . .");
			f("……");
			// f("   Nnnnnniiiiiiiiice.");
			f("棒啊！！！真有你的！！");
			// m("...Dear!");
			m("…亲爱的！");
			// f("Wait, uh, you didn't get her pregnant, did you?");
			f("等一下，呃，你没让她怀上，对不对？");
			// n("No. I'm not stupid.");
			n("没有，我没那么傻。");
			
			Show("dad","dad_serious");

			// f("Good. Otherwise you'd be stuck for the next two decades raising a kid, like me! Haha!");
			f("不错，要不然你就得像我一样花上几年努力带孩子了。哈哈！");
			// n("Ha ha.");
			n("哈 哈。");
			Agreeable_Ending();

		}
	});

}

function Agreeable_Ending(){

	$.father_oblivious = true;

	// f("For a moment there, Nick, I thought you'd been smoking pot with your hippie classmate Jack, or something!");
	f("有那么一瞬间，Nick，我还以为你会和你那个颓废的Jack一起抽烟，或者干点别的呢！");

	Show("nicky","dinner_nicky_sit");
	// n(". . .");
	n("……");
	// f("So!");
	f("所以！");
	// f("Who wants to watch a movie this weekend? I hear Inception is good.");
	f("有没有人想在这周末去看电影啊？我听说盗梦空间挺不错的。");

	Choose({	
		// "Let's watch it! I haven't seen it yet.": function(message){
		"一块去吧！我还没看过呢。": function(message){
			n(message);
			// f("Then it's a plan!");
			f("那就这么定了！");
			// f("Hey Nick, you know who's acting in the movie?");
			f("嘿Nick，你猜这电影谁是主演？");
			// n("Um. Leonardo DiCaprio?");
			n("呃。Leonardo DiCaprio？");
			// f("No no, Ellen Page.");
			f("不不不，是Ellen Page");
			// f("Doesn't Claire look a little bit like her?");
			f("你不觉得Claire跟她长得挺像么？");
			// n("I guess.");
			n("也许吧。");
			Dinner_Ending();
		},
		// "Uh... let's do a different movie...": function(message){
		"呃…要不咱们换个别的看…": function(message){
			n(message);
			// f("What, Inception too complicated for you?");
			f("啥，盗梦空间对你而言太复杂了？");
			// n("Hey...");
			n("喂…");
			if($.studying_subject!=$.studying_subject_2){
				// f("Sure, I understand if you failed "+$.studying_subject+" and "+$.studying_subject_2+"...");
				f("要不然你怎么挂了"+$.studying_subject+"和"+$.studying_subject_2+"……");
			}else{
				// f("Sure, I understand if you failed "+$.studying_subject+"...");
				f("要不然你怎么挂了"+$.studying_subject+"……");
			}
			// f("But come on, this is a <i>movie</i>!");
			f("没事，不就是一个<i>电影</i>而已！");
			// f("You can't have inherited that much stupid from your mother's side! Haha!");
			f("你总不可能把你妈的智商基因全遗传过来吧！哈哈！");
			// n("Ha ha.");
			n("哈 哈。");
			Dinner_Ending();
		},
		// "Oh, I already saw Inception.": function(message){
		"盗梦空间啊，我已经看过了。": function(message){
			n(message);
			// f("Oh ho, I see...");
			f("哦哦，看来…");
			// f("You went on a little movie date with your special friend Claire, didn't you?");
			f("你和Clair已经出去约过电影了，对不对？");
			// n("Yeah.");
			n("是啊。");
			// n("A date with my special friend.");
			n("和我天命女友的约会。");
			Dinner_Ending();
		}
	});

}

function Argue_With_Dad(){

	// n("...No.");
	n("……不行。");

	// f("Excuse me?");
	f("你说什么？");
	// n("No. Mom's doing this so I can't see Jack anymore.");
	n("不行，要是我妈这么安排我就没法去见Jack了。");
	// f("Jack.");
	f("Jack。");
	// n("My friend.");
	n("我一个朋友。");

	Choose({
		// "My boyfriend.": function(message){
		"我男朋友。": function(message){
			
			n(message);

			Show("mom","mom_cry");
			// m("[sob]");
			m("[抽泣]");

			// m("Jack did this to our son!");
			m("Jack把咱们儿子掰弯了！");
			// f("That kid chose his lifestyle, but I will not have it be yours, Nick.");
			f("那个小屁孩想怎样是他的事，但是我不会让你跟他一样的，Nick。");
			Argument_Ending();
		},
		// "Mom hates him, coz he happens to be gay.": function(message){
		"妈讨厌他，因为他不巧是个同性恋。": function(message){

			n(message);

			Show("mom","mom_cry");
			// m("[sob]");
			m("[抽泣]");

			// f("You made your mother cry.");
			f("你让你妈伤心了。");
			if($.hippies){
				// m("And his parents are drug addicts!");
				m("而且他家长都在吸毒！");
			}
			// f("Jack chose that lifestyle, but I will not have it be yours, Nick.");
			f("那个小屁孩想怎样是他的事，但是我不会让你跟他一样的，Nick。");
			Argument_Ending();
		},
		// "Mom hates him, coz she THINKS he's gay.": function(message){
		"妈讨厌他，我妈<b>觉得</b>是个同性恋。": function(message){

			n(message);

			Show("mom","mom_cry");
			// m("[sob]");
			m("[抽泣]");

			// m("Jack IS gay!");
			m("Jack就<b>是</b>同性恋！");
			if($.hippies){
				// m("And his parents are drug addicts!");
				m("而且他家长都在吸毒！");
			}
			// f("Jack chose that lifestyle, but I will not have it be yours, Nick.");
			f("那个小屁孩想怎样是他的事，但是我不会让你跟他一样的，Nick。");
			Argument_Ending();
		}
	});

}

function Argument_Ending(){

	$.father_oblivious = false;

	// n(". . .");
	n("……");

	if($.top_or_bottom=="top"){
		// m("Jack acts like the woman, not him...");
		m("是Jack当那个女的，不是咱们儿子…");
	}
	switch($.what_are_you){
		case "bisexual":
			// m("Nick's not fully gay, he told me himself he's still attracted to girls!");
			m("Nick还没完全弯，他跟我说他自己还喜欢女孩！");
			// n(". . .");
			n("……");
			break;
		case "confused":
			// m("Earlier Nick told me he was just confused!");
			m("之前Nick告诉我他自己也拿不准！");
			// f("Oh, clearly he is.");
			f("哦，显然他确实拿不准。");
			// n(". . .");
			n("……");
			break;
		case "son":
			// n("Look, like I told Mom just now, I'm your SON, isn't that enou--");
			n("不是，就像我刚才跟我妈说的，我是你<b>儿子</b>，这还不够吗——");
			break;
	}
	
	// f("Nick, you're changing schools.");
	f("Nick，你必须得转学了。");
	// n(". . .");
	n("……");
	// m("huuu... huuu... huuu...");
	m("呜……呜……呜……");

	// f("Your mother and I will do random checks on your texts and emails.");
	f("我和你母亲将会不定期检查你的信息和邮箱。");
	// n(". . .");
	n("……");
	// m("owww... owww...");
	m("啊……啊……");

	// f("I swear, if I have to pay Claire extra to make you realize you're straight, I will.");
	f("我发誓，如果我能多付点钱来让Claire明白你是直的的话我肯定会掏的。");
	// n(". . .");
	n("……");

	// Show("mom","mom_sit");
	Show("mom","mom_sit");
	if($.crying=="anger"){
		// m("When I was crying earlier, he accused it of being fake!");
		m("我之前哭的时候他居然说我是装的！");
		// f("Qi, shut up. We're not talking about you.");
		f("齐，闭嘴，我们现在没说你。");
	}
	if($.crying=="mocking"){
		// m("When I was crying earlier, he was mocking it!");
		m("我之前哭的时候他居然说学我！");
		// f("Qi, shut up. We're not talking about you.");
		f("齐，闭嘴，我们现在没说你。");
	}

	// f("So Nick.");
	f("所以，Nick。");
	// f("Would you like to say anything, anything at all, about all that?");
	f("所以你要不要说点什么，说点关于这件事的。");

	Choose({
		// "Yes. Fuck this, and fuck you.": function(message){
		"去你的，爱怎么着怎么着": function(message){

			// n("Yes.");
			n("恩。");
			// n("FUCK this.");
			n("你爱怎么样怎么样。");
			// n("And FUCK you.");
			n("<b>去你的。</b>");
			
			Show("nicky","dinner_nicky_outrage");
			// n("Fuck BOTH of you, you narcissistic slimy pieces of SHI--");
			n("这家我呆够了，你们这群自——");
			
			Dinner_Ending_Punch();

		},
		// "No. I accept my punishment.": function(message){
		"不，我接受惩罚。": function(message){

			n(message);
			// f("Good. At least you're taking this like a man.");
			f("行啊，至少你像个男人一样承受了。");
			// n(". . .");
			n("……");

			Show("dad","dad_serious");

			// m("sniff...");
			m("[吸气]");
			// f("I'm going out to the bar, and getting something actually edible to eat.");
			f("我要出门了，找个饭馆吃点能吃的。");

			Show("dad",null);

			// f("Honey sweetie dear? Your cooking is shit.");
			f("亲爱的？你做的饭跟屎一样。");
			PlaySound("sfx","dinner_door");

			// m(". . .");
			m("……");
			
			Show("mom","mom_cry");

			// m("BAWWWWW");
			m("呜啊啊啊啊");
			
			Dinner_Ending();

		},
		// "You can't hurt me.": function(message){
		"你能把我怎么样。": function(message){

			n(message);
			// f(". . .");
			f("……");
			// m("Dear, no...");
			m("亲爱的，别……");
			// f("Mighty strong words, son.");
			f("你这话说的真重啊，儿子。");
			// m("Honey, please don't!");
			m("老公，千万别！");
			// f("At least you're standing up to me. Like a man.");
			f("至少你向我站出来了，像个男人一样。");
			// m("Please! It's my fault! Don't--");
			m("求你了！都是我的错！别——");
			// f("Ice keeps the swelling down.");
			f("话说到这里就够了。");
			// m("DEAR!");
			m("<b>老公！</b>");
			
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

