﻿// Plot points:
// Trying to stay overnight.
// Reveal - hippie parents, reading poetry, ...(?)
// Threats -- date your tutor, changing school(?)
// He's distracting you. Movie & Hippies.
// Oh my god, you've been reading my texts!...

function Start_Dinner_3(){

	n("妈。");

	Choose({
		"所以我才要接着和Jack一起学习。": Tutor,
		"你看到了，我已经很努力了。真的。": Tutor,
		"我的成绩还不错啊。": Tutor
	});

}

function Tutor(message){

	n(message);
	m("我在担心你。Jack对你没什么好的影响。");

	if($.hippies){
		m("我甚至觉得他的家人可能会去吸毒。");
		n("为什么你会这么想——");
	}else if($.im_a_poet){
		m("他只是在调戏你而已。");
		n("为什么你会这么想——");
	}
	
	m("我准备给你请个家教。");
	n("……啥？");

	if($.studying_subject!=$.studying_subject_2){
		m("她会辅导你的"+$.studying_subject+"和"+$.studying_subject_2+"。");
	}else{
		m("她会辅导你的"+$.studying_subject+"。");
	}

	m("她叫Claire。挺聪明的，长得又漂亮，是个白种人。并且她跟你一个年纪。");

	Choose({
		"你在阻止我去见Jack吗？": Tutor_Seeing,
		"你想要撮合我和她？": Tutor_Matchmake,
		"我们能待会再谈辅导的问题吗？": Tutor_Forget
	});

}

function Tutor_Seeing(message){
	n(message);
	m("我没听清，你说你去<i>见</i>Jack？");
	m("你这说话的语气让人听起来…");
	
	Choose({
		"像是我们在约会？对啊没错。": function(message){
			n(message);
			m("……");
			n("……");
			n("……嗯？");
			m("……");
			n("怎么了？");
			m("……");
			Threat_School();
		},
		"只是普通的见面而已。": function(message){
			n(message);
			m("嗯，我只是确认一下而已。");
			n("恩。");
			m("……");
			m("Claire长得真的很可爱。");
			n("可以啊。");
			m("她的胸发育的也不错。");
			Threat_Tutor();
		},
		"我们<b> 不 </b>是 <b>男朋友</b>关系。": function(message){
			n(message);
			m("……");
			m("好。");
			m("不过我们也没说你们是，但是……好吧。");
			n("我们只是朋友。");

			if($.relationship=="friend"){
				m("“好哥们”。");
			}
			if($.relationship=="best friend"){
				m("“最好的朋友”。");
			}

			Threat_Tutor();

		}
	});
}

function Tutor_Matchmake(message){
	n(message);
	m("好。既然你也是这么想的话，我可以帮你。");
	n("不！");
	m("别害羞！你就要变成大人了。");
	m("我还指望你们俩给我抱孙子呢。");

	Choose({
		"等等！我到现在甚至都还没见过她。": function(message){
			n(message);
			m("只是现在！");
			m("她明天就会过来。");
			n("啊？但是我已经很Jack说好——");
			m("我已经替你烫好衣服了，你得给她留下一个好的第一印象。");
			Threat_Tutor();
		},
		"这概率只有一半而已，因为我是个双。": function(message){

			$.admit_bisexuality = true;

			n(message);
			m("呃。双？…");

			Show("nicky","dinner_nicky_defiant");

			n("对，我是<b>双性恋</b>。");
			n("就是说<b>无论男女我都可能会喜欢上</b>。");
			m("…………");
			n("…………");
			Threat_School();
		},
		"不，我不会想要孩子的。": function(message){
			n(message);
			m("等你长大了你会改的。");
			m("生儿育女是一件很美妙的事，你的孩子会跟你长得一样的！");
			n("…当然了，你这么自恋。");
			m("你说什么？");
			n("没什么。");
			m("…………");
			Threat_Tutor();
		}
	});
}

function Tutor_Forget(message){
	n(message);
	m("不能，因为我已经安排好了让Claire明天过来。");
	n("啥？！");
	n("不行，我已经和Jack说话好了明天和他一起。");
	m("……");
	m("你们俩明天会在一起多长时间。");

	Choose({
		"要过夜。": function(message){
			n(message);
			m("……");
			n("……");
			n("恩？");
			n("在好朋友家过夜没什么奇怪的啊？");
			m("……");
			Threat_School();
		},
		"只是一下午。": function(message){
			n(message);
			if($.lying_about_hanging_out){
				m("我早就知道，我发现你在说谎了。");
				n("呃？");
			}else{
				m("…我就知道。");
			}
			m("你们俩只是出去玩了。");
			Threat_Tutor();
		},
		"大概一两个小时吧。": function(message){
			n(message);
			m("只有一两个小时能学到什么。");
			if($.lying_about_hanging_out){
				m("我早就知道，我发现你在说谎了。");
				n("呃？");
			}
			m("你们俩只是出去玩了。");
			Threat_Tutor();
		}
	});
}

function Threat_Tutor(){
	
	Show("nicky","dinner_nicky_defiant");
	
	n("…………");
	m("Claire从明天开始，每天都会在你放学之后过来辅导。");

	Choose({
		"每天？！那我的朋友怎么办？！":function(message){
			n(message);
			m("宝贝，我就是你的朋友啊！");
			n("…………");
			m("Claire也能当你的朋友，甚至不止于朋友。");
			n("……");
			n("还有别的事吗？");
			m("还有……最后一件事。");
			Plot_Twist();
		},
		"好吧，我周末至少没有安排，对吧？": function(message){
			n(message);
			m("对。");
			n("好，没别的需要说的了吧？");
			m("……恩。");
			n("……");
			m("还有……最后一件事。");
			Plot_Twist();
		},
		"要是我<b>不去</b>和Claire一起学习呢？": function(message){
			n(message);
			m("也行啊，如果你也想和她一块出去玩的话也不是不行。");
			m("只要你能更男人一点。");
			n("呃。");
			m("哦对了。");
			m("还有一件事。");
			Plot_Twist();
		}
	});

}

function Threat_School(){

	$.changing_schools = true;
	
	m("你要转学了。");

	Show("nicky","dinner_nicky_outrage");

	n("<b>什么？！</b>");
	m("我觉得不只是Jack，整个学校对你的影响都不太好。");
	n("<b>你认真的吗。</b>");
	m("整个加拿大文化都让你有点摸不清自己。");

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"不！那是你的亚洲文化，那是退步！": function(message){
			n(message);
			m("你会不会说话！");
			m("而且那<b>也是你的</b>文化。");
			n("……");
			Plot_Twist();
		},
		"你不能这么对待你的<b>孩子</b>！": function(message){
			n(message);
			m("你会不会说话！");
			m("我是你的<b>母亲</b>，我有权利对你做任何事。");
			n("……");
			Plot_Twist();
		},
		"那又怎样，<b>每个</b>学校都有奇怪的人。": function(message){
			n(message);
			m("你会不会说话！");
			m("看看吧，实在不行我可以改成全部家教。");
			n("……");
			Plot_Twist();
		}
	});

}

function Plot_Twist(){

	m("昨天，也就是你本来应该和Jack一起学习的那段时间。");
	m("我知道你们偷偷去看电影了。");

	Show("nicky","dinner_nicky_sit");
	n("……");

	Show("clock_time","clock_1920");

	Choose({
		"我的天。你居然偷看我短信。": function(message){
			n(message);
			m("没错。你看要是你没跟Jack在一起的话你有多聪明。");
			Plot_Twist_2();
		},
		"没有，我们是在学习。": function(message){
			n(message);
			m("你还真是固执。");
			m("我看了你们发的信息。");
			Plot_Twist_2();
		},
		"你为什么这么想？": function(message){
			n(message);
			m("因为我翻了你的短信。");
			Plot_Twist_2();
		}
	});

}

function Plot_Twist_2(){

	n("……");
	m("晚饭之前我在你房间里。");

	// Dinner_1
	m("你在楼下喊“"+$.what_you_called_out+"”的时候，我划开了你的手机。");
	m("然后看了你和Jack发给你的短信。");
	m("我是你的母亲，我有权利这么做。");

	n("……");

	if($.im_a_poet){
		m("挺有诗意啊？");
	}
	if($.hippies){
		m("讨论怎么抽大麻？");
	}
	if($.im_a_poet || $.hippies){
		m("教你怎么骗你的母亲？");
		m("你们背着我还干了什么？");
	}

	Choose({
		"这肯定是场噩梦。": function(message){
			n(message);
			m("就像“盗梦笔记”一样？");
			n("那个…那个叫“盗梦空间”。");
			m("别跟我顶嘴。");
			Plot_Twist_3();
		},
		"对不起。真的。": function(message){
			n(message);
			m("我原谅你。");
			m("你是我的孩子，我肯定会原谅你。");
			Plot_Twist_3();
		},
		"我讨厌你。": function(message){
			n(message);
			m("没关系。");
			m("我仍然爱你，Nick。");
			Plot_Twist_3();
		},
	});

}

function Plot_Twist_3(){
	Start_Dinner_4();
}
