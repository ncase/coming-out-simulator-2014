AudioFX = function() {

  //---------------------------------------------------------------------------

  var VERSION = '0.4.0';

  //---------------------------------------------------------------------------

  var hasAudio = false, audio = document.createElement('audio'), audioSupported = function(type) { var s = audio.canPlayType(type); return (s === 'probably') || (s === 'maybe'); };
  if (audio && audio.canPlayType) {
    hasAudio = {
      ogg: audioSupported('audio/ogg; codecs="vorbis"'),
      mp3: audioSupported('audio/mpeg;'),
      m4a: audioSupported('audio/x-m4a;') || audioSupported('audio/aac;'),
      wav: audioSupported('audio/wav; codecs="1"'),
      loop: (typeof audio.loop === 'boolean') // some browsers (FF) dont support loop yet
    }
  }

  //---------------------------------------------------------------------------

  var create = function(src, options, onload) {

    var audio = document.createElement('audio');

    if (onload) {
      var ready = function() {
        audio.removeEventListener('canplay', ready, false);
        onload();
      }
      audio.addEventListener('canplay', ready, false);
    }

    if (options.loop && !hasAudio.loop)
      audio.addEventListener('ended', function() { audio.currentTime = 0; audio.play(); }, false);

    audio.volume   = options.volume || 0.1;
    audio.autoplay = options.autoplay;
    audio.loop     = options.loop;
    audio.src      = src;

    return audio;
  }

  //---------------------------------------------------------------------------

  var choose = function(formats) {
    for(var n = 0 ; n < formats.length ; n++)
      if (hasAudio && hasAudio[formats[n]])
        return formats[n];
  };

  //---------------------------------------------------------------------------

  var find = function(audios) {
    var n, audio;
    for(n = 0 ; n < audios.length ; n++) {
      audio = audios[n];
      if (audio.paused || audio.ended)
        return audio;
    }
  };

  //---------------------------------------------------------------------------

  var afx = function(src, options, onload) {

    options = options || {};

    var formats = options.formats || [],
        format  = choose(formats),
        pool    = [];

    src = src + (format ? '.' + format : '');

    if (hasAudio) {
      for(var n = 0 ; n < (options.pool || 1) ; n++)
        pool.push(create(src, options, n == 0 ? onload : null));
    }
    else {
      onload();
    }

    return {

      audio: (pool.length == 1 ? pool[0] : pool),

      play: function() {
        var audio = find(pool);
        if (audio)
          audio.play();
      },

      stop: function() {
        var n, audio;
        for(n = 0 ; n < pool.length ; n++) {
          audio = pool[n];
          audio.pause();
          audio.currentTime = 0;
        }
      }
    };

  };

  //---------------------------------------------------------------------------

  afx.version   = VERSION;
  afx.supported = hasAudio;

  return afx;

  //---------------------------------------------------------------------------

}();

