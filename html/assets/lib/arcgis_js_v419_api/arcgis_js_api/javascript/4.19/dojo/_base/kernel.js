//>>built
define(["../global","../has","./config","require","module"],function(f,h,l,k,b){var e,c={},m={},a={config:l,global:f,dijit:c,dojox:m};c={dojo:["dojo",a],dijit:["dijit",c],dojox:["dojox",m]};b=k.map&&k.map[b.id.match(/[^\/]+/)[0]];for(e in b)c[e]?c[e][0]=b[e]:c[e]=[b[e],{}];for(e in c)b=c[e],b[1]._scopeName=b[0],l.noGlobals||(f[b[0]]=b[1]);a.scopeMap=c;a.baseUrl=a.config.baseUrl=k.baseUrl;a.isAsync=k.async;a.locale=l.locale;f="$Rev:$".match(/[0-9a-f]{7,}/);a.version={major:1,minor:16,patch:3,flag:"",
revision:f?f[0]:NaN,toString:function(){var d=a.version;return d.major+"."+d.minor+"."+d.patch+d.flag+" ("+d.revision+")"}};h("csp-restrictions")||Function("d","d.eval \x3d function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}")(a);a.exit=function(){};h("host-webworker");"undefined"!=typeof console||(console={});f="assert count debug dir dirxml error group groupEnd info profile profileEnd time timeEnd trace warn log".split(" ");var g;for(h=0;g=f[h++];)console[g]?console[g]=
Function.prototype.bind.call(console[g],console):function(){var d=g+"";console[d]="log"in console?function(){var n=Array.prototype.slice.call(arguments);n.unshift(d+":");console.log(n.join(" "))}:function(){};console[d]._fake=!0}();a.deprecated=a.experimental=function(){};a._hasResource={};return a});