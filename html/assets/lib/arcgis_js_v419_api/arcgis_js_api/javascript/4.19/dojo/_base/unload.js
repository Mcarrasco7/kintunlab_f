//>>built
define(["./kernel","./lang","../on"],function(a,g,b){var c=window,f={addOnWindowUnload:function(d,e){a.windowUnloaded||b(c,"unload",a.windowUnloaded=function(){});b(c,"unload",g.hitch(d,e))},addOnUnload:function(d,e){b(c,"beforeunload",g.hitch(d,e))}};a.addOnWindowUnload=f.addOnWindowUnload;a.addOnUnload=f.addOnUnload;return f});