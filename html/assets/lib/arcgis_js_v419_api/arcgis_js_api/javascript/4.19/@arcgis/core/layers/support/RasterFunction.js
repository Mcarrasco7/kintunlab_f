/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import{clone as n}from"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import{a as o}from"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../chunks/jsonMap.js";import{e as i}from"../../chunks/enumeration.js";import{r as s}from"../../chunks/reader.js";import{w as u}from"../../chunks/writer.js";import"../../chunks/resourceExtension.js";var a;const c=new Set(["raster","raster2","dem","fillraster"]),p=new Set(["rasters"]),m=t=>t&&t.rasterFunction?d.fromJSON(t):t,f=t=>t&&t instanceof d?t.toJSON():t,l=t=>(null==t?void 0:t.functionName)&&!t.declaredClass,y=t=>l(t)?new d(t):t;var h;!function(t){t[t.MOSAIC=0]="MOSAIC",t[t.GROUP=1]="GROUP",t[t.ITEM=2]="ITEM"}(h||(h={}));let d=a=class extends o{constructor(t){super(t),this.functionName=null,this.outputPixelType="unknown",this.variableName=null,this.description=null,this.functionDefinition=null,this.thumbnail=null}set functionArguments(t){if(t){const e=Object.keys(t);if(e.some((n=>c.has(n.toLowerCase())&&l(t[n])))||e.some((n=>p.has(n.toLowerCase())&&Array.isArray(t[n])&&t[n].some((t=>l(t)))))){t=n(t);for(const n of e)c.has(n.toLowerCase())?t[n]=y(t[n]):p.has(n.toLowerCase())&&Array.isArray(t[n])&&(t[n]=t[n].map((t=>y(t))))}}this._set("functionArguments",t)}readFunctionArguments(t,e){return(t=>{if(null==t)return null;t=n(t);const e={};for(const n of Object.keys(t))c.has(n.toLowerCase())?e[n]=m(t[n]):p.has(n.toLowerCase())&&Array.isArray(t[n])?e[n]=t[n].map(m):e[n]=t[n];return e})(e.arguments||e.rasterFunctionArguments)}writeFunctionArguments(t,n,e){const r={};for(const n of Object.keys(t))c.has(n.toLowerCase())?r[n]=f(t[n]):p.has(n.toLowerCase())&&Array.isArray(t[n])?r[n]=t[n].map(f):r[n]=f(t[n]);this.functionDefinition?n.arguments=r:n[e]=r}readFunctionName(t,n){const e=n.rasterFunctionInfos,r=n.name;return r||(e&&e.length&&"None"!==e[0].name?e[0].name:n.rasterFunction)}writeFunctionName(t,n,e){this.functionDefinition?n.name=t:n[e]=t}readFunctionType(t){return h[t]}writeFunctionType(t,n,e){n[e]=h[t]}clone(){return new a({functionName:this.functionName,functionArguments:n(this.functionArguments),outputPixelType:this.outputPixelType,variableName:this.variableName,description:this.description,functionType:this.functionType,functionDefinition:this.functionDefinition,thumbnail:this.thumbnail})}};t([e({json:{type:Object,write:{target:"rasterFunctionArguments"}}})],d.prototype,"functionArguments",null),t([s("functionArguments",["rasterFunctionArguments","arguments"])],d.prototype,"readFunctionArguments",null),t([u("functionArguments")],d.prototype,"writeFunctionArguments",null),t([e({json:{type:String,write:{target:"rasterFunction"}}})],d.prototype,"functionName",void 0),t([s("functionName",["rasterFunction","rasterFunctionInfos","name"])],d.prototype,"readFunctionName",null),t([u("functionName")],d.prototype,"writeFunctionName",null),t([i({C128:"c128",C64:"c64",F32:"f32",F64:"f64",S16:"s16",S32:"s32",S8:"s8",U1:"u1",U16:"u16",U2:"u2",U32:"u32",U4:"u4",U8:"u8",UNKNOWN:"unknown"},{ignoreUnknown:!1}),e({json:{default:"unknown"}})],d.prototype,"outputPixelType",void 0),t([e({type:String,json:{read:!0,write:!0}})],d.prototype,"variableName",void 0),t([e({type:String,json:{read:!0,write:!0,origins:{"web-document":{read:!1,write:!1}}}})],d.prototype,"description",void 0),t([e({json:{origins:{"web-document":{read:!1,write:!1}}}})],d.prototype,"functionType",void 0),t([s("functionType")],d.prototype,"readFunctionType",null),t([u("functionType")],d.prototype,"writeFunctionType",null),t([e({type:Object,json:{read:{source:"function"},write:{target:"function"},origins:{"web-document":{read:!1,write:!1}}}})],d.prototype,"functionDefinition",void 0),t([e({type:String,json:{read:!0,write:!0,origins:{"web-document":{read:!1,write:!1}}}})],d.prototype,"thumbnail",void 0),d=a=t([r("esri.layers.support.RasterFunction")],d);var j=d;export default j;