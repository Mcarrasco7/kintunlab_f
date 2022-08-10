// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/JSONSupport".split(" "),function(q,c,h,k,d,r,e,u,l,m,v,b){var n;h=new e.JSONMap({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"});e=new e.JSONMap({sizeInfo:"size",
colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"});k={key(f){return"number"===typeof f?"number":"string"},typeMap:{number:Number,string:String},base:null};const t=["high-to-low","above-and-below","centered-on","extremes"];l=[...new Set("high-to-low above-and-below centered-on extremes 90-10 above below high-to-low above-and-below 90-10 above below".split(" "))];m="seconds minutes hours days months years".split(" ");b=n=function(f){function g(a){a=f.call(this,a)||this;a.endTime=
null;a.field=null;a.maxSliderValue=null;a.minSliderValue=null;a.startTime=null;a.type=null;a.units=null;return a}q._inheritsLoose(g,f);var p=g.prototype;p.castEndTime=function(a){return"string"===typeof a||"number"===typeof a?a:null};p.castStartTime=function(a){return"string"===typeof a||"number"===typeof a?a:null};p.clone=function(){return new n({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,startTime:this.startTime,style:this.style,theme:this.theme,
type:this.type,units:this.units})};q._createClass(g,[{key:"style",get:function(){return"color"===this.type?this._get("style"):null},set:function(a){this._set("style",a)}},{key:"theme",get:function(){return"color"===this.type||"size"===this.type?this._get("theme")||"high-to-low":null},set:function(a){this._set("theme",a)}}]);return g}(b.JSONSupport);c.__decorate([d.property({types:k,json:{write:!0}})],b.prototype,"endTime",void 0);c.__decorate([r.cast("endTime")],b.prototype,"castEndTime",null);c.__decorate([d.property({type:String,
json:{write:!0}})],b.prototype,"field",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"maxSliderValue",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"minSliderValue",void 0);c.__decorate([d.property({types:k,json:{write:!0}})],b.prototype,"startTime",void 0);c.__decorate([r.cast("startTime")],b.prototype,"castStartTime",null);c.__decorate([d.property({type:h.apiValues,value:null,json:{type:h.jsonValues,read:h.read,write:h.write}})],b.prototype,
"style",null);c.__decorate([d.property({type:l,value:null,json:{type:l,origins:{"web-scene":{type:t,write:{writer:(f,g)=>{-1<t.indexOf(f)&&(g.theme=f)}}}},write:!0}})],b.prototype,"theme",null);c.__decorate([d.property({type:e.apiValues,json:{type:e.jsonValues,read:e.read,write:e.write}})],b.prototype,"type",void 0);c.__decorate([d.property({type:m,json:{type:m,write:!0}})],b.prototype,"units",void 0);return b=n=c.__decorate([u.subclass("esri.renderers.support.AuthoringInfoVisualVariable")],b)});