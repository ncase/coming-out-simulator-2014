
Loader = (function() {

  var load_cursor = 0;
  var load_queue;

  var loadFinished = function() {
    load_cursor ++;
    if (load_cursor < load_queue.length) {
      loadScript();
    }
  }

  function loadError (oError) {
    console.error("The script " + oError.target.src + " is not accessible.");
  }


  var loadScript = function() {
    var url = load_queue[load_cursor];
    var script = document.createElement('script');
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                loadFinished();
            }
        };
    } else {  //Others
        script.onload = function(){
            loadFinished();
        };
    }

    script.onerror = loadError;

    script.src = url+'?'+'time='+Date.parse(new Date());
    document.body.appendChild(script);
  };

  var loadMultiScript = function(url_array) {
    load_cursor = 0;
    load_queue = url_array;
    loadScript();
  }
  return {load: loadMultiScript,};

})();  // end Loader

//loading ...
 $.language = "SChinese";
 switch($.language){
	case "SChinese": Loader.load([
        'js/game/menu_zh-cn.js',
        'js/game/jack_1_zh-cn.js',
        'js/game/dinner_1_zh-cn.js',
        'js/game/dinner_2_zh-cn.js',
        'js/game/dinner_3_zh-cn.js',
        'js/game/dinner_4_zh-cn.js',
        'js/game/dinner_5_zh-cn.js',
        'js/game/jack_2_zh-cn.js',
        'js/game/outro_zh-cn.js'
    	]);break;
    case "English": Loader.load([
        'js/game/menu.js',
        'js/game/jack_1.js',
        'js/game/dinner_1.js',
        'js/game/dinner_2.js',
        'js/game/dinner_3.js',
        'js/game/dinner_4.js',
        'js/game/dinner_5.js',
        'js/game/jack_2.js',
        'js/game/outro.js'
    	]);break;

    }