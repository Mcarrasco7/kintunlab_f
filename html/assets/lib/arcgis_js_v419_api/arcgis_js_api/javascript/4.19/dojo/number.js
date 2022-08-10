//>>built
define(["./_base/lang","./i18n","./i18n!./cldr/nls/number","./string","./regexp"],function(r,q,v,t,p){var g={};r.setObject("dojo.number",g);g.format=function(a,b){b=r.mixin({},b||{});var c=q.normalizeLocale(b.locale);c=q.getLocalization("dojo.cldr","number",c);b.customs=c;c=b.pattern||c[(b.type||"decimal")+"Format"];return isNaN(a)||Infinity==Math.abs(a)?null:g._applyPattern(a,c,b)};g._numberPatternRE=/[#0,]*[#0](?:\.0*#*)?/;g._applyPattern=function(a,b,c){c=c||{};var d=c.customs.group,e=c.customs.decimal;
b=b.split(";");var f=b[0];b=b[0>a?1:0]||"-"+f;if(-1!=b.indexOf("%"))a*=100;else if(-1!=b.indexOf("\u2030"))a*=1E3;else if(-1!=b.indexOf("\u00a4"))d=c.customs.currencyGroup||d,e=c.customs.currencyDecimal||e,b=b.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/,function(l,h,m,k){return(l=c[["symbol","currency","displayName"][m.length-1]]||c.currency||"")?h+l+k:""});else if(-1!=b.indexOf("E"))throw Error("exponential notation not supported");var n=g._numberPatternRE;f=f.match(n);if(!f)throw Error("unable to find a number expression in pattern: "+
b);!1===c.fractional&&(c.places=0);return b.replace(n,g._formatAbsolute(a,f[0],{decimal:e,group:d,places:c.places,round:c.round}))};g.round=function(a,b,c){c=10/(c||10);return(c*+a).toFixed(b)/c};if(0==(.9).toFixed()){var u=g.round;g.round=function(a,b,c){var d=Math.pow(10,-b||0),e=Math.abs(a);if(!a||e>=d)d=0;else if(e/=d,.5>e||.95<=e)d=0;return u(a,b,c)+(0<a?d:-d)}}g._formatAbsolute=function(a,b,c){c=c||{};!0===c.places&&(c.places=0);Infinity===c.places&&(c.places=6);b=b.split(".");var d="string"==
typeof c.places&&c.places.indexOf(","),e=c.places;d?e=c.places.substring(d+1):0<=e||(e=(b[1]||[]).length);0>c.round||(a=g.round(a,e,c.round));a=String(Math.abs(a)).split(".");var f=a[1]||"";b[1]||c.places?(d&&(c.places=c.places.substring(0,d)),d=void 0!==c.places?c.places:b[1]&&b[1].lastIndexOf("0")+1,d>f.length&&(a[1]=t.pad(f,d,"0",!0)),e<f.length&&(a[1]=f.substr(0,e))):a[1]&&a.pop();e=b[0].replace(",","");d=e.indexOf("0");-1!=d&&(d=e.length-d,d>a[0].length&&(a[0]=t.pad(a[0],d)),-1==e.indexOf("#")&&
(a[0]=a[0].substr(a[0].length-d)));e=b[0].lastIndexOf(",");var n;if(-1!=e){var l=b[0].length-e-1;b=b[0].substr(0,e);e=b.lastIndexOf(",");-1!=e&&(n=b.length-e-1)}b=[];for(e=a[0];e;)d=e.length-l,b.push(0<d?e.substr(d):e),e=0<d?e.slice(0,d):"",n&&(l=n,n=void 0);a[0]=b.reverse().join(c.group||",");return a.join(c.decimal||".")};g.regexp=function(a){return g._parseInfo(a).regexp};g._parseInfo=function(a){a=a||{};var b=q.normalizeLocale(a.locale);b=q.getLocalization("dojo.cldr","number",b);var c=a.pattern||
b[(a.type||"decimal")+"Format"],d=b.group,e=b.decimal,f=1;if(-1!=c.indexOf("%"))f/=100;else if(-1!=c.indexOf("\u2030"))f/=1E3;else{var n=-1!=c.indexOf("\u00a4");n&&(d=b.currencyGroup||d,e=b.currencyDecimal||e)}b=c.split(";");1==b.length&&b.push("-"+b[0]);b=p.buildGroupRE(b,function(l){l="(?:"+p.escapeString(l,".")+")";return l.replace(g._numberPatternRE,function(h){var m={signed:!1,separator:a.strict?d:[d,""],fractional:a.fractional,decimal:e,exponent:!1};h=h.split(".");var k=a.places;1==h.length&&
1!=f&&(h[1]="###");1==h.length||0===k?m.fractional=!1:(void 0===k&&(k=a.pattern?h[1].lastIndexOf("0")+1:Infinity),k&&void 0==a.fractional&&(m.fractional=!0),!a.places&&k<h[1].length&&(k+=","+h[1].length),m.places=k);h=h[0].split(",");1<h.length&&(m.groupSize=h.pop().length,1<h.length&&(m.groupSize2=h.pop().length));return"("+g._realNumberRegexp(m)+")"})},!0);n&&(b=b.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/g,function(l,h,m,k){l=p.escapeString(a[["symbol","currency","displayName"][m.length-1]]||
a.currency||"");if(!l)return"";h=h?"[\\s\\xa0]":"";k=k?"[\\s\\xa0]":"";return a.strict?h+l+k:(h&&(h+="*"),k&&(k+="*"),"(?:"+h+l+k+")?")}));return{regexp:b.replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:d,decimal:e,factor:f}};g.parse=function(a,b){b=g._parseInfo(b);a=(new RegExp("^"+b.regexp+"$")).exec(a);if(!a)return NaN;var c=a[1];if(!a[1]){if(!a[2])return NaN;c=a[2];b.factor*=-1}c=c.replace(new RegExp("["+b.group+"\\s\\xa0]","g"),"").replace(b.decimal,".");return c*b.factor};g._realNumberRegexp=function(a){a=
a||{};"places"in a||(a.places=Infinity);"string"!=typeof a.decimal&&(a.decimal=".");"fractional"in a&&!/^0/.test(a.places)||(a.fractional=[!0,!1]);"exponent"in a||(a.exponent=[!0,!1]);"eSigned"in a||(a.eSigned=[!0,!1]);var b=g._integerRegexp(a),c=p.buildGroupRE(a.fractional,function(e){var f="";e&&0!==a.places&&(f="\\"+a.decimal,f=Infinity==a.places?"(?:"+f+"\\d+)?":f+("\\d{"+a.places+"}"));return f},!0),d=p.buildGroupRE(a.exponent,function(e){return e?"([eE]"+g._integerRegexp({signed:a.eSigned})+
")":""});b+=c;c&&(b="(?:(?:"+b+")|(?:"+c+"))");return b+d};g._integerRegexp=function(a){a=a||{};"signed"in a||(a.signed=[!0,!1]);"separator"in a?"groupSize"in a||(a.groupSize=3):a.separator="";var b=p.buildGroupRE(a.signed,function(d){return d?"[-+]":""},!0),c=p.buildGroupRE(a.separator,function(d){if(!d)return"(?:\\d+)";d=p.escapeString(d);" "==d?d="\\s":"\u00a0"==d&&(d="\\s\\xa0");var e=a.groupSize,f=a.groupSize2;return f?(d="(?:0|[1-9]\\d{0,"+(f-1)+"}(?:["+d+"]\\d{"+f+"})*["+d+"]\\d{"+e+"})",0<
e-f?"(?:"+d+"|(?:0|[1-9]\\d{0,"+(e-1)+"}))":d):"(?:0|[1-9]\\d{0,"+(e-1)+"}(?:["+d+"]\\d{"+e+"})*)"},!0);return b+c};return g});