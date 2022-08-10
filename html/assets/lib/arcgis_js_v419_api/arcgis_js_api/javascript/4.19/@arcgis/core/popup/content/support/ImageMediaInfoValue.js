/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import"../../../chunks/ArrayPool.js";import"../../../core/lang.js";import"../../../chunks/deprecate.js";import"../../../chunks/object.js";import"../../../config.js";import"../../../chunks/Logger.js";import"../../../chunks/string.js";import"../../../chunks/metadata.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/Accessor.js";import"../../../chunks/PropertyOrigin.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../chunks/Message.js";import"../../../core/Error.js";import"../../../chunks/ensureType.js";import{subclass as o}from"../../../core/accessorSupport/decorators/subclass.js";import{a as t}from"../../../chunks/JSONSupport.js";import"../../../core/urlUtils.js";import"../../../chunks/resourceExtension.js";var e;let i=e=class extends t{constructor(r){super(r),this.linkURL=null,this.sourceURL=null}clone(){return new e({linkURL:this.linkURL,sourceURL:this.sourceURL})}};r([s({type:String,json:{write:!0}})],i.prototype,"linkURL",void 0),r([s({type:String,json:{write:!0}})],i.prototype,"sourceURL",void 0),i=e=r([o("esri.popup.content.support.ImageMediaInfoValue")],i);var p=i;export default p;