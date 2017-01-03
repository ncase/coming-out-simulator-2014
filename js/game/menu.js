function Start(){

	$ = {};
	
	/////// SET UP SCENE ////////

	Show("background","coffeehouse");
	Show("cup","cup_steam",{x:44,y:359});
	Show("nicky","coffee_nicky_still");

	PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	//////////////////////////////

	// N("<b>COMING OUT SIMULATOR 2014</b>");
	N("<b>出柜模拟2014</b>");
	// N("A half-true game about half-truths.");
	N("这是一个不太真实的游戏，取材于一个不太虚构的故事");
	// N("Hey there, player. Welcome to this game, I guess.");
	N("嘿，屏幕对面的。欢迎来到这个游戏。很高兴能给您带来大概20分钟的游戏时间……大概吧。");
	// N("What would you like to do now?");
	N("那么接下来你打算要做什么？");

	Choose({
		// "Let's play this thing!": Play,
		"咱们来直接开始玩吧": Play,
		// "Who are you? (Credits)": function(){
		"你是谁？（制作人员）": function(){
			Credits("你是谁？");
		},
		// "Hm, tell me more. (About This Game)": function(){
		"嗯，详细给我说明一下？（关于这个游戏）": function(){
			About("嗯，详细给我说明一下？");
		}
	});

}

function SipCoffee(message){
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);
	PlaySound("sfx","coffee_sip");
	p(message);
	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");
}

function Play(message){
	
	SipCoffee(message);

	// Asked neither
	if(!$.asked_about && !$.asked_credits){
		/*N("Jumping right into it! Great!");
		N("No messing around with reading the Credits or the About This Game sections or--");
		p("Shush.");
		N("Fine, fine.");*/
		N("直奔主题！可以！");
		N("完全不考虑看一看制作人员或者是关于游戏之类的--");
		p("嘘。");
		N("好好好。");
	}
	// Asked both
	if($.asked_about && $.asked_credits){
		// p("...");
		// p("Why did you make that a clickable option, when it was the only option left.");
		// N("NO IDEA");
		p("…");
		p("既然只有这一个选项为啥还要做出来让我去点。");
		N("<b>鬼知道为什么</b>");
	// Asked either
	}else if($.asked_about || $.asked_credits){
		// N("Yes, let's!");
		N("好了，咱们开始吧！");
	}

	// N("Let's travel back four years ago, to 2010...");
	// p("That was FOUR years ago?!");
	// N("...to the evening that changed my life forever.");

	// N("Tell me, dear player, how do you think this all ends?");
	N("首先我们来回到四年前，也就是2010年…");
	p("这是<b>四</b>年前的事？！");
	N("…那个改变了我一生的晚上.");

	N("那么你觉得，我亲爱的玩家，你觉得这个故事的结局是什么？");

	Choose({
		// "With flowers and rainbows and gay unicorns?": function(message){
		"鲜花彩虹之中基情四射地走向人生巅峰？": function(message){
			$.main_menu_convo_1 = 1;

			p(message);
			// N("Yes. That is exactly how this game ends.");
			// p("Really?");
			// N("No.");
			N("对，这就是这个游戏的结局。");
			p("真的吗？");
			N("其实不是。");
			Play_2();
		},
		// "Apparently, with you redditing at Starbucks.": function(message){
		"显然，也就是你在星巴克里刷贴吧。": function(message){
			$.main_menu_convo_1 = 2;

			p(message);
			// N("Hey, I'm coding on this laptop. Turning my coming-of-age story into the game you're playing right now.");
			// p("Naw, you're probably procrastinating.");
			// N("Look who's talking.");
			// p("Touché, douché.");
			// N("Anyway...");
			N("讲道理我现在正在堆代码。把我成人的故事变成你现在正在玩的游戏。");
			p("才不是，我看你就是在打发时间。");
			N("亏你有脸说别人。");
			p("得了吧。");
			N("随你怎么说…");
			Play_2();
		},
		// "IT ALL ENDS IN BLOOD": function(message){
		"<b>血腥的死路一条</b>": function(message){
			$.main_menu_convo_1 = 3;

			p(message);
			// N("Uh, compared to that, I guess my story isn't that tragic.");
			N("呃，相比之下，我觉得我的故事没有那么的悲剧。");
			// N("Although that's kind of a glass one-hundredths-full interpretation.");
			N("尽管这个故事里面有一丢丢的…");
			// p("blooooood.");
			p("血~~~");
			// N("Anyway...");
			N("好吧…");
			Play_2();
		}
	});

}

function Play_2(){

	if(!$.asked_about){
		// N("If you didn't skip the About This Game section, you'd know this is a very personal story.");
		N("如果你没跳过“关于游戏”那部分的话你就会知道这是个非常私人的故事。");
		// p("Shush.");
		p("嘘。");
	}

	// N("This game includes dialogue that I, my parents, and my ex-boyfriend actually said.");
	// N("As well as all the things we could have, should have, and never would have said.");
	// N("It doesn't matter which is which.");
	// N("Not anymore.");

	N("这个游戏包括我，我的父母，还有…这么说吧，我的前男友之间的对话。");
	N("包括了所有我们发生过的，应该发生的，和没能发生的对话。");
	N("无论哪个是哪个。");
	N("现在都不重要了。");

	Choose({
		// "How can I win a game with no right answers?": function(message){
		"没有正确选项我要怎么才能打通这个游戏啊？": function(message){
			$.main_menu_convo_2 = 2;

			p(message);
			// N("Exactly.");
			N("就是这个意思。");
			// p(". . .");
			p("……");
			Play_3();
		},
		// "You're a bit of a downer, aren't you?": function(message){
		"你这看起来有点悲观啊？": function(message){
			$.main_menu_convo_2 = 1;

			p(message);
			// N("LIFE is a bit of a downer.");
			N("生活本身就不是一件值得乐观的事。");
			// p("So that's a yes.");
			p("看来你确实是挺悲观的。");
			Play_3();
		},
		// "This 'true' game is full of lies?": function(message){
		"所以这个“不太真实的游戏”其实到处都是编的？": function(message){
			$.main_menu_convo_2 = 3;

			p(message);
			// N("Even if the dialogue was 100% accurate, it'd still be 100% lies.");
			N("就算游戏里的对话是完全准确的，那也还是编的。");
			// p(". . .");
			p("……");
			Play_3();
		}
	});

}

function Play_3(){

	// N("You'll be playing as me, circa 2010.");
	N("你将会扮演我，在大概2010年。");
	if(!$.asked_credits){
		// N("Because you skipped the Credits, my (not-yet-legal) name is Nicky Case. Just so you know.");
		N("因为你跳过了关于作者的部分，我简单提一下，我（暂时还没上户口本）的名字是Nicky Case。");
		// p("Shush.");
		p("嘘。");
	}

	var whatISay;
	switch($.main_menu_convo_1){
		// case 1: whatISay = "This game doesn't end with gay unicorns. "; break;
		case 1: whatISay = "这个游戏并没有基情四射的结局。"; break;
		// case 2: whatISay = "This game is a coming-out, a coming-of-age, a coming-to-terms. "; break;
		case 2: whatISay = "这个游戏讲了我出柜，成人，接受的故事。"; break;
		// case 3: whatISay = "This game ends not in blood, but in tears. "; break;
		case 3: whatISay = "这个游戏并没有血，只有泪。"; break;
	}
	switch($.main_menu_convo_2){
		// case 1: whatISay += "Sorry for being a bit of a downer."; break;
		case 1: whatISay += "很抱歉我之前有点悲观。"; break;
		// case 2: whatISay += "And there are no right answers."; break;
		case 2: whatISay += "并且这里没有正确答案。"; break;
		// case 3: whatISay += "And it's full of lies."; break;
		case 3: whatISay += "并且里面充满充斥着谎言。"; break;
	}
	N(whatISay);

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);

	// p("Hey, I just said that!");
	p("嘿，我就说过。");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);

	Wait(500);
	Show("nicky","coffee_nicky_throw");
	PlaySound("sfx","coffee_throw");
	
	Wait(1000);
	Show("nicky","coffee_nicky_still_2");
	Wait(500);
	
	// N("When you play...");
	// N("Choose your words wisely.");
	// N("Every character will remember everything you say. Or don't say.");
	// p("Yeah. You even brought up my choices in this MAIN MENU.");
	// N("Exactly.");

	// N(". . .");
	// N("Some things are hard not to remember.");

	N("你在玩的时候……");
	N("小心地选择你要说什么。");
	N("每个人都会记住你曾经说了什么，或者你没说什么。");
	p("是啊，甚至在这个<b>主菜单</b>里都体现出了这一点。");
	N("没错。");

	N("……");
	N("有些事真的很难忘记。");
	
	Clear();
	Start_Jack_1();

}

function Credits(message){

	$.asked_credits = true;
	
	if($.asked_about){
		SipCoffee(message);
	}else{
		// SipCoffee("Who are you?");
		SipCoffee("你是谁啊？");
	}
	
	// N("Ah, how rude of me! Let me introduce myself.");
	N("啊…看我多不会说话。先让我来自我介绍一下好了。");
	// N("Hi, I'm Nicky Case.");
	N("你好，我是Nicky Case。");
	// N("That's not my legal name, it's just my REAL name.");
	N("这不是我的户口本姓名,这只是我的<b>真</b>名而已。");

	// p("That's totes weird, dude.");
	p("你这话说的好奇怪啊，大兄弟。");
	if($.asked_about){
		// p("And like you just told me, this is your personal story?");
		p("所以就像你之前说的那样，这是个你个人的经历？");
	}else{
		// p("And you made this game?");
		p("所以你做了这个游戏？");
	}

	// N("Yep, I am the sole writer / programmer / artist of Coming Out Simulator 2014.");
	N("嗯，我是出柜模拟2014的唯一文案/程序/美工。");

	if($.asked_about){
		/*p("All of this yourself?");
		p("I said it before and I'll say it again...");
		p("Of course. You narcissist.");
		N("Well it's not ALL me.");
		N("The sounds & audio are from various public domain sources.");*/
		p("这些都是你自己一个人做的？");
		p("虽然我之前说过了但是我还是想说…");
		p("没错，你个自恋狂。");
		N("好吧也不<b>全</b>是我做的。");
		N("声音和音效都是来自多个公有领域的");
	}else{
		// N("The sounds & audio, though, are from various public domain sources.");
		N("不过声音和音效是来自多个公有领域的");
	}

	// N("But although it's mostly just me behind this game...");
	N("虽然，这个游戏基本全是我一个人做出来的…");
	// N("...there's a lot of people behind this game's story.");
	N("…但是，有不少人和这个游戏中的故事有牵连。");

	if($.asked_about){
		Choose({
			// "Speaking of which, let's play that! Now!": Play
			"说了这么多，我们现在开始玩吧！": Play
		});
	}else{
		Choose({
			// "Speaking of that, can we play it now?": Play,
			"扯了这么多，我们现在可以玩了吗？": Play,
			// "Why'd you make this? (About This Game)": function(){
			"你为什么做了这个游戏？（关于作者）": function(){
				About("你为什么做了这个游戏？");
			}
		});
	}

}

function About(message){

	$.asked_about = true;

	SipCoffee(message);

	if($.asked_credits){
		// N("I wanted to tell my story.");
		N("我想要讲一讲我自己身上的故事。");
	}else{
		// N("This game...");
		// N("...more like a conversation simulator, really...");
		// N("...is a very personal story.");
		N("这个游戏…");
		N("…更像是一个聊天模拟，讲的…");
		N("…真的是个很私人的故事");
	}
	
	// p("Of course. You narcissist.");
	// N("Ha, of course.");
	p("你个自恋狂。");
	N("哈，没错。");

	if($.asked_credits){
		// p("Actually no, a narcissist would use their real name.");
		// N("I told you, it IS my real na--");
		// p("Aight, aight. Weirdo.");
		p("其实也不是，一个自恋狂应该会用他的真名");
		N("我之前跟你说过了，这就<b>是</b>我的真名");
		p("好啦好啦，你个奇葩");
	}

	/*N("I made this game for the #Nar8 Game Jam. Gave me an excuse. And a deadline!");
	p("You procrastinated until the last day to enter, didn't you.");
	N("Yes.");
	N("Also! This game is uncopyrighted. Dedicated to the public domain.");
	N("I'm as open with my source code as I am with my sexuality.");

	p("Ugh, that's a terrible pun.");
	N("Howzabout a 'Fork Me' programming pun?");
	p("noooooo.");
	*/
	N("我做这个游戏是为了参加#Nar8 Game Jam。所以我有了一个动机，还有一条死线。");
	p("你一直拖到了最后一天才参加的，对不对。");
	N("对。");
	N("并且！这个游戏是没有版权的，属于公有领域。");
	N("就像我公开性取向一样公开源代码。");

	p("你这双关一点也不好。");
	N("那改成“Fork Me”这种程序员才懂的梗呢？");
	p("噫~~");

	if($.asked_credits){
		Choose({
			//"Let's just play this game already.": Play
			"让咱们现在开始玩这个游戏吧。": Play
		});
	}else{
		Choose({
			// "Bad puns aside, can we play now?": Play,
			"关于烂梗先一放,咱们能开始玩了吗?": Play,
			"所以你到底是谁?（制作人员）": function(){
				// Credits("So who ARE you?");
				Credits("所以你到底是谁？");
			}
		});
	}

}