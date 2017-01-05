// Dad's home!
// Calm conversation about going to the movies.
// Mother brings up tutoring and/or school. (if you try to bring anyting up, it'll skip to this.)
// Argue or agree?
// Everything in the past hour comes crashing back.
// You can attempt to blame them, too. (but they justify it all)
// Agree (calm dinner) --- Stressed Dinner, storms off --- Punches you in the damn face.

function Start_Dinner_5(){

	PlaySound("sfx","dinner_door");
	
	f("齐颖啊！还有Nick！");
	f("我到家啦！");
	
	Show("dad","dad_serious");

	m("啊亲爱的。");
	n("爹啊。今天过得怎么样？");

	f("留下来加班了。希望老板别在我绩效审核之前发现。");
	f("不过实际上我今天一整天都在玩你做的小游戏。哈哈！");
	n("哈 哈 。");

	f("Nick，为什么<i>你的</i>小游戏没一个好玩的？");

	Choose({
		"我觉得我的小游戏挺好玩的啊…": function(message){
			n(message);
			f("好吧！看来你不知道什么叫好玩的游戏，是不是。哈哈！");
			n("……");
			Casual();
		},
		"不是所有游戏都是要有意思的。": function(message){
			n(message);
			f("啊对，你说的没错。");
			f("<b>垃圾</b>游戏一点都不好玩。哈哈！");
			n("……");
			Casual();
		},
		"那叫<b>艺术！</b>": function(message){
			n(message);
			f("切。艺术有什么用。");
			f("是不是接下来你就要去写诗或者是其他什么东西了？");
			n("……");
			Casual();
		}
	});

}

function Casual(){
	
	f("齐啊，你盘子里那个是什么？");
	f("呃…");

	Show("clock_time","clock_1950");

	Choose({
		"那是呕吐出来的。": function(message){
			
			n(message);

			$.grounded = 2;
			f("Nick！一个星期内不准出门！");
			f("你怎么能这么说你妈做的饭。");
			f("她做的饭本身就够打击人的了。哈哈！");

			Casual_2();

		},
		"别吃！那个，呃，不太好。": function(message){
			
			n(message);

			$.grounded = 1;
			f("Nick！明天一天不准出门！");
			f("不知道尊重家长吗？就这么对你妈做的饭没信心吗！");
			f("她的厨艺能做成这样已经很不容易了！哈哈！");

			Casual_2();

		},
		"爸，你为啥不试试呢？": function(message){
			
			n(message);

			$.grounded = 0;
			m("Nick……");
			f("那我尝了啊！");
			f("[吃了一勺]");
			f("……");
			n("……");
			m("……");
			f("好吧，你这饭做的还是这么烂，哼？哈哈！");

			Casual_2();

		}
	});

}

function Casual_2(){
	
	m("亲爱的…");
	f("所以，儿子啊！今天学校怎么样？");

	Choose({
		"学校今天还好啦。": function(message){

			n(message);

			f("真的？还好？");
			if($.studying_subject!=$.studying_subject_2){
				f("那你的"+$.studying_subject+"和"+$.studying_subject_2+"成绩怎么解释？");
			}else{
				f("那你的"+$.studying_subject+"成绩怎么解释？");
			}

			m("Nick跟我刚才已经说过了。");
			Getting_A_Tutor();

		},
		"我明天要去朋友那里学习。": function(message){
			n(message);

			$.tried_talking_about_it = true;

			if($.grounded>0){

				if($.grounded==1){
					f("你忘了吗？你明天不准出门。");
				}
				if($.grounded==2){
					f("你忘了吗？你这周不准出门。");
				}
				f("整天跟你妈在一块人都变傻了。哈哈！");
				
				n("呃。我……");

				$.grounded++;
				if($.grounded==2){
					f("我改主意了，你现在一周不许出门。");
				}
				if($.grounded==3){
					f("我改主意了，你现在<b>两</b>周不许出门。");
				}

			}

			m("说到学习…");
			Getting_A_Tutor();

		},
		"<b>爸我要和Jack在一起因为我是双性恋！</b>": function(message){
			$.tried_talking_about_it = true;

			Show("nicky","dinner_nicky_outrage");
			n("<b>爸我要和J——</b>");
			Show("nicky","dinner_nicky_sit");

			m("<b>要</b>从下周开始每天骑自行车上学");
			f("哦好啊！");
			f("这样你就能多减减肥了，要不然你以后怎么找女朋友？");
			f("不然你就得和你妈一样胖了。哈哈！");
			n("哈 哈 。");
			m("说到学校…");
			Getting_A_Tutor();
		}

	});

}

function Getting_A_Tutor(){

	m("我们在讨论请一个家教。");
	f("哦？是那个叫Claire的小孩吧！");

	// Oh dang!
	Show("nicky","dinner_nicky_defiant");

	switch($.promise_silence){
		case "yes":
			n("妈，我们说好的不谈这个事…");
			if($.tried_talking_about_it){
				m("你<i>刚刚</i>不是已经要谈了吗？");
			}
			break;
		case "no":
			n("你说过了我们不讨论这个的…");
			m("是你没保证不谈的。");
			break;
		case "tit for tat":
			n("你不是说只要我不谈你就…");
			if($.tried_talking_about_it){
				m("你<i>刚刚</i>不是已经要谈了吗？");
			}
			break;
	}

	f("谈什么？…");
	f("我是一家之主，你们俩在最好别背着我藏什么。");
	m("啊…只是Nick真的真的非常喜欢Claire。");

	Choose({
		"啥？！我不喜欢！": function(message){
			n(message);
			f("别害羞。");
			Getting_A_Tutor_2();
		},
		"好吧。被你发现了。我看上了Claire。": function(message){
			n(message);
			Getting_A_Tutor_2();
		},
		"我有男朋友。": function(message){
			n(message);
			f("没错儿子！你马上就要成为一个男朋友了！");
			n("<i>有</i>。我说我<i>有</i>一个——");
			Getting_A_Tutor_2();
		}
	});

}

function Getting_A_Tutor_2(){
	
	f("你马上就要变成男人了，儿子！");
	f("我要是你的年龄，我可能就甩了你妈改去追Claire了！哈哈！");

	n("你这听起来很怪啊，大哥。");
	f("敢顶嘴？注意点，不然小心挨拳头，小子！");

	if($.changing_schools){
		m("我们也在想要不要给Nick转学。");
		m("也许是Claire的学校。");
	}
	if($.studying_subject!=$.studying_subject_2){
		m("每天放学以后Claire会来给Nick辅导"+$.studying_subject+"和"+$.studying_subject_2+"。");
	}else{
		m("每天放学以后Claire会来给Nick辅导"+$.studying_subject+"。");
	}

	f("Nick你觉得这个安排怎么样？同意还是不同意？");
	m("他喜欢这个——");
	f("闭嘴，齐，我在问我儿子。");
	m("……");

	Show("dad","dad_threat");

	f("Nicklaus Liow先生");
	if($.changing_schools){
		f("你想要转学去追你的女神家教吗？");
	}else{
		f("你想要把你的课余时间全部用来追你的女神吗？");
	}

	n("这不好说，我——");
	f("不准打马虎眼。");
	f("是，还是不是。");

	n("……");

	wait(2000)

	Choose({
		"是。": Agree_With_Dad,
		"不是。": Argue_With_Dad
	});

}

function Agree_With_Dad(){
	
	n("…是.");

	f("恩。");
	f("看来你迫不及待的想要做出这个重要的人生抉择啊。");
	f("甚至都没花上一个小时来纠结，并且试着要瞒着我，变得真快啊。");
	m("……");
	n("……");

	f("Nick，你是不是惹什么事了。");
	f("说，你干什么了。");

	Choose({
		"我期中考试没及格。": function(message){
			
			n(message);

			f("…哦。");
			f("嗯，你得把你的成绩搞回来。");

			Show("dad","dad_serious");

			f("要不然你就得和你妈一样只能去教课了！哈哈！");
			n("……");
			Agreeable_Ending();

		},
		"我和Jack已经做过了。": function(message){
			
			n(message);
			
			Show("mom","mom_cry");
			m("[抽泣]");
			f("……");
			Argument_Ending();

		},
		"我和Claire已经做过了": function(message){
			
			n(message);
			
			m("…Nick！");
			f("……");
			f("棒啊！！！真有你的！！");
			m("…亲爱的！");
			f("等一下，呃，你没让她怀上，对不对？");
			n("没有，我没那么傻。");
			
			Show("dad","dad_serious");

			f("不错，要不然你就得像我一样花上几年努力带孩子了。哈哈！");
			n("哈 哈。");
			Agreeable_Ending();

		}
	});

}

function Agreeable_Ending(){

	$.father_oblivious = true;

	f("有那么一瞬间，Nick，我还以为你会和你那个颓废的Jack一起抽烟，或者干点别的呢！");

	Show("nicky","dinner_nicky_sit");
	n("……");
	f("所以！");
	f("有没有人想在这周末去看电影啊？我听说盗梦空间挺不错的。");

	Choose({	
		"一块去吧！我还没看过呢。": function(message){
			n(message);
			f("那就这么定了！");
			f("嘿Nick，你猜这电影谁是主演？");
			n("呃。Leonardo DiCaprio？");
			f("不不不，是Ellen Page");
			f("你不觉得Claire跟她长得挺像么？");
			n("也许吧。");
			Dinner_Ending();
		},
		"呃…要不咱们换个别的看…": function(message){
			n(message);
			f("啥，盗梦空间对你而言太复杂了？");
			n("喂…");
			if($.studying_subject!=$.studying_subject_2){
				f("要不然你怎么挂了"+$.studying_subject+"和"+$.studying_subject_2+"……");
			}else{
				f("要不然你怎么挂了"+$.studying_subject+"……");
			}
			f("没事，不就是一个<i>电影</i>而已！");
			f("你总不可能把你妈的智商基因全遗传过来吧！哈哈！");
			n("哈 哈。");
			Dinner_Ending();
		},
		"盗梦空间啊，我已经看过了。": function(message){
			n(message);
			f("哦哦，看来…");
			f("你和Clair已经出去约过电影了，对不对？");
			n("是啊。");
			n("和我天命女友的约会。");
			Dinner_Ending();
		}
	});

}

function Argue_With_Dad(){

	n("……不行。");

	f("你说什么？");
	n("不行，要是我妈这么安排我就没法去见Jack了。");
	f("Jack。");
	n("我一个朋友。");

	Choose({
		"我男朋友。": function(message){
			
			n(message);

			Show("mom","mom_cry");
			m("[抽泣]");

			m("Jack把咱们儿子掰弯了！");
			f("那个小屁孩想怎样是他的事，但是我不会让你跟他一样的，Nick。");
			Argument_Ending();
		},
		"妈讨厌他，因为他不巧是个同性恋。": function(message){

			n(message);

			Show("mom","mom_cry");
			m("[抽泣]");

			f("你让你妈伤心了。");
			if($.hippies){
				m("而且他家长都在吸毒！");
			}
			f("那个小屁孩想怎样是他的事，但是我不会让你跟他一样的，Nick。");
			Argument_Ending();
		},
		"妈讨厌他，我妈<b>觉得</b>是个同性恋。": function(message){

			n(message);

			Show("mom","mom_cry");
			m("[抽泣]");

			m("Jack就<b>是</b>同性恋！");
			if($.hippies){
				m("而且他家长都在吸毒！");
			}
			f("那个小屁孩想怎样是他的事，但是我不会让你跟他一样的，Nick。");
			Argument_Ending();
		}
	});

}

function Argument_Ending(){

	$.father_oblivious = false;

	n("……");

	if($.top_or_bottom=="top"){
		m("是Jack当那个女的，不是咱们儿子…");
	}
	switch($.what_are_you){
		case "bisexual":
			m("Nick还没完全弯，他跟我说他自己还喜欢女孩！");
			n("……");
			break;
		case "confused":
			m("之前Nick告诉我他自己也拿不准！");
			f("哦，显然他确实拿不准。");
			n("……");
			break;
		case "son":
			n("不是，就像我刚才跟我妈说的，我是你<b>儿子</b>，这还不够吗——");
			break;
	}
	
	f("Nick，你必须得转学了。");
	n("……");
	m("呜……呜……呜……");

	f("我和你母亲将会不定期检查你的信息和邮箱。");
	n("……");
	m("啊……啊……");

	f("我发誓，如果我能多付点钱来让Claire明白你是直的的话我肯定会掏的。");
	n("……");

	Show("mom","mom_sit");
	if($.crying=="anger"){
		m("我之前哭的时候他居然说我是装的！");
		f("齐，闭嘴，我们现在没说你。");
	}
	if($.crying=="mocking"){
		m("我之前哭的时候他居然说学我！");
		f("齐，闭嘴，我们现在没说你。");
	}

	f("所以，Nick。");
	f("所以你要不要说点什么，说点关于这件事的。");

	Choose({
		"去你的，爱怎么着怎么着": function(message){

			n("恩。");
			n("你爱怎么样怎么样。");
			n("<b>去你的。</b>");
			
			Show("nicky","dinner_nicky_outrage");
			n("这家我呆够了，你们这群自——");
			
			Dinner_Ending_Punch();

		},
		"不，我接受惩罚。": function(message){

			n(message);
			f("行啊，至少你像个男人一样承受了。");
			n("……");

			Show("dad","dad_serious");

			m("[吸气]");
			f("我要出门了，找个饭馆吃点能吃的。");

			Show("dad",null);

			f("亲爱的？你做的饭跟屎一样。");
			PlaySound("sfx","dinner_door");

			m("……");
			
			Show("mom","mom_cry");

			m("呜啊啊啊啊");
			
			Dinner_Ending();

		},
		"你能把我怎么样。": function(message){

			n(message);
			f("……");
			m("亲爱的，别……");
			f("你这话说的真重啊，儿子。");
			m("老公，千万别！");
			f("至少你向我站出来了，像个男人一样。");
			m("求你了！都是我的错！别——");
			f("话说到这里就够了。");
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

