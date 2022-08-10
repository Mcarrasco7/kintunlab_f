/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/JSONSupport.js";import"../core/urlUtils.js";import"../chunks/jsonMap.js";import"../chunks/reader.js";import"../chunks/resourceExtension.js";import"../chunks/mathUtils2.js";import"../chunks/colorUtils.js";import"../Color.js";import t from"./Symbol.js";import{t as e}from"../chunks/screenUtils.js";let i=class extends t{constructor(s){super(s),this.angle=0,this.type=null,this.xoffset=0,this.yoffset=0,this.size=9}hash(){return`${this.type}.${this.angle}.${this.size}.${this.xoffset}.${this.yoffset}`}};s([r({type:Number,json:{read:s=>s&&-1*s,write:(s,r)=>r.angle=s&&-1*s}})],i.prototype,"angle",void 0),s([r({type:["simple-marker","picture-marker"],readOnly:!0})],i.prototype,"type",void 0),s([r({type:Number,cast:e,json:{write:!0}})],i.prototype,"xoffset",void 0),s([r({type:Number,cast:e,json:{write:!0}})],i.prototype,"yoffset",void 0),s([r({type:Number,cast:s=>"auto"===s?s:e(s),json:{write:!0}})],i.prototype,"size",void 0),i=s([o("esri.symbols.MarkerSymbol")],i);var p=i;export default p;
