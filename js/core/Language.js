
function getJS(url) {
    return new Promise(function(resolve, reject) {
        var script = document.createElement('script');
        script.type = "text/javascript";

        if (script.readyState){  //IE
            script.onreadystatechange = function() {
                if (script.readyState == "loaded" ||
                        script.readyState == "complete") {
                    script.onreadystatechange = null;
                    resolve('success: '+url);
                }
            };
        } else {  //Others
            script.onload = function(){
                resolve('success: '+url);
            };
        }

        script.onerror = function() {
            reject(Error(url + 'load error!'));
        };

        script.src = url+'?'+'time='+Date.parse(new Date());
        document.body.appendChild(script);

    });
}

//loading
var main ='js/main.js',
	init ='js/init.js',
	menu ='js/game/menu.js',
    jack_1 ='js/game/jack_1.js',
    dinner_1 ='js/game/dinner_1.js',
    dinner_2 ='js/game/dinner_2.js',
    dinner_3 ='js/game/dinner_3.js',
    dinner_4 ='js/game/dinner_4.js',
    dinner_5 ='js/game/dinner_5.js',
    jack_2 ='js/game/jack_2.js',
    outro ='js/game/outro.js'
	menu_SChinese = 'js/game/menu_zh-cn.js',
    jack_1_SChinese ='js/game/jack_1_zh-cn.js',
    dinner_1_SChinese ='js/game/dinner_1_zh-cn.js',
    dinner_2_SChinese ='js/game/dinner_2_zh-cn.js',
    dinner_3_SChinese ='js/game/dinner_3_zh-cn.js',
    dinner_4_SChinese ='js/game/dinner_4_zh-cn.js',
    dinner_5_SChinese ='js/game/dinner_5_zh-cn.js',
    jack_2_SChinese ='js/game/jack_2_zh-cn.js',
    outro_SChinese ='js/game/outro_zh-cn.js'
;

Choose({
	"English": function(message){
        Promise.all([getJS(menu), getJS(jack_1)],getJS(dinner_1),getJS(dinner_2),getJS(dinner_3),getJS(dinner_4),getJS(dinner_5),getJS(jack_2),getJS(outro)).then(function(results){
           return getJS(init);
        }).then(function(msg){
            console.log(msg);
        });

	},
	"Simplified Chinese": function(message){
        Promise.all([getJS(menu_SChinese), getJS(jack_1_SChinese)],getJS(dinner_1_SChinese),getJS(dinner_2_SChinese),getJS(dinner_3_SChinese),getJS(dinner_4_SChinese),getJS(dinner_5_SChinese),getJS(jack_2_SChinese),getJS(outro_SChinese)).then(function(results){
           return getJS(init);
        }).then(function(msg){
            console.log(msg);
        });
	}
});
