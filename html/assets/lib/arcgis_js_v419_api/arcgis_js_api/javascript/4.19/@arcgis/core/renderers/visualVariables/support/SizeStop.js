/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import"../../../chunks/ArrayPool.js";import"../../../core/lang.js";import"../../../chunks/deprecate.js";import"../../../chunks/object.js";import"../../../config.js";import"../../../chunks/Logger.js";import"../../../chunks/string.js";import"../../../chunks/metadata.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/Accessor.js";import"../../../chunks/PropertyOrigin.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../chunks/Message.js";import"../../../core/Error.js";import"../../../chunks/ensureType.js";import{subclass as o}from"../../../core/accessorSupport/decorators/subclass.js";import{a as e}from"../../../chunks/JSONSupport.js";import"../../../core/urlUtils.js";import"../../../chunks/resourceExtension.js";import{t}from"../../../chunks/screenUtils.js";var i;let p=i=class extends e{constructor(r){super(r),this.label=null,this.size=null,this.value=null}clone(){return new i({label:this.label,size:this.size,value:this.value})}};r([s({type:String,json:{write:!0}})],p.prototype,"label",void 0),r([s({type:Number,cast:t,json:{write:!0}})],p.prototype,"size",void 0),r([s({type:Number,json:{write:!0}})],p.prototype,"value",void 0),p=i=r([o("esri.renderers.visualVariables.support.SizeStop")],p);var c=p;export default c;
