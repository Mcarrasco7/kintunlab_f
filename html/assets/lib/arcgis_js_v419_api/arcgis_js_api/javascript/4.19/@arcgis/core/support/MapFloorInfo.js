/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import{a as e}from"../chunks/JSONSupport.js";import"../core/urlUtils.js";import"../chunks/resourceExtension.js";import t from"../layers/support/FacilityLayerInfo.js";import i from"../layers/support/LevelLayerInfo.js";import p from"../layers/support/SiteLayerInfo.js";let c=class extends e{constructor(r){super(r),this.levelLayer=null,this.facilityLayer=null,this.siteLayer=null}};r([o({type:i,json:{write:!0,origins:{"web-scene":{write:!1}}}})],c.prototype,"levelLayer",void 0),r([o({type:t,json:{write:!0,origins:{"web-scene":{write:!1}}}})],c.prototype,"facilityLayer",void 0),r([o({type:p,json:{write:!0,origins:{"web-scene":{write:!1}}}})],c.prototype,"siteLayer",void 0),c=r([s("esri.support.MapFloorInfo")],c);var n=c;export default n;