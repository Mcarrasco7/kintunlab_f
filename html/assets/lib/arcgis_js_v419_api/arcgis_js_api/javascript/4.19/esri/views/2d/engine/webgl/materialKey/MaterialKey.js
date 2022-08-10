// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/Error","../enums","../mesh/templates/meshUtils"],function(h,k,A,f,B){function m(c,a=!1){const b=f.WGLVVFlag.SIZE_FIELD_STOPS|f.WGLVVFlag.SIZE_MINMAX_VALUE|f.WGLVVFlag.SIZE_SCALE_STOPS|f.WGLVVFlag.SIZE_UNIT_VALUE;c=(c&(f.WGLVVTarget.FIELD_TARGETS_OUTLINE|f.WGLVVTarget.MINMAX_TARGETS_OUTLINE|f.WGLVVTarget.SCALE_TARGETS_OUTLINE|f.WGLVVTarget.UNIT_TARGETS_OUTLINE))>>>4;return a?b&c:b&~c}function y(c){const a=m(c,
!1);return c&(f.WGLVVFlag.COLOR|f.WGLVVFlag.OPACITY|f.WGLVVFlag.ROTATION|a)}let l=function(){function c(b){this._data=0;this._data=b}c.load=function(b){const d=this.shared;d.data=b;return d};var a=c.prototype;a.setBit=function(b,d){b=1<<b;this._data=d?this._data|b:this._data&~b};a.bit=function(b){return(this._data&1<<b)>>b};a.setBits=function(b,d,e){for(let g=d,n=0;g<e;g++,n++)this.setBit(g,0!==(b&1<<n))};a.bits=function(b,d){let e=0;for(let g=b,n=0;g<d;g++,n++)e|=this.bit(g)<<n;return e};a.hasVV=
function(){return!1};a.setVV=function(b,d){};a.getVariation=function(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}};a.getVariationHash=function(){return this._data&~(7&this.textureBinding)};k._createClass(c,[{key:"data",get:function(){return this._data},set:function(b){this._data=b}},{key:"geometryType",get:function(){return this.bits(8,11)},set:function(b){this.setBits(b,8,11)}},{key:"mapAligned",get:function(){return!!this.bit(20)},set:function(b){this.setBit(20,b)}},{key:"sdf",
get:function(){return!!this.bit(11)},set:function(b){this.setBit(11,b)}},{key:"pattern",get:function(){return!!this.bit(12)},set:function(b){this.setBit(12,b)}},{key:"textureBinding",get:function(){return this.bits(0,8)},set:function(b){this.setBits(b,0,8)}},{key:"geometryTypeString",get:function(){switch(this.geometryType){case f.WGLGeometryType.FILL:return"fill";case f.WGLGeometryType.MARKER:return"marker";case f.WGLGeometryType.LINE:return"line";case f.WGLGeometryType.TEXT:return"text";case f.WGLGeometryType.LABEL:return"label";
default:throw new A(`Unable to handle unknown geometryType: ${this.geometryType}`);}}}]);return c}();l.shared=new l(0);const v=c=>function(a){function b(){return a.apply(this,arguments)||this}k._inheritsLoose(b,a);var d=b.prototype;d.hasVV=function(){return a.prototype.hasVV.call(this)||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue};d.setVV=function(e,g){a.prototype.setVV.call(this,e,g);e&=m(e,g);this.vvSizeMinMaxValue=!!(e&f.WGLVVFlag.SIZE_MINMAX_VALUE);
this.vvSizeFieldStops=!!(e&f.WGLVVFlag.SIZE_FIELD_STOPS);this.vvSizeUnitValue=!!(e&f.WGLVVFlag.SIZE_UNIT_VALUE);this.vvSizeScaleStops=!!(e&f.WGLVVFlag.SIZE_SCALE_STOPS)};k._createClass(b,[{key:"vvSizeMinMaxValue",get:function(){return 0!==this.bit(16)},set:function(e){this.setBit(16,e)}},{key:"vvSizeScaleStops",get:function(){return 0!==this.bit(17)},set:function(e){this.setBit(17,e)}},{key:"vvSizeFieldStops",get:function(){return 0!==this.bit(18)},set:function(e){this.setBit(18,e)}},{key:"vvSizeUnitValue",
get:function(){return 0!==this.bit(19)},set:function(e){this.setBit(19,e)}}]);return b}(c),z=c=>function(a){function b(){return a.apply(this,arguments)||this}k._inheritsLoose(b,a);var d=b.prototype;d.hasVV=function(){return a.prototype.hasVV.call(this)||this.vvRotation};d.setVV=function(e,g){a.prototype.setVV.call(this,e,g);this.vvRotation=!g&&!!(e&f.WGLVVFlag.ROTATION)};k._createClass(b,[{key:"vvRotation",get:function(){return 0!==this.bit(15)},set:function(e){this.setBit(15,e)}}]);return b}(c),
w=c=>function(a){function b(){return a.apply(this,arguments)||this}k._inheritsLoose(b,a);var d=b.prototype;d.hasVV=function(){return a.prototype.hasVV.call(this)||this.vvColor};d.setVV=function(e,g){a.prototype.setVV.call(this,e,g);this.vvColor=!g&&!!(e&f.WGLVVFlag.COLOR)};k._createClass(b,[{key:"vvColor",get:function(){return 0!==this.bit(13)},set:function(e){this.setBit(13,e)}}]);return b}(c),x=c=>function(a){function b(){return a.apply(this,arguments)||this}k._inheritsLoose(b,a);var d=b.prototype;
d.hasVV=function(){return a.prototype.hasVV.call(this)||this.vvOpacity};d.setVV=function(e,g){a.prototype.setVV.call(this,e,g);this.vvOpacity=!g&&!!(e&f.WGLVVFlag.OPACITY)};k._createClass(b,[{key:"vvOpacity",get:function(){return 0!==this.bit(14)},set:function(e){this.setBit(14,e)}}]);return b}(c);let p=function(c){function a(){return c.apply(this,arguments)||this}k._inheritsLoose(a,c);a.load=function(b){const d=this.shared;d.data=b;return d};a.from=function(b,d){const e=this.load(0);e.geometryType=
f.WGLGeometryType.FILL;d?e.dotDensity=!0:e.setVV(b,!1);return e.data};a.prototype.getVariation=function(){return{...c.prototype.getVariation.call(this),dotDensity:this.dotDensity,vvColor:this.vvColor,vvOpacity:this.vvOpacity}};k._createClass(a,[{key:"dotDensity",get:function(){return!!this.bit(15)},set:function(b){this.setBit(15,b)}}]);return a}(w(x(l)));p.shared=new p(0);let q=function(c){function a(){return c.apply(this,arguments)||this}k._inheritsLoose(a,c);a.load=function(b){const d=this.shared;
d.data=b;return d};a.from=function(b){const d=this.load(0);d.geometryType=f.WGLGeometryType.MARKER;d.setVV(b,!1);return d.data};a.prototype.getVariation=function(){return{...c.prototype.getVariation.call(this),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}};return a}(w(x(z(v(l)))));q.shared=new q(0);let r=function(c){function a(){return c.apply(this,
arguments)||this}k._inheritsLoose(a,c);a.load=function(b){const d=this.shared;d.data=b;return d};a.from=function(b,d){const e=this.load(0);e.geometryType=f.WGLGeometryType.LINE;e.setVV(b,d);return e.data};a.prototype.getVariation=function(){return{...c.prototype.getVariation.call(this),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}};return a}(w(x(v(l))));
r.shared=new r(0);let t=function(c){function a(){return c.apply(this,arguments)||this}k._inheritsLoose(a,c);a.load=function(b){const d=this.shared;d.data=b;return d};a.from=function(b){const d=this.load(b);d.geometryType=f.WGLGeometryType.TEXT;d.setVV(b,!1);return d.data};a.prototype.getVariation=function(){return{...c.prototype.getVariation.call(this),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,
vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}};return a}(w(x(z(v(l)))));t.shared=new t(0);let u=function(c){function a(){return c.apply(this,arguments)||this}k._inheritsLoose(a,c);a.load=function(b){const d=this.shared;d.data=b;return d};a.from=function(b,d){const e=this.load(0);e.geometryType=f.WGLGeometryType.LABEL;e.setVV(b,!1);e.mapAligned=!!B.isMapAligned(d);return e.data};a.prototype.getVariation=function(){return{...c.prototype.getVariation.call(this),vvSizeFieldStops:this.vvSizeFieldStops,
vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}};return a}(v(l));u.shared=new u(0);h.FillMaterialKey=p;h.LabelMaterialKey=u;h.LineMaterialKey=r;h.MarkerMaterialKey=q;h.MaterialKeyBase=l;h.TextMaterialKey=t;h.createMaterialKey=function(c,a,b,d,e){switch(c){case f.WGLGeometryType.FILL:return p.from(a,d);case f.WGLGeometryType.LINE:return r.from(a,b);case f.WGLGeometryType.MARKER:return q.from(a);case f.WGLGeometryType.TEXT:return t.from(a);
case f.WGLGeometryType.LABEL:return u.from(a,e);default:throw Error(`Unable to createMaterialKey for unknown geometryType ${c}`);}};h.getFillVVFlags=function(c){return c&(f.WGLVVFlag.COLOR|f.WGLVVFlag.OPACITY)};h.getLabelVVFlags=function(c){const a=m(c,!1);return c&a};h.getLineVVFlags=function(c,a){if(a)return a=m(c,!0),c&a;a=m(c,!1);return c&(f.WGLVVFlag.COLOR|f.WGLVVFlag.OPACITY|a)};h.getMarkerVVFlags=y;h.getSizeFlagsMask=m;h.getTextVVFlags=function(c){return y(c)};h.hydrateMaterialKey=function(c){switch(l.load(c).geometryType){case f.WGLGeometryType.MARKER:return new q(c);
case f.WGLGeometryType.FILL:return new p(c);case f.WGLGeometryType.LINE:return new r(c);case f.WGLGeometryType.TEXT:return new t(c);case f.WGLGeometryType.LABEL:return new u(c)}};Object.defineProperty(h,"__esModule",{value:!0})});