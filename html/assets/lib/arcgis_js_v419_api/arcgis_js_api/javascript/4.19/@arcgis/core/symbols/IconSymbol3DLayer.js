/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../config.js";import{L as o,i as t}from"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import s from"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{a as n}from"../chunks/JSONSupport.js";import{isDataProtocol as c,isAbsolute as a,normalize as l,makeData as p}from"../core/urlUtils.js";import{s as h}from"../chunks/jsonMap.js";import{e as m}from"../chunks/enumeration.js";import{r as u}from"../chunks/reader.js";import{w as y}from"../chunks/writer.js";import"../chunks/resourceExtension.js";import{f,t as d}from"../chunks/persistableUrlUtils.js";import"../chunks/mathUtils2.js";import"../chunks/colorUtils.js";import"../Color.js";import j from"./Symbol3DLayer.js";import"../chunks/screenUtils.js";import"../chunks/opacityUtils.js";import{s as b}from"../chunks/materialUtils.js";import{S as k}from"../chunks/Symbol3DMaterial.js";import{w as g,i as v}from"../chunks/colors.js";import{S as w}from"../chunks/Symbol3DOutline.js";var S;const x=h()({circle:"circle",square:"square",cross:"cross",x:"x",kite:"kite",triangle:"triangle"});let P=S=class extends n{constructor(r){super(r)}readHref(r,o,t){return r?f(r,t):o.dataURI}writeHref(r,o,t,e){r&&(c(r)?o.dataURI=r:(o.href=d(r,e),a(o.href)&&(o.href=l(o.href))))}clone(){return new S({href:this.href,primitive:this.primitive})}};r([e({type:String,json:{write:!0,read:{source:["href","dataURI"]}}})],P.prototype,"href",void 0),r([u("href")],P.prototype,"readHref",null),r([y("href",{href:{type:String},dataURI:{type:String}})],P.prototype,"writeHref",null),r([m(x)],P.prototype,"primitive",void 0),P=S=r([i("esri.symbols.support.IconSymbol3DLayerResource")],P);const U="circle";var z,I=P;let L=z=class extends s{constructor(){super(...arguments),this.x=0,this.y=0}clone(){return new z({x:this.x,y:this.y})}};r([e({type:Number})],L.prototype,"x",void 0),r([e({type:Number})],L.prototype,"y",void 0),L=z=r([i("esri.symbols.support.Symbol3DAnchorPosition2D")],L);var D,R=L;const M=o.getLogger("esri.symbols.IconSymbol3DLayer");let N=D=class extends j{constructor(r){super(r),this.material=null,this.resource=null,this.type="icon",this.size=12,this.anchor="center",this.anchorPosition=void 0,this.outline=void 0}clone(){return new D({anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),enabled:this.enabled,material:t(this.material)?this.material.clone():null,outline:t(this.outline)?this.outline.clone():null,resource:this.resource&&this.resource.clone(),size:this.size})}static fromSimpleMarkerSymbol(r){const o=r.color||g,t=O(r),e=r.outline&&r.outline.width>0?{size:r.outline.width,color:(r.outline.color||g).clone()}:null;return new D({size:r.size,resource:{primitive:A(r.style)},material:{color:o},outline:e,anchor:t?"relative":void 0,anchorPosition:t})}static fromPictureMarkerSymbol(r){const o=!r.color||v(r.color)?g:r.color,t=O(r);return new D({size:r.width<=r.height?r.height:r.width,resource:{href:r.url},material:{color:o.clone()},anchor:t?"relative":void 0,anchorPosition:t})}static fromCIMSymbol(r){return new D({resource:{href:p({mediaType:"application/json",data:JSON.stringify(r.data)})}})}};function O(r){const o="width"in r?r.width:r.size,t="height"in r?r.height:r.size,e=q(r.xoffset),s=q(r.yoffset);return(e||s)&&o&&t?{x:-e/o,y:s/t}:null}function q(r){return isFinite(r)?r:0}r([e({type:k,json:{write:!0}})],N.prototype,"material",void 0),r([e({type:I,json:{write:!0}})],N.prototype,"resource",void 0),r([m({Icon:"icon"},{readOnly:!0})],N.prototype,"type",void 0),r([e(b)],N.prototype,"size",void 0),r([m({center:"center",left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",relative:"relative"}),e({json:{default:"center"}})],N.prototype,"anchor",void 0),r([e({type:L,json:{type:[Number],read:{reader:r=>new L({x:r[0],y:r[1]})},write:{writer:(r,o)=>{o.anchorPosition=[r.x,r.y]},overridePolicy(){return{enabled:"relative"===this.anchor}}}}})],N.prototype,"anchorPosition",void 0),r([e({type:w,json:{write:!0}})],N.prototype,"outline",void 0),N=D=r([i("esri.symbols.IconSymbol3DLayer")],N);const H={circle:"circle",cross:"cross",diamond:"kite",square:"square",x:"x",triangle:"triangle",path:null};function A(r){const o=H[r];return o||(M.warn(`${r} cannot be mapped to Icon symbol. Fallback to "circle"`),"circle")}var C=N;export default C;export{R as S,U as d};
