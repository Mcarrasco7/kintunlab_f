// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../core/maybe ../../../intl/date ../../../Color ../../../renderers/visualVariables/SizeVariable ../../../renderers/support/numberUtils ../../../renderers/support/utils".split(" "),function(k,r,v,t,u,w,x){k.formatDateLabel=function(a){return v.formatDate(new Date(a),x.timelineDateFormatOptions)};k.formatNumberLabel=function(a){return w.format(a)};k.getDeviationValues=function(a,c,d){if(!r.isSome(c)||!r.isSome(a))return[];const g=[];for(let b=-1*d;b<=d;b++)0!==b&&g.push(c+b*a);
return g};k.getDynamicPathForSizeStops=function(a){const {max:c,min:d,padding:g,pathHeight:b,pathWidth:e,stops:f}=a,m=c-d;let h=`M0 0 L${e} 0 `,l;a=3===f.length?[f[0],f[1],f[2]]:[f[0],f[2],f[4]];const n=Math.min.apply(Math,a.map(p=>p.size)),y=Math.max(Math.abs(a[0].size-a[1].size),Math.abs(a[2].size-a[1].size));a.reverse();a.forEach(({size:p,value:q},z)=>{q=Math.round(b-(q-d)/m*b);l=Math.round((p-n)/y*100)/100*e;0===l&&(l=g*e);0===z&&(h+=`L${l} 0 `);h+=`L${l} ${q} `});return h+=`L${l} ${b} L0 ${b} L0 0 Z`};
k.getFillFromColor=function(a){return a instanceof t?a.toCss(!0):t.fromString(a).toCss(!0)};k.getPathForSizeStops=function(a){const {bottomValue:c,bottomWidth:d,max:g,min:b,pathHeight:e,pathWidth:f,topValue:m,topWidth:h}=a;a=h*f;const l=d*f,n=g-b;return`M${a} 0 L${a} ${Math.round(e-(m-b)/n*e)} L${l} ${Math.round(e-(c-b)/n*e)} L${l} ${e} L0 ${e} L0 0 Z`};k.getSizesFromVariable=function(a){let c=a.maxSize;a=a.minSize;c instanceof u&&(c=c.stops[0].size);a instanceof u&&(a=a.stops[0].size);return[c,a]};
k.getStopChanges=function(a,c,d){const g=d.length-1,b=d[0],e=d[g]-b,f=c-a,m=[];for(let h=1;h<g;h++)m.push({index:h,value:(d[h]-b)/e*f+a});m.unshift({index:0,value:a});m.push({index:g,value:c});return m};Object.defineProperty(k,"__esModule",{value:!0})});