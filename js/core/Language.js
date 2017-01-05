
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
		getJS(menu).then(function(msg){
    	return getJS(jack_1);
		}).then(function(msg){
    	return getJS(dinner_1);
		}).then(function(msg){
    	return getJS(dinner_2);
		}).then(function(msg){
    	return getJS(dinner_3);
		}).then(function(msg){
    	return getJS(dinner_4);
		}).then(function(msg){
    	return getJS(dinner_5);
		}).then(function(msg){
    	return getJS(jack_2);
		}).then(function(msg){
    	return getJS(outro);
		}).then(function(msg){
		return getJS(init);
		}).then(function(msg){
    	console.log(msg);
		});
	},
	"Simplified Chinese": function(message){
		getJS(menu_SChinese).then(function(msg){
    	return getJS(jack_1_SChinese);
		}).then(function(msg){
    	return getJS(dinner_1_SChinese);
		}).then(function(msg){
    	return getJS(dinner_2_SChinese);
		}).then(function(msg){
    	return getJS(dinner_3_SChinese);
		}).then(function(msg){
    	return getJS(dinner_4_SChinese);
		}).then(function(msg){
    	return getJS(dinner_5_SChinese);
		}).then(function(msg){
    	return getJS(jack_2_SChinese);
		}).then(function(msg){
    	return getJS(outro_SChinese);
		}).then(function(msg){
		return getJS(init);
		}).then(function(msg){
    	console.log(msg);
		});
	}
});
