/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import{clone as o}from"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/JSONSupport.js";import"../core/urlUtils.js";import{cast as r}from"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import{e as s}from"../chunks/enumeration.js";import"../chunks/reader.js";import{w as n}from"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../chunks/mathUtils2.js";import"../chunks/colorUtils.js";import h from"../Color.js";import l from"./Symbol.js";import{t as p}from"../chunks/screenUtils.js";import a from"./Font.js";var c;let m=c=class extends l{constructor(...t){super(...t),this.backgroundColor=null,this.borderLineColor=null,this.borderLineSize=null,this.font=new a,this.horizontalAlignment="center",this.kerning=!0,this.haloColor=null,this.haloSize=null,this.rightToLeft=null,this.rotated=!1,this.text="",this.type="text",this.verticalAlignment=null,this.xoffset=0,this.yoffset=0,this.angle=0,this.width=null,this.lineWidth=192,this.lineHeight=1}normalizeCtorArgs(t,o,e){if(t&&"string"!=typeof t)return t;const i={};return t&&(i.text=t),o&&(i.font=o),e&&(i.color=e),i}writeLineWidth(t,o,e,i){i&&"string"!=typeof i?i.origin:o[e]=t}castLineWidth(t){return p(t)}writeLineHeight(t,o,e,i){i&&"string"!=typeof i?i.origin:o[e]=t}clone(){return new c({angle:this.angle,backgroundColor:o(this.backgroundColor),borderLineColor:o(this.borderLineColor),borderLineSize:this.borderLineSize,color:o(this.color),font:this.font&&this.font.clone(),haloColor:o(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,lineHeight:this.lineHeight,lineWidth:this.lineWidth,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){return`${this.backgroundColor&&this.backgroundColor.hash()}.${this.borderLineColor}.${this.borderLineSize}.${this.color.hash()}.${this.font&&this.font.hash()}.${this.haloColor&&this.haloColor.hash()}.${this.haloSize}.${this.horizontalAlignment}.${this.kerning}.${this.rightToLeft}.${this.rotated}.${this.text}.${this.verticalAlignment}.${this.width}.${this.xoffset}.${this.yoffset}.${this.lineHeight}.${this.lineWidth}.${this.angle}`}};t([e({type:h,json:{write:!0}})],m.prototype,"backgroundColor",void 0),t([e({type:h,json:{write:!0}})],m.prototype,"borderLineColor",void 0),t([e({type:Number,json:{write:!0}})],m.prototype,"borderLineSize",void 0),t([e({type:a,json:{write:!0}})],m.prototype,"font",void 0),t([e({type:["left","right","center","justify"],json:{write:!0}})],m.prototype,"horizontalAlignment",void 0),t([e({type:Boolean,json:{write:!0}})],m.prototype,"kerning",void 0),t([e({type:h,json:{write:!0}})],m.prototype,"haloColor",void 0),t([e({type:Number,cast:p,json:{write:!0}})],m.prototype,"haloSize",void 0),t([e({type:Boolean,json:{write:!0}})],m.prototype,"rightToLeft",void 0),t([e({type:Boolean,json:{write:!0}})],m.prototype,"rotated",void 0),t([e({type:String,json:{write:!0}})],m.prototype,"text",void 0),t([s({esriTS:"text"},{readOnly:!0})],m.prototype,"type",void 0),t([e({type:["baseline","top","middle","bottom"],json:{write:!0}})],m.prototype,"verticalAlignment",void 0),t([e({type:Number,cast:p,json:{write:!0}})],m.prototype,"xoffset",void 0),t([e({type:Number,cast:p,json:{write:!0}})],m.prototype,"yoffset",void 0),t([e({type:Number,json:{read:t=>t&&-1*t,write:(t,o)=>o.angle=t&&-1*t}})],m.prototype,"angle",void 0),t([e({type:Number,json:{write:!0}})],m.prototype,"width",void 0),t([e({type:Number})],m.prototype,"lineWidth",void 0),t([n("lineWidth")],m.prototype,"writeLineWidth",null),t([r("lineWidth")],m.prototype,"castLineWidth",null),t([e({type:Number})],m.prototype,"lineHeight",void 0),t([n("lineHeight")],m.prototype,"writeLineHeight",null),m=c=t([i("esri.symbols.TextSymbol")],m);var d=m;export default d;
