/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../config.js";import{i as o}from"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/JSONSupport.js";import"../core/urlUtils.js";import"../chunks/jsonMap.js";import{e as i}from"../chunks/enumeration.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../chunks/mathUtils2.js";import"../chunks/colorUtils.js";import e from"../Color.js";import p from"./Symbol3DLayer.js";import{p as l}from"../chunks/screenUtils.js";import"../chunks/opacityUtils.js";import{s as n,a as m}from"../chunks/materialUtils.js";import{S as a}from"../chunks/Symbol3DMaterial.js";import{w as c}from"../chunks/colors.js";var u;let j=u=class extends p{constructor(t){super(t),this.material=null,this.type="line",this.join="miter",this.cap="butt",this.size=l(1),this.stipplePattern=null,this.stippleOffColor=null}clone(){return new u({enabled:this.enabled,material:o(this.material)?this.material.clone():null,size:this.size,join:this.join,cap:this.cap,stipplePattern:this.stipplePattern?this.stipplePattern.slice():null,stippleOffColor:this.stippleOffColor?this.stippleOffColor.clone():null})}static fromSimpleLineSymbol(t){return new u({size:t.width||1,cap:t.cap||"butt",join:t.join||"miter",material:{color:(t.color||c).clone()}})}};t([s({type:a,json:{write:!0}})],j.prototype,"material",void 0),t([i({Line:"line"},{readOnly:!0})],j.prototype,"type",void 0),t([s({type:["miter","bevel","round"],json:{write:!0,default:"miter"}})],j.prototype,"join",void 0),t([s({type:["butt","square","round"],json:{write:!0,default:"butt"}})],j.prototype,"cap",void 0),t([s(n)],j.prototype,"size",void 0),t([s(m)],j.prototype,"stipplePattern",void 0),t([s({type:e})],j.prototype,"stippleOffColor",void 0),j=u=t([r("esri.symbols.LineSymbol3DLayer")],j);var h=j;export default h;
