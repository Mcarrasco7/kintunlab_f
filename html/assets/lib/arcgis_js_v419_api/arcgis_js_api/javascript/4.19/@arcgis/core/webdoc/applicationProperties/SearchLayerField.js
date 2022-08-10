/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import{a as t}from"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../chunks/jsonMap.js";import{e}from"../../chunks/enumeration.js";import"../../chunks/resourceExtension.js";import{k as p}from"../../chunks/fieldType.js";var i;let c=i=class extends t{constructor(r){super(r),this.exactMatch=!1,this.name=null,this.type=null}clone(){return new i({exactMatch:this.exactMatch,type:this.type,name:this.name})}};r([s({type:Boolean,json:{write:!0}})],c.prototype,"exactMatch",void 0),r([s({type:String,json:{write:!0}})],c.prototype,"name",void 0),r([e(p)],c.prototype,"type",void 0),c=i=r([o("esri.webdoc.applicationProperties.SearchLayerField")],c);var n=c;export default n;
