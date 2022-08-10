self.webpackChunkRemoteClient([48],{145:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var a=i(49),r=i(90);const l={inches:Object(r.f)(1,"meters","inches"),feet:Object(r.f)(1,"meters","feet"),"us-feet":Object(r.f)(1,"meters","us-feet"),yards:Object(r.f)(1,"meters","yards"),miles:Object(r.f)(1,"meters","miles"),"nautical-miles":Object(r.f)(1,"meters","nautical-miles"),millimeters:Object(r.f)(1,"meters","millimeters"),centimeters:Object(r.f)(1,"meters","centimeters"),decimeters:Object(r.f)(1,"meters","decimeters"),meters:Object(r.f)(1,"meters","meters"),kilometers:Object(r.f)(1,"meters","kilometers"),"decimal-degrees":1/Object(r.l)(1,"meters",a.b.radius)}},171:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i(1);function a(e){}},175:function(e,t,i){"use strict";function a(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function r(e){return null!=e&&!isNaN(e)&&isFinite(e)}function l(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function n(e,t){const i=t||l(e),a=e.valueUnit||"unknown";return"unknown"===i?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===a?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return a}))},189:function(e,t,i){"use strict";i.d(t,"a",(function(){return g})),i.d(t,"b",(function(){return d})),i.d(t,"c",(function(){return f})),i.d(t,"d",(function(){return b})),i.d(t,"e",(function(){return v})),i.d(t,"f",(function(){return O})),i.d(t,"g",(function(){return h}));i(11),i(17),i(1),i(19),i(4),i(18),i(6);var a=i(0),r=(i(9),i(3),i(7),i(15),i(16),i(12),i(2),i(10),i(8),i(171)),l=(i(5),i(13),i(68),i(72),i(101),i(42),i(73),i(74),i(14),i(103),i(48),i(43),i(47),i(45),i(44),i(21),i(76),i(46),i(57),i(58),i(77),i(27),i(69),i(51),i(52),i(49),i(54),i(50),i(84),i(88),i(86),i(85),i(87),i(75),i(53),i(56),i(55)),n=(i(65),i(63),i(62),i(60),i(61),i(67),i(59),i(64),i(78),i(71),i(79),i(80),i(82),i(95),i(89),i(105),i(139),i(150),i(125),i(140),i(151),i(141),i(106),i(118),i(119),i(120),i(152),i(153),i(142),i(154),i(155),i(156),i(143),i(144),i(160),i(161),i(162),i(157),i(163),i(93),i(158),i(164),i(165),i(166),i(83),i(146),i(91),i(66),i(70),i(81),i(94),i(96),i(97),i(100),i(92),i(108),i(121),i(122),i(107),i(130),i(109),i(110),i(98),i(102),i(99),i(111),i(112),i(113),i(114),i(115),i(116),i(117),i(104),i(124),i(123),i(131),i(135),i(136),i(132),i(147),i(148),i(149),i(137),i(138),i(133),i(126),i(127),i(128),i(134),i(159),i(167),i(168)),s=i(175),o=(i(90),i(145));const c=a.a.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),u=new n.a,p=Math.PI,h=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function d(e,t,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"color"===e.type)[0]:e;if(!r)return;if("esri.renderers.visualVariables.ColorVariable"!==r.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const n="number"==typeof t,s=n?null:t,o=s&&s.attributes;let u=n?t:null;const p=r.field,{ipData:h,hasExpression:d}=r.cache;let f=r.cache.compiledFunc;if(!p&&!d){const e=r.stops;return e&&e[0]&&e[0].color}if("number"!=typeof u)if(d){if(!Object(a.h)(i)||!Object(a.h)(i.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,l=t.getViewInfo(e),n=t.createExecContext(s,l);if(!f){const e=t.createSyntaxTree(r.valueExpression);f=t.createFunction(e),r.cache.compiledFunc=f}u=t.executeFunction(f,n)}else o&&(u=o[p]);const b=r.normalizationField,v=o?parseFloat(o[b]):void 0;if(null!=u&&(!b||n||!isNaN(v)&&0!==v)){isNaN(v)||n||(u/=v);const e=j(u,h);if(e){const t=e[0],n=e[1],s=t===n?r.stops[t].color:l.a.blendColors(r.stops[t].color,r.stops[n].color,e[2],Object(a.h)(i)?i.color:void 0);return new l.a(s)}}}function f(e,t,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"opacity"===e.type)[0]:e;if(!r)return;if("esri.renderers.visualVariables.OpacityVariable"!==r.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const l="number"==typeof t,n=l?null:t,s=n&&n.attributes;let o=l?t:null;const u=r.field,{ipData:p,hasExpression:h}=r.cache;let d=r.cache.compiledFunc;if(!u&&!h){const e=r.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof o)if(h){if(Object(a.c)(i)||Object(a.c)(i.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,l=t.getViewInfo(e),s=t.createExecContext(n,l);if(!d){const e=t.createSyntaxTree(r.valueExpression);d=t.createFunction(e),r.cache.compiledFunc=d}o=t.executeFunction(d,s)}else s&&(o=s[u]);const f=r.normalizationField,b=s?parseFloat(s[f]):void 0;if(null!=o&&(!f||l||!isNaN(b)&&0!==b)){isNaN(b)||l||(o/=b);const e=j(o,p);if(e){const t=e[0],i=e[1];if(t===i)return r.stops[t].opacity;{const a=r.stops[t].opacity;return a+(r.stops[i].opacity-a)*e[2]}}}}function b(e,t,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"rotation"===e.type)[0]:e;if(!r)return;if("esri.renderers.visualVariables.RotationVariable"!==r.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const l=r.axis||"heading",n="heading"===l&&"arithmetic"===r.rotationType?90:0,s="heading"===l&&"arithmetic"===r.rotationType?-1:1,o="number"==typeof t?null:t,u=o&&o.attributes,p=r.field,{hasExpression:h}=r.cache;let d=r.cache.compiledFunc,f=0;if(!p&&!h)return f;if(h){if(Object(a.c)(i)||Object(a.c)(i.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,l=t.getViewInfo(e),n=t.createExecContext(o,l);if(!d){const e=t.createSyntaxTree(r.valueExpression);d=t.createFunction(e),r.cache.compiledFunc=d}f=t.executeFunction(d,n)}else u&&(f=u[p]||0);return f="number"!=typeof f||isNaN(f)?null:n+s*f,f}function v(e,t,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"size"===e.type)[0]:e;if(!r)return;if("esri.renderers.visualVariables.SizeVariable"!==r.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const l=function(e,t,i,r,l){switch(t.transformationType){case"additive":return function(e,t,i,a){return e+(m(t.minSize,i,a)||t.minDataValue)}(e,t,i,r);case"constant":return function(e,t,i){const a=e.stops;let r=a&&a.length&&a[0].size;return null==r&&(r=e.minSize),m(r,t,i)}(t,i,r);case"clamped-linear":return function(e,t,i,r){const l=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),n=m(t.minSize,i,r),s=m(t.maxSize,i,r),o=Object(a.h)(r)?r.shape:void 0;if(e<=t.minDataValue)return n;if(e>=t.maxDataValue)return s;if("area"===t.scaleBy&&o){const e="circle"===o,t=e?p*(n/2)**2:n*n,i=t+l*((e?p*(s/2)**2:s*s)-t);return e?2*Math.sqrt(i/p):Math.sqrt(i)}return n+l*(s-n)}(e,t,i,r);case"proportional":return function(e,t,i,r){const l=Object(a.h)(r)?r.shape:void 0,n=e/t.minDataValue,s=m(t.minSize,i,r),o=m(t.maxSize,i,r);let c=null;return c="circle"===l?2*Math.sqrt(n*(s/2)**2):"square"===l||"diamond"===l||"image"===l?Math.sqrt(n*s**2):n*s,y(c,s,o)}(e,t,i,r);case"stops":return function(e,t,i,a,r){const[l,n,s]=j(e,r);if(l===n)return m(t.stops[l].size,i,a);{const e=m(t.stops[l].size,i,a);return e+(m(t.stops[n].size,i,a)-e)*s}}(e,t,i,r,l);case"real-world-size":return function(e,t,i,r){const l=(Object(a.h)(r)&&r.resolution?r.resolution:1)*o.a[t.valueUnit],n=m(t.minSize,i,r),s=m(t.maxSize,i,r),{valueRepresentation:c}=t;let u=null;return u="area"===c?2*Math.sqrt(e/p)/l:"radius"===c||"distance"===c?2*e/l:e/l,y(u,n,s)}(e,t,i,r);case"identity":return e;case"unknown":return null}}(function(e,t,i){const r="number"==typeof t,l=r?null:t,n=l&&l.attributes;let o=r?t:null;const{isScaleDriven:u}=e.cache;let p=e.cache.compiledFunc;if(u){const t=Object(a.h)(i)?i.scale:void 0,r=Object(a.h)(i)?i.view:void 0;o=null==t||"3d"===r?function(e){let t=null,i=null;const a=e.stops;return a?(t=a[0].value,i=a[a.length-1].value):(t=e.minDataValue||0,i=e.maxDataValue||0),(t+i)/2}(e):t}else if(!r)switch(e.inputValueType){case"expression":{if(Object(a.c)(i)||Object(a.c)(i.arcade))return void c.error("Use of arcade expressions requires an arcade context");const t={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},r=i.arcade.arcadeUtils,n=r.getViewInfo(t),s=r.createExecContext(l,n);if(!p){const t=r.createSyntaxTree(e.valueExpression);p=r.createFunction(t),e.cache.compiledFunc=p}o=r.executeFunction(p,s);break}case"field":n&&(o=n[e.field]);break;case"unknown":o=null}if(!Object(s.b)(o))return null;if(r||!e.normalizationField)return o;const h=n?parseFloat(n[e.normalizationField]):null;return Object(s.b)(h)&&0!==h?o/h:null}(r,t,i),r,t,i,r.cache.ipData);return null==l||isNaN(l)?0:l}function m(e,t,i){return null==e?null:Object(s.d)(e)?v(e,t,i):Object(s.b)(e)?e:null}function y(e,t,i){return Object(s.b)(i)&&e>i?i:Object(s.b)(t)&&e<t?t:e}function O(e,t,i){const{isScaleDriven:a}=e.cache;if(!(a&&"3d"===i||t))return null;const r={scale:t,view:i};let l=m(e.minSize,u,r),n=m(e.maxSize,u,r);if(null!=l||null!=n){if(l>n){const e=n;n=l,l=e}return{minSize:l,maxSize:n}}}function j(e,t){if(!t)return;let i=0,a=t.length-1;return t.some((t,r)=>e<t?(a=r,!0):(i=r,!1)),[i,a,(e-t[i])/(t[a]-t[i])]}function g(e,t,i){const a=["proportional","proportional","proportional"];for(const l of e){const e=l.useSymbolValue?"symbol-value":v(l,t,i);switch(l.axis){case"width":a[0]=e;break;case"depth":a[1]=e;break;case"height":a[2]=e;break;case"width-and-depth":a[0]=e,a[1]=e;break;case"all":case void 0:case null:a[0]=e,a[1]=e,a[2]=e;break;default:Object(r.a)(l.axis)}}return a}},230:function(e,t,i){"use strict";var a,r=i(11),l=(i(17),i(1),i(19),i(4),i(6),i(0),i(9),i(3),i(7)),n=(i(15),i(16),i(12),i(2),i(10),i(8),i(5)),s=i(13),o=i(42);i(14),i(21);let c=a=class extends o.b{constructor(e){super(e),this.level=0,this.levelValue=null,this.resolution=0,this.scale=0}clone(){return new a({level:this.level,levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})}};Object(r.a)([Object(l.d)({type:n.a,json:{write:!0}})],c.prototype,"level",void 0),Object(r.a)([Object(l.d)({type:String,json:{write:!0}})],c.prototype,"levelValue",void 0),Object(r.a)([Object(l.d)({type:Number,json:{write:!0}})],c.prototype,"resolution",void 0),Object(r.a)([Object(l.d)({type:Number,json:{write:!0}})],c.prototype,"scale",void 0),c=a=Object(r.a)([Object(s.g)("esri.layers.support.LOD")],c);var u=c;t.a=u},240:function(e,t,i){"use strict";var a,r=i(11),l=(i(17),i(1),i(19),i(4),i(6),i(0),i(9),i(3),i(7)),n=(i(15),i(16),i(12),i(2),i(10),i(8),i(5)),s=i(13),o=i(42),c=(i(14),i(48),i(43)),u=i(45),p=i(44),h=(i(21),i(46)),d=(i(51),i(52)),f=(i(49),i(54)),b=(i(50),i(65),i(63),i(62),i(60),i(61),i(67),i(59),i(64),i(90)),v=i(183),m=i(230);const y=new c.a({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let O=a=class extends o.b{constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null}static create(e={size:256,spatialReference:h.f.WebMercator}){const t=e.resolutionFactor||1,i=e.scales,r=e.size||256,l=e.spatialReference||h.f.WebMercator;if(!Object(h.l)(l)){const e=[];if(i)for(let t=0;t<i.length;t++){const a=i[t];e.push({level:t,scale:a,resolution:a})}else{let t=5e-4;for(let i=23;i>=0;i--)e.unshift({level:i,scale:t,resolution:t}),t*=2}return new a({dpi:96,lods:e,origin:new d.a(0,0,l),size:[r,r],spatialReference:l})}const n=Object(h.i)(l),s=e.origin?new d.a({x:e.origin.x,y:e.origin.y,spatialReference:l}):new d.a(n?{x:n.origin[0],y:n.origin[1],spatialReference:l}:{x:0,y:0,spatialReference:l}),o=1/(39.37*Object(b.d)(l)*96),c=[];if(i)for(let e=0;e<i.length;e++){const t=i[e],a=t*o;c.push({level:e,scale:t,resolution:a})}else{let e=Object(h.m)(l)?512/r*591657527.5917094:256/r*591657527.591555;const i=Math.ceil(24/t);c.push({level:0,scale:e,resolution:e*o});for(let a=1;a<i;a++){const i=e/2**t,r=i*o;c.push({level:a,scale:i,resolution:r}),e=i}}return new a({dpi:96,lods:c,origin:s,size:[r,r],spatialReference:l})}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const i=Object(h.i)(e);return e.isWrappable&&Math.abs(i.origin[0]-t.x)<=i.dx}return!1}readOrigin(e,t){return d.a.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,i=0;const a=[];this._levelToLOD={},e&&(t=-1/0,i=1/0,e.forEach(e=>{a.push(e.scale),t=e.scale>t?e.scale:t,i=e.scale<i?e.scale:i,this._levelToLOD[e.level]=e})),this._set("scales",a),this._set("minScale",t),this._set("maxScale",i),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[0]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length)return t[t.length-1];{const i=Math.round(e-.5),a=Math.round(e);return t[a]+(a-e)*(t[i]-t[a])}}scaleToZoom(e){const t=this.scales,i=t.length-1;let a=0;for(;a<i;a++){const i=t[a],r=t[a+1];if(i<=e)return a;if(r===e)return a+1;if(i>e&&r<e)return a+1-(e-r)/(i-r)}return a}snapScale(e,t=.95){const i=this.scaleToZoom(e);return i%Math.floor(i)>=t?this.zoomToScale(Math.ceil(i)):this.zoomToScale(Math.floor(i))}tileAt(e,t,i,a){const r=this.lodAt(e);if(!r)return null;let l,n;if("number"==typeof t)l=t,n=i;else if(Object(h.g)(t.spatialReference,this.spatialReference))l=t.x,n=t.y,a=i;else{const e=Object(f.d)(t,this.spatialReference);if(!e)return null;l=e.x,n=e.y,a=i}const s=r.resolution*this.size[0],o=r.resolution*this.size[1];return a||(a={id:null,level:0,row:0,col:0,extent:Object(v.c)()}),a.level=e,a.row=Math.floor((this.origin.y-n)/o+.001),a.col=Math.floor((l-this.origin.x)/s+.001),this.updateTileInfo(a),a}updateTileInfo(e,t=0){let i=this.lodAt(e.level);if(!i&&1===t){const t=this.lods[this.lods.length-1];t.level<e.level&&(i=t)}if(!i)return;const a=e.level-i.level,r=i.resolution*this.size[0]/2**a,l=i.resolution*this.size[1]/2**a;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=Object(v.c)()),e.extent[0]=this.origin.x+e.col*r,e.extent[1]=this.origin.y-(e.row+1)*l,e.extent[2]=e.extent[0]+r,e.extent[3]=e.extent[1]+l}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const{resolution:i}=this.lodAt(t.level),a=i*this.size[0],r=i*this.size[1];return e[0]=this.origin.x+t.col*a,e[1]=this.origin.y-(t.row+1)*r,e[2]=e[0]+a,e[3]=e[1]+r,e}lodAt(e){return this._levelToLOD&&this._levelToLOD[e]||null}clone(){return a.fromJSON(this.write({}))}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let i=0;i<e.length;i++){const a=e[i];this._upsampleLevels[a.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/a.resolution:0},t=a}}};Object(r.a)([Object(l.d)({type:Number,json:{write:!0}})],O.prototype,"compressionQuality",void 0),Object(r.a)([Object(l.d)({type:Number,json:{write:!0}})],O.prototype,"dpi",void 0),Object(r.a)([Object(l.d)({type:String,json:{read:y.read,write:y.write,origins:{"web-scene":{read:!1,write:!1}}}})],O.prototype,"format",void 0),Object(r.a)([Object(l.d)({readOnly:!0})],O.prototype,"isWrappable",null),Object(r.a)([Object(l.d)({type:d.a,json:{write:!0}})],O.prototype,"origin",void 0),Object(r.a)([Object(u.a)("origin")],O.prototype,"readOrigin",null),Object(r.a)([Object(l.d)({type:[m.a],value:null,json:{write:!0}})],O.prototype,"lods",null),Object(r.a)([Object(l.d)({readOnly:!0})],O.prototype,"minScale",void 0),Object(r.a)([Object(l.d)({readOnly:!0})],O.prototype,"maxScale",void 0),Object(r.a)([Object(l.d)({readOnly:!0})],O.prototype,"scales",void 0),Object(r.a)([Object(l.d)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],O.prototype,"size",void 0),Object(r.a)([Object(u.a)("size",["rows","cols"])],O.prototype,"readSize",null),Object(r.a)([Object(p.a)("size",{cols:{type:n.a},rows:{type:n.a}})],O.prototype,"writeSize",null),Object(r.a)([Object(l.d)({type:h.f,json:{write:!0}})],O.prototype,"spatialReference",void 0),O=a=Object(r.a)([Object(s.g)("esri.layers.support.TileInfo")],O);var j=O;t.a=j},318:function(e,t,i){"use strict";i.d(t,"a",(function(){return w}));var a,r=i(11),l=i(1),n=i(0),s=i(7),o=i(15),c=i(12),u=i(2),p=i(8),h=i(13),d=i(14),f=i(48),b=(i(21),i(27)),v=i(190),m=i(222),y=i(20);class O{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),a=i%8,r=i>>3,l=this._tileAvailabilityBitSet;return r<0||r>l.length?"unknown":l[r]&1<<a?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let a=!0,r=!0;const l=Math.ceil(t*i/8),n=new Uint8Array(l);let s=0;for(let t=0;t<e.length;t++){const i=t%8;e[t]?(r=!1,n[s]|=1<<i):a=!1,7===i&&++s}r?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=n,this.byteSize+=n.length)}static fromDefinition(e,t){const i=e.service.request||b.default,{row:a,col:r,width:l,height:n}=e,s={query:{f:"json"}};return t=t?{...s,...t}:s,i(function(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then(e=>e.data).catch(e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:a,left:r,width:l,height:n},valid:!0,data:Object(c.e)(l*n,0)};throw e}).then(e=>{if(e.location&&(e.location.top!==a||e.location.left!==r||e.location.width!==l||e.location.height!==n))throw new p.a("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:a,left:r,width:l,height:n}});return O.fromJSON(e)})}static fromJSON(e){O.validateJSON(e);const t=new O;return t.location=Object.freeze(Object(l.b)(e.location)),t._updateFromData(e.data),Object.freeze(t)}static validateJSON(e){if(!e||!e.location)throw new p.a("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new p.a("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new p.a("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new p.a("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new p.a("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function j(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const g=n.a.getLogger("esri.layers.support.TilemapCache");let w=a=class extends o.d{constructor(e){super(e),this._handles=new v.a,this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=b.default,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new m.a(this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],()=>this._initializeTilemapDefinition()),Object(y.a)(this,"layer.tileInfo.lods",e=>this._initializeAvailableLevels(e),!0)]),this._initializeTilemapDefinition()}destroy(){this._handles&&(this._handles.destroy(),this._handles=null)}castLevels(e){return e<=2?(g.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,a){if(!this._availableLevels[e])return Promise.reject(new p.a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const r=this._tmpTilemapDefinition,l=this._tilemapFromCache(e,t,i,r);if(l)return Promise.resolve(l);const n=a&&a.signal;return a={...a,signal:null},new Promise((e,t)=>{Object(u.q)(n,()=>t(Object(u.e)()));const i=j(r);let l=this._pendingTilemapRequests[i];if(!l){l=O.fromDefinition(r,a).then(e=>(this._tilemapCache.put(i,e,e.byteSize),e));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=l,l.then(e,e)}l.then(e,t)})}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const a=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return a?a.getAvailability(t,i):"unknown"}getAvailabilityUpsample(e,t,i,a){a.level=e,a.row=t,a.col=i;const r=this.layer.tileInfo;for(r.updateTileInfo(a);;){const e=this.getAvailability(a.level,a.row,a.col);if("unavailable"!==e)return e;if(!r.upsampleTile(a))return"unavailable"}}fetchAvailability(e,t,i,a){return this._availableLevels[e]?this.fetchTilemap(e,t,i,a).catch(e=>e).then(a=>{if(a instanceof O){const r=a.getAvailability(t,i);return"unavailable"===r?Promise.reject(new p.a("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):r}if(Object(u.m)(a))throw a;return"unknown"}):Promise.reject(new p.a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,a,r){a.level=e,a.row=t,a.col=i;const l=this.layer.tileInfo;l.updateTileInfo(a);const n=this.fetchAvailability(e,t,i,r).catch(e=>{if(Object(u.m)(e))throw e;if(l.upsampleTile(a))return this.fetchAvailabilityUpsample(a.level,a.row,a.col,a);throw e});return this._fetchAvailabilityUpsamplePrefetch(a.id,e,t,i,r,n),n}async _fetchAvailabilityUpsamplePrefetch(e,t,i,r,l,n){if(!this._prefetchingEnabled)return;const s="prefetch-"+e;if(this._handles.has(s))return;const o=Object(u.d)();n.then(()=>o.abort(),()=>o.abort());let p=!1;const h={remove(){p||(p=!0,o.abort())}};if(this._handles.add(h,s),await Object(c.m)(10,o.signal).catch(()=>{}),p||(p=!0,this._handles.remove(s)),Object(u.n)(o))return;const d={id:e,level:t,row:i,col:r},f={...l,signal:o.signal},b=this.layer.tileInfo;for(let e=0;a._prefetches.length<a._maxPrefetch&&b.upsampleTile(d);++e){const e=this.fetchAvailability(d.level,d.row,d.col,f);a._prefetches.push(e);const t=()=>{a._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?Object(d.C)(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,a){a.level=e,a.row=t-t%this.size,a.col=i-i%this.size;const r=j(a);return this._tilemapCache.get(r)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach(e=>this._availableLevels[e.level]=!0)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,a)=>!!e._tilemapFromCache(t,i,a,e._tmpTilemapDefinition)}}};w._maxPrefetch=4,w._prefetches=new c.a({initialSize:a._maxPrefetch}),Object(r.a)([Object(s.d)({constructOnly:!0,type:Number})],w.prototype,"levels",void 0),Object(r.a)([Object(f.a)("levels")],w.prototype,"castLevels",null),Object(r.a)([Object(s.d)({readOnly:!0,type:Number})],w.prototype,"size",null),Object(r.a)([Object(s.d)({constructOnly:!0,type:Number})],w.prototype,"cacheByteSize",void 0),Object(r.a)([Object(s.d)({constructOnly:!0})],w.prototype,"layer",void 0),Object(r.a)([Object(s.d)({constructOnly:!0})],w.prototype,"request",void 0),w=a=Object(r.a)([Object(h.g)("esri.layers.support.TilemapCache")],w)},327:function(e,t,i){"use strict";i.d(t,"a",(function(){return l})),i.d(t,"b",(function(){return r}));var a=i(240);const r={type:a.a,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:l}}}}};function l(e,t,i,r){if(!e)return null;const{minScale:l,maxScale:n,minLOD:s,maxLOD:o}=t;if(null!=s&&null!=o)return r&&r.ignoreMinMaxLOD?a.a.fromJSON(e):a.a.fromJSON({...e,lods:e.lods.filter(({level:e})=>null!=e&&e>=s&&e<=o)});if(0!==l&&0!==n){const t=e=>Math.round(1e4*e)/1e4,i=l?t(l):1/0,r=n?t(n):-1/0;return a.a.fromJSON({...e,lods:e.lods.filter(e=>{const a=t(e.scale);return a<=i&&a>=r})})}return a.a.fromJSON(e)}},383:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var a=i(11),r=(i(1),i(0),i(7)),l=(i(5),i(13)),n=(i(14),i(45)),s=(i(21),i(46)),o=(i(64),i(327)),c=i(318);const u=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new c.a({layer:this}):null}};return Object(a.a)([Object(r.d)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(a.a)([Object(r.d)()],t.prototype,"minScale",void 0),Object(a.a)([Object(n.a)("service","minScale")],t.prototype,"readMinScale",null),Object(a.a)([Object(r.d)()],t.prototype,"maxScale",void 0),Object(a.a)([Object(n.a)("service","maxScale")],t.prototype,"readMaxScale",null),Object(a.a)([Object(r.d)({type:s.f})],t.prototype,"spatialReference",void 0),Object(a.a)([Object(r.d)({readOnly:!0})],t.prototype,"supportsBlankTile",null),Object(a.a)([Object(r.d)(o.b)],t.prototype,"tileInfo",void 0),Object(a.a)([Object(r.d)()],t.prototype,"tilemapCache",void 0),Object(a.a)([Object(n.a)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),Object(a.a)([Object(r.d)()],t.prototype,"version",void 0),t=Object(a.a)([Object(l.g)("esri.layers.mixins.ArcGISCachedService")],t),t}},413:function(e,t,i){"use strict";i.r(t);var a=i(11),r=(i(17),i(1),i(19),i(4),i(18),i(6),i(0)),l=(i(9),i(3),i(7)),n=(i(15),i(16),i(12),i(2),i(10),i(8)),s=(i(171),i(5),i(13)),o=(i(68),i(72),i(101),i(42),i(73),i(74),i(14)),c=(i(103),i(48)),u=(i(43),i(47),i(45)),p=i(44),h=(i(21),i(76),i(46)),d=(i(57),i(58),i(77),i(27)),f=(i(69),i(51),i(52),i(49),i(54),i(50),i(84),i(88),i(86),i(85),i(87),i(75),i(186),i(187),i(174),i(53),i(56),i(55),i(65),i(63),i(62),i(60),i(61),i(67),i(59),i(64),i(78),i(71),i(79),i(80),i(82),i(95),i(89),i(105),i(139),i(150),i(125),i(140),i(151),i(141),i(106),i(118),i(119),i(120),i(152),i(153),i(142),i(154),i(155),i(156),i(143),i(144),i(160),i(161),i(162),i(157),i(163),i(93),i(158),i(164),i(165),i(166),i(83),i(146),i(91),i(66),i(70),i(81),i(94),i(96),i(97),i(100),i(92),i(108),i(121),i(122),i(107),i(130),i(109),i(110),i(98),i(102),i(99),i(111),i(112),i(113),i(114),i(115),i(116),i(117),i(104),i(124),i(123),i(131),i(135),i(136),i(132),i(147),i(148),i(149),i(137),i(138),i(133),i(126),i(127),i(128),i(134),i(159),i(167),i(168),i(190),i(332),i(184)),b=(i(191),i(208),i(220),i(221),i(205),i(206),i(210),i(214),i(226),i(217),i(231),i(232),i(233),i(234),i(227),i(228),i(175),i(90),i(145),i(189),i(236),i(215),i(207),i(245),i(241),i(242),i(225),i(248),i(238),i(239),i(243),i(198),i(222),i(260),i(261),i(262),i(263),i(264),i(265),i(266),i(172),i(169),i(178),i(188)),v=(i(20),i(204)),m=(i(173),i(355),i(183),i(193)),y=(i(179),i(180),i(176)),O=i(274),j=(i(230),i(240),i(170),i(249)),g=i(203),w=i(254),S=i(192),_=i(229),x=i(194),T=(i(268),i(276),i(219),i(256),i(218),i(246),i(211),i(212),i(270),i(197),i(213),i(327),i(318),i(383)),z=i(445),V=i(402);i(364);const D=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let R=class extends(Object(g.a)(Object(z.b)(Object(x.a)(Object(_.a)(Object(m.a)(Object(S.a)(Object(T.a)(Object(z.a)(Object(j.a)(Object(b.a)(Object(O.b)(Object(w.a)(f.a))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=Object(r.h)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then(()=>this._fetchService(t),()=>this._fetchService(t))),Promise.resolve(this)}get attributionDataUrl(){var e;const t=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return t&&this._getDefaultAttribution(this._getMapName(t))}readSpatialReference(e,t){return(e=e||t.tileInfo&&t.tileInfo.spatialReference)&&h.f.fromJSON(e)}writeSublayers(e,t,i,a){if(!this.loaded||!e)return;const r=e.slice().reverse().flatten(({sublayers:e})=>e&&e.toArray().reverse()).toArray(),l=[],n={writeSublayerStructure:!1,...a};r.forEach(e=>{const t=e.write({},n);l.push(t)}),l.some(e=>Object.keys(e).length>1)&&(t.layers=l)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map(e=>Object(o.I)(e).path):null}fetchTile(e,t,i,a={}){const{signal:r,timestamp:l}=a,n=this.getTileUrl(e,t,i),s={responseType:"image",signal:r};return null!=l&&(s.query={_ts:a.timestamp}),Object(d.default)(n,s).then(e=>e.data)}getTileUrl(e,t,i){const a=!this.tilemapCache&&this.supportsBlankTile,r=Object(o.C)({...this.parsedUrl.query,blankTile:!a&&null,...this.customParameters}),l=this.tileServers;return`${l&&l.length?l[t%l.length]:this.parsedUrl.path}/tile/${e}/${t}/${i}${r?"?"+r:""}`}_fetchService(e){return new Promise((t,i)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new n.a("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void t({data:this.sourceJSON})}if(!this.parsedUrl)throw new n.a("tile-layer:undefined-url","layer's url is not defined");const a=Object(v.g)(this.parsedUrl.path);if(Object(r.h)(a)&&"ImageServer"===a.serverType)throw new n.a("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");Object(d.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters},responseType:"json",signal:e}).then(t,i)}).then(t=>{if(t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!Object(v.b)(this.url))return this._fetchServerVersion(this.url,e).then(e=>{this.read({currentVersion:e})}).catch(()=>{})})}_fetchServerVersion(e,t){if(!Object(v.d)(e))return Promise.reject();const i=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return Object(d.default)(i,{query:{f:"json",...this.customParameters},responseType:"json",signal:t}).then(e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new n.a("tile-layer:version-not-available")})}_getMapName(e){const t=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return t&&t[2]}_getDefaultAttribution(e){if(!e)return;let t;e=e.toLowerCase();for(let i=0,a=D.length;i<a;i++)if(t=D[i],t.toLowerCase().indexOf(e)>-1)return Object(o.y)("//static.arcgis.com/attribution/"+t)}_getDefaultTileServers(e){const t=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),i=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return t||i?[e,e.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]}};Object(a.a)([Object(l.d)({readOnly:!0})],R.prototype,"attributionDataUrl",null),Object(a.a)([Object(l.d)({type:["show","hide","hide-children"]})],R.prototype,"listMode",void 0),Object(a.a)([Object(l.d)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],R.prototype,"isReference",void 0),Object(a.a)([Object(l.d)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],R.prototype,"operationalLayerType",void 0),Object(a.a)([Object(l.d)({type:Boolean})],R.prototype,"resampling",void 0),Object(a.a)([Object(l.d)()],R.prototype,"sourceJSON",void 0),Object(a.a)([Object(l.d)({type:h.f})],R.prototype,"spatialReference",void 0),Object(a.a)([Object(u.a)("spatialReference",["spatialReference","tileInfo"])],R.prototype,"readSpatialReference",null),Object(a.a)([Object(l.d)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],R.prototype,"path",void 0),Object(a.a)([Object(l.d)({readOnly:!0})],R.prototype,"sublayers",void 0),Object(a.a)([Object(p.a)("sublayers",{layers:{type:[V.a]}})],R.prototype,"writeSublayers",null),Object(a.a)([Object(l.d)({json:{read:!1,write:!1}})],R.prototype,"popupEnabled",void 0),Object(a.a)([Object(l.d)()],R.prototype,"tileServers",null),Object(a.a)([Object(c.a)("tileServers")],R.prototype,"castTileServers",null),Object(a.a)([Object(l.d)({readOnly:!0,json:{read:!1}})],R.prototype,"type",void 0),Object(a.a)([Object(l.d)(y.n)],R.prototype,"url",void 0),R=Object(a.a)([Object(s.g)("esri.layers.TileLayer")],R);var L=R;t.default=L}});