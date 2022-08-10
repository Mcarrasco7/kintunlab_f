// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/promiseUtils ../../../../support/arcadeOnDemand ../../../../tasks/support/ClassBreaksDefinition ../../../../tasks/support/generateRendererUtils ../../utils ../../../../renderers/support/heatmapUtils".split(" "),function(m,M,N,O,P,t,E){function F(a,b,c){b=null==b?-Infinity:b;c=null==c?Infinity:c;return a.filter(d=>null!=d&&u(d)&&d>=b&&d<=c)}async function w(a,b){const c=a.field,d="function"===typeof c,e=a.valueExpression,g=a.normalizationType,h=a.normalizationField,
k=a.normalizationTotal,f=[];a=a.view;let l=null,q=null;if(e){if(!v){const {arcadeUtils:p}=await N.loadArcade();v=p}l=v.createFunction(e);q=a&&v.getViewInfo({viewingMode:"2d"===a.type?"map":a.viewingMode,scale:a.scale,spatialReference:a.spatialReference})}if(!b)return f;b.forEach(p=>{var r=p.attributes;if(e){var n=v.createExecContext(p,q);n=v.executeFunction(l,n)}else d?n=c.call(null,p):r&&(n=r[c]);g&&null!=n&&u(n)&&(r=r&&parseFloat(r[h]),p=n,n=null,"log"===g&&0!==p?n=Math.log(p)*Math.LOG10E:"percent-of-total"===
g&&u(k)&&0!==k?n=p/k*100:"field"===g&&u(r)&&0!==r?n=p/r:"natural-log"===g&&0<p?n=Math.log(p):"square-root"===g&&0<p&&(n=p**.5));f.push(n)});return f}function Q(a,b){let c=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY,e=null,g=null;var h=null;let k=null;for(var f of a)e+=f,c=Math.min(c,f),d=Math.max(d,f);if(f=a.length){g=e/f;h=0;for(const l of a)h+=(l-g)**2;k=b?1<f?h/(f-1):0:0<f?h/f:0;h=Math.sqrt(k)}else d=c=null;return{avg:g,count:f,max:d,min:c,stddev:h,sum:e,variance:k}}function G(a){const b=
a.field,c=a.classificationMethod||"equal-interval",d=a.normalizationType,e=a.normalizationField,g=new O;g.classificationField=b;g.breakCount=a.breakCount;g.classificationMethod=c;g.standardDeviationInterval="standard-deviation"===c?a.standardDeviationInterval||1:void 0;g.normalizationType=d;g.normalizationField="field"===d?e:void 0;return g}function H(a,b){let c=b.classBreaks;const d=c[0].minValue,e=c[c.length-1].maxValue,g="standard-deviation"===a.classificationMethod,h=R;c=c.map(k=>{const f=k.label;
k={minValue:k.minValue,maxValue:k.maxValue,label:f};if(g&&f){const l=f.match(h).map(q=>+q.trim());2===l.length?(k.minStdDev=l[0],k.maxStdDev=l[1],0>l[0]&&0<l[1]&&(k.hasAvg=!0)):1===l.length&&(-1<f.indexOf("\x3c")?(k.minStdDev=null,k.maxStdDev=l[0]):-1<f.indexOf("\x3e")&&(k.minStdDev=l[0],k.maxStdDev=null))}return k});return{minValue:d,maxValue:e,classBreakInfos:c,normalizationTotal:b.normalizationTotal}}function B(a,b,c){const d=(b-a)/c,e=[];let g;for(let h=1;h<=c;h++)g=a+d,g=Number(g.toFixed(16)),
e.push([a,h===c?b:g]),a=g;return e}function I(a){const {field:b,normalizationType:c,normalizationField:d,normalizationTotal:e,layer:g}=a;a=t.isIntegerField(g,b);let h=b;"percent-of-total"===c?h=`((${a?t.castIntegerFieldToFloat(b):b} / ${e}) * 100)`:"log"===c?h=`(log(${b}) * ${S})`:"field"===c?h=`(${a?t.castIntegerFieldToFloat(b):b} / ${d})`:"natural-log"===c?h=`(log(${a?t.castIntegerFieldToFloat(b):b}))`:"square-root"===c&&(h=`(power(${a?t.castIntegerFieldToFloat(b):b}, 0.5))`);return h}function T(a,
b){let c=-1;for(let d=a.length-1;0<=d;d--)if(b>=a[d][0]){c=d;break}return c}function J(a,b){let c;b=b.toLowerCase();if(a)for(const d in a)if(d.toLowerCase()!==b){c=a[d];break}return c}function C(a,b){let c;b=b.toLowerCase();if(a)for(const d in a)if(d.toLowerCase()===b){c=a[d];break}return c}function D(a,b){if(b)for(const c in a)a[c].label=b[c];return{count:a}}function K(a,b,c){const d=a.count;a=[];c&&b&&"coded-value"===b.type&&b.codedValues.forEach(e=>{e=e.code;d.hasOwnProperty(e)||(d[e]={data:e,
count:0})});for(const e in d)b=d[e],a.push({value:b.data,count:b.count,label:b.label});return{uniqueValueInfos:a}}function u(a){return"number"===typeof a&&!isNaN(a)&&Infinity!==a&&-Infinity!==a}const U=/_value$/i,R=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,S=Math.LOG10E,L="min max avg stddev count sum variance".split(" ");let v=null;m.calculateClassBreaksFromMemory=async function(a,b){var c=a.normalizationTotal;const d=G({field:a.field,normalizationType:a.normalizationType,normalizationField:a.normalizationField,
classificationMethod:a.classificationMethod,standardDeviationInterval:a.standardDeviationInterval,breakCount:a.numClasses||5});b=await w(a,b);b=F(b,a.minValue,a.maxValue);c=P.createGenerateRendererClassBreaks({definition:d,values:b,normalizationTotal:c});return H(a,c)};m.calculateHeatmapStats=function(a,b=10,c,d,e,g){const h=new Float64Array(e*g),k=E.createKernel(b);b=Math.round(3*b);let f=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;var q=0;let p=0,r=0,n=0;c=E.createValueFunction(d,c);for(const {geometry:y,
attributes:V}of a){a=y.x-b;d=y.y-b;const W=Math.max(0,a);q=Math.max(0,d);const X=Math.min(g,y.y+b),Y=Math.min(e,y.x+b),Z=+c(V);for(let z=q;z<X;z++){const aa=k[z-d];for(let A=W;A<Y;A++){q=z*e+A;var x=h[q];q=h[q]+=aa*k[A-a]*Z;x=q-x;p+=x;r+=x*x;q<f&&(f=q);q>l&&(l=q);n++}}}return n?{mean:p/n,stdDev:Math.sqrt((r-p*p/n)/n),min:f,max:l,mid:(l-f)/2,count:n}:{mean:0,stddev:0,min:0,max:0,mid:0,count:0}};m.calculateHistogramFromMemory=async function(a,b,c){const {min:d,max:e,normTotal:g}=b,h=a.numBins||10,k=
b.intervals||B(d,e,h);b=k.map((f,l)=>({minValue:k[l][0],maxValue:k[l][1],count:0}));a=await w(a,c);for(const f of a)null!=f&&f>=d&&f<=e&&(a=T(k,f),-1<a&&b[a].count++);return{bins:b,minValue:d,maxValue:e,normalizationTotal:g}};m.calculateStatsFromMemory=async function(a,b,c){b=await w(a,b);b=F(b,a.minValue,a.maxValue);const d=Q(b,!a.normalizationType);c&&["avg","stddev","variance"].forEach(e=>{null!=d[e]&&(d[e]=Math.ceil(d[e]))});return d};m.calculateUniqueValuesFromMemory=async function(a,b,c){b=
await w(a,b);const d={};for(let e of b){if(null==e||"string"===typeof e&&""===e.trim())e=null;null==d[e]?d[e]={count:1,data:e}:d[e].count++}return K({count:d},c,a.returnAllCodedValues)};m.createCBDefn=G;m.createUVResult=K;m.generateBinParams=function(a){const b=[],c=a.classBreaks,d=c[0].minValue,e=c[c.length-1].maxValue;c.forEach(g=>{b.push([g.minValue,g.maxValue])});return{min:d,max:e,intervals:b,sqlExpr:I({field:a.field,normalizationType:a.normalizationType,normalizationField:a.normalizationField,
normalizationTotal:a.normalizationTotal,layer:a.layer}),excludeZerosExpr:a.where,normTotal:a.normalizationTotal}};m.getDataValues=w;m.getEqualIntervalBins=B;m.getFieldExpr=I;m.getHistogramFromFeatureSet=function(a,b,c,d,e){const g={};a&&a.features&&a.features.forEach(k=>{var f=k.attributes;k=J(f,"countOFExpr");f=C(f,"countOFExpr");0!==k&&(g[k]=f)});const h=[];B(b,c,d).forEach((k,f)=>{f=(f+1).toString();h.push({minValue:k[0],maxValue:k[1],count:g.hasOwnProperty(f)?g[f]:0})});return{bins:h,minValue:b,
maxValue:c,normalizationTotal:e}};m.getMissingFields=async function(a,b,c){const d=[];if(b)for(const e of b)b=a.getField(e),"availableFields"in c&&-1===c.availableFields.indexOf(b.name)&&d.push(b.name);return d};m.getSummaryStatisticsFromFeatureSet=function(a,b){a=(a=a&&a.features)&&a[0]&&a[0].attributes;const c={};for(const d in a)c[d.replace(U,"").toLowerCase()]=a[d];c.min===c.max&&null!=c.min&&null==c.stddev&&(c.stddev=c.variance=0);b&&("min max avg stddev sum variance".split(" ").forEach(d=>{null!=
c[d]&&(c[d]=Math.ceil(c[d]))}),c.min===c.max&&null!=c.min&&(c.avg=c.min,c.stddev=c.variance=0));return c};m.getUniqueValuesFromFeatureSet=function(a,b,c,d,e){const g="countOF"+(c||"Expr"),h={};let k=!1;(a&&a.features).forEach(f=>{var l=f.attributes;f=C(l,g);l=c?C(l,c):J(l,g);null===l&&0===f&&(k=!0);if(null==l||"string"===typeof l&&""===l.trim())l=null;null==h[l]?h[l]={count:f,data:l}:h[l].count+=f});return c&&k?b.queryFeatureCount(c+" is NULL",e).then(f=>{h["null"].count+=f||0;return D(h,d)}).catch(()=>
{M.throwIfAborted(e);return D(h,d)}):Promise.resolve(D(h,d))};m.isValidNumber=u;m.msSinceUnixEpochSQL=function(a,b){return t.getDateDiffSQL(a,new Date(0),b,"milliseconds").sqlExpression};m.processSummaryStatisticsResult=function(a){let b;for(b in a)-1<L.indexOf(b)&&(u(a[b])||(a[b]=null));return a};m.resolveCBResult=H;m.statisticTypes=L;Object.defineProperty(m,"__esModule",{value:!0})});