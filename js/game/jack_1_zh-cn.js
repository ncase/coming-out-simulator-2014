// PLOT BEATS:
// 1) In medias res talking about Inception
// 2) Thanks for movie, we still up to stay over tomorrow night?
// 3) You need to stop hiding... // Can't even CALL.
// Weave in previous bits of convo pieces.
// Also, FULL CIRCLE with the Inception!
// OKAY, TOO CONVOLUTED, CUT OUT THE DIFFERENT FAMILIES & TYPO parts.

$ = {};

function Start_Jack_1(){
	
	/////// SET UP SCENE ////////

	Show("background","bedroom");
	Show("us","bedroom_us_1");
	Show("light","bedroom_light_1",{x:0,y:159});

	PlaySound("bg","bedroom_1",{loop:-1});

	/////////////////////////////

	// j("And when he simply announces,");
	j("然后他平静地说出了：");
	// j("'I bought the airline.'");
	j("“我买下了航空公司”");
	// j("That was positively priceless!");
	j("那可要花上一大笔钱");
	// n("Is that what he said?");
	n("他是那么说的？");
	// n("I missed out what everyone in the theater was laughing about.");
	n("当时剧院里每个人都在笑搞得我什么都没听清");
	// j("You either need subtitles, or to clean your ears more often.");
	j("你要么是需要字幕，要么就是该掏耳朵了。");
	// j("So how did you interpret the ending?");
	j("那结局你怎么解释");

	Choose({
		// "It was totally all a dream.": Inception_Dream,
		"这些全都是一场梦": Inception_Dream,
		// "He's got to be back in the real world!": Inception_Awake,
		"他回到现实世界了？": Inception_Awake,
		// "Doesn't matter. Cobbs just finally let go.": Inception_Neither
		"没啥，柯布终于放手了": Inception_Neither
	});

}

function Inception_Dream(message){

	$.inception_answer = "dream";

	n(message);
	// j("So his entire redemption story was a lie?");
	j("所以他自我救赎的故事整个都是编的？");
	// n("A big fat lie.");
	n("一个弥天大谎");
	// j("You're a bit of a downer, aren't you?");
	j("你这人有点悲观啊，是不是?");

	Choose({
		// "Yup, I'm just a sad sack of sadness.": Sadsack,
		"嗯，我就是个悲伤至极的爱哭鬼": Sadsack,
		// "Sometimes... but not when I'm with you.": function(message){
		"纵使悲情满胸怀，莫使贵人多挂念": function(message){
			$.im_a_poet = true;

			n(message);
			// j("Ah Nicky, you amateur poet.");
			j("啊Nicky，你这诗写的可以啊");
			// n("Get me some french breads and wine,");
			n("来给我开瓶红酒");
			// n("Coz that's got to be the cheesiest thing I've ever said.");
			n("因为这可能是你听过我说的最优雅的东西了");
			// j("Apologize for nothing.");
			j("抱歉我这啥都没有");
			// n("Anywho...");
			n("不管怎么说吧…");
			Thanks();
		},
		// "I'm just a realist.": function(message){
		"我只是很现实而已": function(message){
			$.hippies = true;

			n(message);
			// j("You need more positive thinking in your life.");
			j("你需要多想想好的方面");
			// n("And YOU need to stop being such a new-age hippie.");
			n("你也需要别这么“颓废”");
			// n("Anywho...");
			n("不管怎么说吧…");
			Thanks();
		}
	});

}
function Inception_Awake(message){

	$.inception_answer = "awake";
	$.im_a_poet = true;

	n(message);
	// n("Otherwise, the whole movie would've all just been a lie.");
	n("不然的话，只能说整部电影全都是在撒谎了");
	// n("What's the point of living a lie?");
	n("尽为诳语则万物皆虚");
	// j("Ah Nicky, you amateur poet.");
	j("啊Nicky，你这是准备要写诗啊");
	// j("I take it you liked the film?");
	j("我觉得你大概应该喜欢这个电影吧？");

	Choose({
		// "Aw yiss. Yes I did.": function(message){
		"没错,我超喜欢的": function(message){
			n(message);
			Thanks();
		},
		// "Mehhh, it was a tad confusing at times.": function(message){
		"呃，除了有些地方很让人看不懂": function(message){
			n(message);
			// j("I believe that was the purpose.");
			j("我觉得这电影是故意这么设计的");
			// n("Mission accomplished, then.");
			n("那他这任务圆满完成了");
			// n("Anywho...");
			n("不管怎么说吧…");
			Thanks();
		},
		// "BWOOOOOOOOOOONG": function(message){
		"无~~~~~~~~聊": function(message){
			n(message);
			// j("I'll interpret that as a yes.");
			j("我就当成是了");
			Thanks();
		}
	});

}
function Inception_Neither(message){

	$.inception_answer = "neither";

	n(message);
	// j("Oh?");
	j("哦？");
	// n("He didn't even bother looking to see if the top fell!");
	n("他甚至都不打算看看上面是不是掉下来了");
	// n("Lies, truths, or half-truths... Cobbs no longer cares.");
	n("真相啦，骗局啦，虚虚实实啦…柯布都不在乎");
	// n("He's finally happy, and that's all that matters.");
	n("重点是，他最后很开心，除此之外都不重要");
	// j("You either are being quite poetic, or quite depressing.");
	j("你要么是很有诗意，要么就是超级悲观");

	Choose({
		// "I'm a poet, and I didn't even know it.": function(message){
		"你要不说我还没发现我挺有诗意的": function(message){

			$.im_a_poet = true;

			// n("I'm a poet,");
			n("我可能是个诗人");
			// n("and I wasn't even aware of the fact.");
			n("我自己甚至都没注意");
			// j("You're a lyrical miracle, the evidence is empircal.");
			j("我的阅历告诉我你在抒情能力上无出其右");
			// n("That's hysterical.");
			n("那是歇斯底里");
			// n("Anywho...");
			n("不管怎么说吧…");
			Thanks();

		},
		// "Nah, I'm just a sad sack of sadness.": Sadsack,
		"我只是超级悲观而已": Sadsack,
		// "Or both.":function(message){
		"两个都有吧":function(message){

			$.hippies = true;
			$.im_a_poet = true;

			n(message);
			// n("POETRY IS PAIN. ART IS SUFFERING.");
			n("诗出于悲痛之呻吟，艺出于苦楚之抒怀");
			// j("You sound like my mother.");
			j("你怎么听着和我妈一样");
			// n("Your parents are <i>such</i> new-age hippies.");
			n("你家长已经<i>颓废</i>到一定程度了.");
			// n("Anywho...");
			n("不管怎么说吧…");
			Thanks();

		}
	});

}

function Sadsack(message){
	
	$.sadsack = true;

	n(message);
	// j("Aw, sorry to hear that.");
	j("呃…你没必要这么说啊…");
	// j("I hope our little date at the movies cheered you up?");
	j("我还是希望咱们这次出门看电影能稍微激励你一下");
	// n("Sure did!");
	n("当然有！");
	Thanks();

}

function Thanks(){
	
	// n("So yeah! Thanks for taking me out to watch Inception!");
	n("嗯没错，谢谢你带我出去看盗梦空间");
	// j("My pleasure, Nicky.");
	j("也谢谢你能陪我，Nicky");
	// j("You should parody Inception in that odd web game of yours!");
	j("你应该在你之前那个奇怪的游戏里面讽刺一下盗梦空间");
	// n("Mmm, maybe maybe.");
	n("嗯…也许吧");
	// n("Let's meet again tomorrow evening!");
	n("所以我们明天晚上再见面？");

	// j("Although...");
	j("虽然…");
	// n("Hope I can convince the parents to let me out overnight.");
	n("我希望我能说服我家长能让我在外面过夜");

	// j("I wish you didn't tell your mom and dad we were just studying, when we were actually at the cinema.");
	j("我更希望你告诉你爸妈我们是出去看电影了，而不是在一块学习。");
	// n("I'll pretend we'll be cramming for the midterms all nigh-- huh?");
	n("我会假装我们在为了期中考试彻夜复习的…呃？");

	// j("You can't keep hiding like this.");
	j("你没法一直隐瞒下去的");
	// n("Jack...");
	n("Jack…");

	Choose({
		// "They can never, ever know.": function(message){
		"他们永远都不会知道的": function(message){
			$.coming_out_readiness="no";
			n(message);
			// j("Really, never?");
			j("真的？永远？");
			Hiding();
		},
		// "I wish I could tell them, too.": function(message){
		"我其实也想告诉他们": function(message){
			$.coming_out_readiness="yes";
			n(message);
			Hiding();
		},
		// "I'm not ready to tell them yet.": function(message){
		"我还没准备好告诉他们": function(message){
			$.coming_out_readiness="maybe";
			n(message);
			// j("I can help you be ready.");
			j("我可以帮你准备");
			Hiding();
		}
	});

}

function Hiding(){

	// j("Nicky, hiding like this is eating away at your soul.");
	j("Nicky，一直这么藏下去会让你寝食难安的");

	if($.inception_answer=="awake"){
		// j("Like you said, what's the point of living a lie?");
		j("就像你之前说的，活在谎言里面还有什么意义？");
	}
	if($.inception_answer=="dream"){
		// j("It's... how'd you put it... 'a big fat lie'?");
		j("这也就是你说的……弥天大谎？");
	}

	if($.sadsack){
		// j("When you said just now you're a sadsack?");
		j("你刚才说你很悲观的时候");
		// j("I know you weren't joking. Not really.");
		j("我就知道你没在开玩笑，至少不全是。");
	}

	// n("Jack, come on.");
	n("得了吧Jack");
	// j("I came out to my parents last year.");
	j("我去年的时候就出柜了");
	if($.hippies){
		// n("That's NOT a fair comparison.");
		n("你这个比较<b>没有</b>任何意义");
		// n("LIKE I SAID, you and your parents are a bunch of new-age hippies.");
		n("就像我说过的那样，你和你家长都超级颓废");
		// n("When I'm at your place, I can't tell if all the smoke is incense or marijuana.");
		n("要是我是你的话，我甚至都分不清他们是一边抽大麻还是一边抽烟然后一边听你说的");
		// j("Hey! We only smoke weed every other day!");
		j("喂！我们每隔一天才哈一次草");
		// n("Heh.");
		n("呃");
		// j("The point is, my parents supported my coming out.");
		j("重点是，我家长支持我出柜");
	}else{
		// j("And they were very supportive!");
		j("而且他们还<b>很</b>支持");
	}

	// j("You're in Canada now. A lot of people here are LGBT friendly.");
	j("你现在人都在加拿大了，很多人对LGBT团体都很友好");
	// j("How do you know your parents won't be supportive of you, too?");
	j("你怎么就知道你家长不支持呢？");

	Choose({
		// "Asian parents are usually very homophobic.": Hiding_2,
		"亚洲的家长一般都很反感同性恋": Hiding_2,
		// "I don't know... I guess I haven't tried...": Hiding_2,
		"我不知道…我觉得我都没试过…": Hiding_2,
		// "They don't support anything but STUDYING.": Hiding_2
		"除了<b>学习</b>之外他们什么都不会支持的": Hiding_2
	});

}

function Hiding_2(message){
	
	n(message);

	if($.coming_out_readiness=="no"){
		// n("Again... They can never, ever know.");
		n("再说一遍，他们永远都不会知道的");
	}

	// j("You have trust issues.");
	j("你可能在信任上有点问题");
	// j("You're even texting me instead of calling...");
	j("你甚至都只是在和我打字聊天而不是直接打电话过来");
	// j("...because you think your parents might listen in.");
	j("…因为你觉得你父母可能会偷听到");

	// n("They would!");
	n("他们真的会的！");

	// j("This mode of communication.");
	j("你们这种交流方式");
	// j("It's imprecise, impersonal, impossible to truly connect.");
	j("语焉不详，势合形离，无以羁绊");

	if($.im_a_poet){
		// n("Heh. You're an amateur poet like me, apparently.");
		n("呃…你看来和我一样也是个诗人啊");
	}else{
		// n("It's not too bad...");
		n("还不算太糟啦…");
	}

	if($.coming_out_readiness=="yes"){
		// j("You yourself just said you wish you could tell them.");
		j("你自己也说了你想告诉他们");
		// j("Tell them.");
		j("那就告诉他们吧");
	}else{
		j("Nicky.");
	}
	// j("Tell them about us. Tonight.");
	j("今天晚上就跟他们说");

	Choose({
		// "Tonight?! Heck no.": Hiding_3,
		"今晚？得了吧！": Hiding_3,
		// "Sigh... I'll try my best.": Hiding_3,
		"唉…我尽量吧": Hiding_3,
		// "I'll just carefully hint at it.": Hiding_3
		"我会小心的点出来的": Hiding_3
	});

}

function Hiding_3(message){
	
	n(message);
	// j(". . .");
	j("……");
	// n("I don't want to freak them out too much.");
	n("我不想吓到他们");
	// n("Still need to convince them to let me stay at your place tomorrow night.");
	n("而且仍然还需要说服他们能让我明天晚上在外面过夜");
	// n("I'll tell 'em I'm studying with you again.");
	n("我会告诉他们我还是在跟你一起学习的");
	// j(". . .");
	j("……");
	// n("It's dinnertime. I'm heading downstairs now.");
	n("到吃饭时间了，我要下楼了");

	// j("Hey... I agree.");
	j("其实……我挺赞同的");
	// n("Huh?");
	n("呃？");
	// j("With your thoughts on the movie ending, that is.");
	j("关于你关于电影结局的想法");
	switch($.inception_answer){
		// case "dream": j("I think Cobbs was still dreaming, living a lie."); break;
		case "dream": j("我觉得柯布仍然在做梦，活在谎言之中"); break;
		// case "awake": j("I think Cobbs reconnected with his real family, in the real world."); break;
		case "awake": j("我觉得柯布重新回到了真实世界，找回了他真正的家庭"); break;
		// case "neither": j("I think it doesn't matter, as long as Cobbs is happy."); break;
		case "neither": j("我觉得都不重要，只要柯布开心就好了"); break;
	}
	// n("Oh.");
	n("哦");
	// j("Okay.");
	j("嗯");
	if($.coming_out_readiness=="maybe"){
		// j("Hope you changed your mind about being 'not ready to tell them yet'.");
		j("希望这能帮你改变你那个“还没准备好”的想法");
	}
	// j("Good luck. Text me in an hour.");
	j("祝你好运，一个小时之内给我回话");

	var insult = "";
	if($.hippies) insult+="颓废的家伙";
	if($.im_a_poet) insult+="大诗人";
	// n("See ya.");
	n("回见");
	if(insult!=""){
		// n("You"+insult+".");
		n("你个"+insult);
	}else{
		// n("You goof.");
		n("你个小笨蛋");
	}

	Jack_1_End();

}

function Jack_1_End(){
	Clear();
	Start_Dinner_1();
}