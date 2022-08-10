self.webpackChunkRemoteClient([88],{268:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return f})),t.d(n,"d",(function(){return p})),t.d(n,"e",(function(){return _})),t.d(n,"f",(function(){return l}));var r=t(9);const a=new RegExp("__begin__","ig"),s=new RegExp("__end__","ig"),u=new RegExp("^__begin__","i"),i=new RegExp("__end__$","i");function l(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function o(e){const n={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(n.expression=e.labelExpressionInfo.value,n.type="conventional"):e.labelExpressionInfo.expression&&(n.expression=e.labelExpressionInfo.expression,n.type="arcade"):null!=e.labelExpression&&(n.expression=e.labelExpression.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}"),n.type="conventional"),n}function c(e){const n=o(e);if(!n)return null;switch(n.type){case"conventional":return f(n.expression);case"arcade":return n.expression}return null}function p(e){const n=o(e);if(!n)return null;switch(n.type){case"conventional":return function(e){const n=e.match(d);return n&&n[1].trim()||null}(n.expression);case"arcade":return _(n.expression)}return null}function f(e){let n;return e?(n=Object(r.c)(e,e=>'__begin__$feature["'+e+'"]__end__'),n=u.test(n)?n.replace(u,""):'"'+n,n=i.test(n)?n.replace(i,""):n+'"',n=n.replace(a,'" + ').replace(s,' + "')):n='""',n}const d=/^\s*\{([^}]+)\}\s*$/i,x=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,b=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,g=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function _(e){if(!e)return null;let n=x.exec(e)||b.exec(e);return n?n[1]||n[3]:(n=g.exec(e),n?n[2]:null)}},462:function(e,n,t){"use strict";t.r(n),t.d(n,"createLabelFunction",(function(){return d})),t.d(n,"formatField",(function(){return x}));t(11),t(17),t(1),t(19),t(4),t(6);var r=t(0),a=(t(9),t(3),t(7),t(15),t(16),t(12),t(2),t(10),t(8)),s=(t(5),t(13),t(42),t(14),t(48),t(43),t(47),t(45),t(44),t(21),t(46),t(57),t(58)),u=(t(51),t(52),t(49),t(54),t(50),t(65),t(63),t(62),t(60),t(61),t(67),t(59),t(64),t(78),t(71),t(79),t(80),t(82),t(95)),i=t(89),l=t(268),o=t(211);const c=r.a.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},f={getAttribute:(e,n)=>e.field(n)};async function d(e,n,r){if(!e||!e.symbol)return p;const s=e.where,d=Object(l.a)(e),b=s?await Promise.resolve().then(t.bind(null,271)):null;let g;if("arcade"===d.type){const e=await Object(u.c)(d.expression,r,n);g={type:"arcade",evaluate(n){try{const t=e.evaluate({$feature:"attributes"in n?e.repurposeFeature(n):e.repurposeAdapter(n)});if(null!=t)return t.toString()}catch(e){c.error(new a.a("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:n,expression:d}))}return null},needsHydrationToEvaluate:()=>null==Object(l.e)(d.expression)}}else g={type:"simple",evaluate:e=>d.expression.replace(/{[^}]*}/g,t=>{const r=t.slice(1,-1),a=Object(i.h)(n,r);if(!a)return t;let s=null;return"attributes"in e?e&&e.attributes&&(s=e.attributes[a.name]):s=e.field(a.name),null==s?"":x(s,a)})};if(s){let t;try{t=b.WhereClause.create(s,new o.a(n))}catch(e){return p}const r=g.evaluate;g.evaluate=e=>{const n="attributes"in e?void 0:f;return t.testFeature(e,n)?r(e):null}}return g}function x(e,n){if(null==e)return"";const t=n.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){const n=e;for(const e of t.codedValues)if(e.code===n)return e.name}else if("range"===t.type){const n=+e,r="range"in t?t.range[0]:t.minValue,a="range"in t?t.range[1]:t.maxValue;if(r<=n&&n<=a)return t.name}let r=e;return"date"===n.type||"esriFieldTypeDate"===n.type?r=Object(s.a)(r,Object(s.c)("short-date")):Object(i.k)(n)&&(r=Object(s.d)(+r)),r||""}}});